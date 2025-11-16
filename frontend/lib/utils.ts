import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge multiple class names into one.
 */
export function cn(...inputs: Array<ClassValue>): string {
    return twMerge(clsx(inputs));
}

/**
 * Checks if the current environment is production.
 */
export const isProduction = process.env.NODE_ENV === "production";
