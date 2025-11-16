import type { AuthStackError } from "@/services/auth/types";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type AuthError = FetchBaseQueryError & { data: AuthStackError };

export const isAuthError = (x: unknown): x is AuthStackError => {
    return typeof x === "object" && x !== null && "isErrorAuth" in x;
};

export const isCustomError = (x: unknown): x is FetchBaseQueryError => {
    return typeof x === "object" && x !== null && "status" in x;
};

export const isAuthErrorCustom = (x: unknown): x is AuthError => {
    return isCustomError(x) && isAuthError(x.data);
};

export const isError = (x: unknown): x is { error: FetchBaseQueryError } => {
    return typeof x === "object" && x !== null && "error" in x;
};
