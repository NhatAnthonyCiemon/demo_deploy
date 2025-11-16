import { api } from "@/services";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    useSelector as useReduxSelector,
    type TypedUseSelectorHook,
} from "react-redux";

// ======== Slices ======== //
import themeSlice from "@/store/slice/theme.slice";
import authSlice from "@/store/slice/auth.slice";
import { rtkQueryErrorLogger } from "@/services/middleware/rtk-query-error-logger";
const rootReducer = combineReducers({
    // add your reducers here ..
    theme: themeSlice,
    auth: authSlice,

    //App service reducer
    [api.reducerPath]: api.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
