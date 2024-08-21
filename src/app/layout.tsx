import Header from "@/app/components/Header";
import { Providers } from "@/app/components/Providers";
import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.scss";

const inter = M_PLUS_Rounded_1c({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false
});

export const metadata: Metadata = {
    title: "tksnn's Portfolio"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="description" content="tksnn's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
