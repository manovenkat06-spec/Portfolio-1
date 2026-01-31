import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter-tight"
});

export const metadata: Metadata = {
    title: "Manobala MVJ | Product Designer",
    description: "UI/UX Designer and Product Designer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${interTight.variable} font-sans antialiased bg-[#0F0F12] text-white selection:bg-[#FF7A00]/30`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
