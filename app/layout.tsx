import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";


export const metadata: Metadata = {
    title: "Sub-MOA Spoonie: Precision, Pain & Pride",
    description: "Learn more about what it means to be a Sub-MOA Spoonie, get Sub-MOA Spoonie Merch, and more.",
    icons: {
        icon: '/smoa-icon-16.png',
        shortcut: '/smoa-icon-512.png',
        apple: '/smoa-icon-512.png',
    },
    openGraph: {
        images: '/smoa-og2.jpg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/oxs3wpg.css"
                />
            </Head>
            <body className="font-sans">{children}</body>
        </html>
    );
}
