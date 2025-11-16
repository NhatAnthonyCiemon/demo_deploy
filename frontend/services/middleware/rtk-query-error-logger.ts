import { Middleware } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toastManager } from "@/helper/toast/toast-manager";
import serviceConstants from "@/constants/services";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const error = action.payload as FetchBaseQueryError;
        if (error.status == serviceConstants.STATUS_NOT_CLIENT_ERROR) {
            toastManager.show(error.data as string, "error");
        }
    }

    return next(action);
};
