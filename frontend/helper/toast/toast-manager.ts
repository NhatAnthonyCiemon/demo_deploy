// toastManager.ts
import { ToastType } from "@/components/ui/toast-provider";

let showToastFn: ((message: string, type?: ToastType) => void) | null = null;

export const toastManager = {
    register(fn: (message: string, type?: ToastType) => void) {
        showToastFn = fn;
    },
    show(message: string, type: ToastType = "info") {
        if (showToastFn) {
            showToastFn(message, type);
        } else {
            console.warn("ToastManager chưa được khởi tạo");
        }
    },
};
