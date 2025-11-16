"use client";
import { useState, useCallback, useMemo } from "react";
import type { TypedMutationTrigger } from "@reduxjs/toolkit/query/react";
import { FieldError, ErrorResponse } from "@/types/error-response";
import { isCustomError } from "@/helper/error/deprecated";

export function useMutationHandler<
    H extends () => readonly [TypedMutationTrigger<any, any, any>, any],
    Name extends string
>(mutationHook: H, name: Name) {
    type Trigger = ReturnType<H>[0];
    type Result = Awaited<ReturnType<ReturnType<Trigger>["unwrap"]>>;

    const [trigger] = mutationHook();

    const [result, setResult] = useState<Result | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<FieldError[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAction = useCallback(
        async (args: Parameters<Trigger>[0], throwOnError = false) => {
            setIsLoading(true);
            setError(null);
            setMessage(null);
            setErrors(null);
            setResult(null);
            try {
                const res = await trigger(args).unwrap();
                setResult(res);
                return res;
            } catch (err) {
                if (isCustomError(err)) {
                    const e = err as any;
                    if (e.status !== 0) {
                        const errData = e.data as ErrorResponse;
                        if (errData?.error.code) setError(errData.error.code);
                        if (errData?.error.message)
                            setMessage(errData.error.message);
                        if (errData?.error.details)
                            setErrors(errData.error.details);
                    }
                    if (throwOnError) throw e;
                }
                return null;
            } finally {
                setIsLoading(false);
            }
        },
        [trigger]
    );

    // Các callback riêng biệt
    const action = useCallback(
        (args: Parameters<Trigger>[0]) => handleAction(args, false),
        [handleAction]
    );

    const unwrapAction: (args: Parameters<Trigger>[0]) => Promise<Result> =
        useCallback((args) => handleAction(args, true), [handleAction]);

    const errorInfo = useMemo(() => {
        if (error || message || (errors && errors.length > 0)) {
            return { error, errors, message };
        }
        return null;
    }, [error, errors, message]);

    return {
        [name]: action,
        [`${name}UnWrap`]: unwrapAction,
        result,
        error: errorInfo,
        isLoading,
    } as Record<Name, typeof action> &
        Record<`${Name}UnWrap`, typeof unwrapAction> & {
            result: Result | null;
            error: typeof errorInfo;
            isLoading: boolean;
        };
}

// Usage example:
// const { mutate, muteNoWrap, result, error, isLoading } = useMutationHandler(useCreateUserMutation, 'mutate');
