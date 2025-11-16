"use client";

import { Provider } from "react-redux";
import { ToastProvider } from "@/components/ui/toast-provider";
import store from "../store";
import { LanguageProvider } from "@/components/provider/LanguageProvider";

export default function ProviderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ToastProvider>
            <Provider store={store}>
                <LanguageProvider>{children}</LanguageProvider>
            </Provider>
        </ToastProvider>
    );
}
