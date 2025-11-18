import type { SkipToken } from "@reduxjs/toolkit/query";
import type { TypedUseQueryStateResult } from "@reduxjs/toolkit/query/react";

export type QueryOptions<T> = {
    /** Bỏ qua query, không gọi API */
    skip?: boolean;

    /** Giá trị đặc biệt thay cho skip trong trường hợp phức tạp */
    skipToken?: SkipToken;

    /** Polling: khoảng thời gian (ms) tự động refetch */
    pollingInterval?: number;

    /** Refetch khi component mount lại hoặc arg thay đổi */
    refetchOnMountOrArgChange?: boolean | number;

    /** Refetch khi cửa sổ/tab lấy lại focus */
    refetchOnFocus?: boolean;

    /** Refetch khi reconnect internet */
    refetchOnReconnect?: boolean;

    /** Cho phép chọn subset của result (performance tối ưu) */
    selectFromResult?: (result: TypedUseQueryStateResult<T, any, any>) => any;
};
