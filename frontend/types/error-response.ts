import { GeneralResponse } from "./response";
export type FieldError = {
    field: string;
    message: string;
    code: string;
};

export type ErrorDetail = {
    code: string;
    message: string;
    details?: FieldError[];
};

export type ErrorResponse = GeneralResponse & {
    error: ErrorDetail;
};
