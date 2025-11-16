import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import serviceConstants from "@/constants/services";
export const customError = (error: any): FetchBaseQueryError => {
    //bắt backend và auth error
    if (error && error.status && typeof error.status === "number") {
        if (error.status === serviceConstants.STATUS_INTERNAL_ERROR) {
            return {
                status: serviceConstants.STATUS_NOT_CLIENT_ERROR,
                data: serviceConstants.DEFAULT_ERROR_MESSAGE,
            };
        }
        return {
            status: error.status,
            //dữ liệu lỗi nằm trong data
            data: error.isErrorAuth ? error : error.data || null,
            error: error.error || serviceConstants.DEFAULT_ERROR_MESSAGE,
        };
    }
    //lỗi do mạng
    if (error && error.status && typeof error.status === "string") {
        return {
            status: serviceConstants.STATUS_NOT_CLIENT_ERROR,
            data: String(error.error) || serviceConstants.DEFAULT_ERROR_MESSAGE,
        };
    }

    return {
        status: "CUSTOM_ERROR",
        data: serviceConstants.DEFAULT_ERROR_MESSAGE,
        error: serviceConstants.DEFAULT_ERROR_MESSAGE,
    };
};
