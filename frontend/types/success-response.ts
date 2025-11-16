import { GeneralResponse } from "./response";
export type SuccessResponse<T> = GeneralResponse & {
    data: T;
    pagination?: Pagination;
};

type Pagination = {
    page: number;
    limit: number;
    total: number;
};
