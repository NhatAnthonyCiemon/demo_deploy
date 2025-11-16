"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { toastManager } from "@/helper/toast/toast-manager";

export type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastContextProps {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (
        message: string,
        type: ToastType = "info",
        duration: number = 3000
    ) => {
        const id = Date.now() + Math.random();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    };

    // Đăng ký showToast vào toastManager (để middleware có thể gọi)
    toastManager.register(showToast);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div
                style={{
                    position: "fixed",
                    top: 20,
                    right: 20,
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                }}
            >
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        style={{
                            minWidth: 200,
                            padding: "12px 20px",
                            borderRadius: 6,
                            color: "#fff",
                            background:
                                toast.type === "success"
                                    ? "#4caf50"
                                    : toast.type === "error"
                                    ? "#f44336"
                                    : toast.type === "warning"
                                    ? "#ff9800"
                                    : "#2196f3",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            fontWeight: 500,
                        }}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
