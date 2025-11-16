import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-900 text-white">
            {/* Background blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
            </div>

            <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-6 py-16">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    <span className="size-1.5 rounded-full bg-cyan-400" />
                    Trang không tồn tại
                </span>

                {/* 404 */}
                <div className="relative">
                    <div className="pointer-events-none absolute -inset-8 -z-10 rounded-4xl bg-linear-to-br from-cyan-400/10 via-sky-300/10 to-purple-400/10 blur-2xl" />
                    <h1 className="bg-linear-to-br from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl select-none">
                        404
                    </h1>
                </div>

                {/* Title & description */}
                <div className="max-w-2xl text-center">
                    <h2 className="mb-3 text-2xl font-semibold sm:text-3xl text-white">
                        Ôi! Không tìm thấy trang bạn cần
                    </h2>
                    <p className="text-sm leading-6 text-slate-400">
                        Có thể đường dẫn đã bị thay đổi, trang đã bị xoá, hoặc
                        bạn đã nhập sai URL. Hãy quay lại trang chủ hoặc khám
                        phá các nội dung khác.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
                    >
                        Về trang chủ
                    </Link>
                    {/* <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/20"
                    >
                        Khám phá thêm
                    </Link> */}
                </div>

                {/* Footer */}
                <p className="mt-8 text-center text-xs text-white/50">
                    Mã lỗi: <span className="font-mono">404</span> — Không tìm
                    thấy tài nguyên
                </p>
            </section>
        </main>
    );
}
