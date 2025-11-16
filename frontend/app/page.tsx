"use client";
import Link from "next/link";
import { useToast } from "@/components/ui/toast-provider";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
    const { showToast } = useToast();
    useEffect(() => {
        showToast("Chào mừng bạn đến với Mailbox AI!", "success");
    }, []);
    const { t } = useTranslation();
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl px-6 py-24 text-center sm:px-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {t("common.language")}
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
                    Chào mừng đến Mailbox AI
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                    Xây dựng workflow email thông minh nhanh chóng và dễ dàng.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {/* Đổi đường dẫn dưới đây theo route của bạn, ví dụ: /dashboard */}
                    <Link
                        href="/dashboard"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                    >
                        Bắt đầu
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-zinc-900">
                        <h3 className="text-sm font-semibold text-black dark:text-zinc-50">
                            Nhanh và đơn giản
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Khởi tạo dự án trong vài phút với cấu hình sẵn sàng.
                        </p>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-zinc-900">
                        <h3 className="text-sm font-semibold text-black dark:text-zinc-50">
                            Tích hợp dễ dàng
                        </h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Kết nối API và dịch vụ email chỉ với vài dòng code.
                        </p>
                    </div>
                </div>

                <footer className="mt-16 text-xs text-zinc-500 dark:text-zinc-500">
                    © {new Date().getFullYear()} Mailbox AI
                </footer>
            </main>
        </div>
    );
}
