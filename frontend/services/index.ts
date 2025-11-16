import { AppConfig } from "@/config";
import constantServices from "@/constants/services";
import { customError } from "@/helper/error/customError";
import { isError } from "@/helper/error/deprecated";
import {
    createApi,
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const BASE_URL = AppConfig.apiBaseUrl;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithInterceptors: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (isError(result)) {
        result.error = customError(result.error);
        if (result.error.status == constantServices.STATUS_UNAUTHORIZED) {
            //handle token refresh here
        }
    }
    return result;
};

export const api = createApi({
    baseQuery: baseQueryWithInterceptors,
    tagTypes: ["User", "Auth"],
    endpoints: () => ({}),
});
