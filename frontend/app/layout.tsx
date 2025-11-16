import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

import Provider from "./_provider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "700"],
});

const firaCode = Fira_Code({
    variable: "--font-fira-code",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Mailbox AI",
    description: "Your AI-powered email assistant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${firaCode.variable} antialiased`}
            >
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
