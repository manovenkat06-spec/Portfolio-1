"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function PrimaryButton({ children, href, className = "" }: { children: React.ReactNode, href?: string, className?: string }) {
    const content = (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3.5 bg-accent text-white font-bold rounded-[10px] flex items-center gap-2 group shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all ${className}`}
        >
            {children}
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
    );

    if (href) return <Link href={href}>{content}</Link>;
    return content;
}

export function SecondaryButton({ children, href, className = "" }: { children: React.ReactNode, href?: string, className?: string }) {
    const content = (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-3.5 bg-transparent border border-border hover:bg-bg-secondary text-white font-bold rounded-[10px] flex items-center gap-2 transition-all ${className}`}
        >
            {children}
        </motion.div>
    );

    if (href) return <Link href={href}>{content}</Link>;
    return content;
}

export function GhostButton({ children, onClick, active }: { children: React.ReactNode, onClick?: () => void, active?: boolean }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-[10px] text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap ${active
                    ? "bg-accent text-white"
                    : "bg-transparent text-text-secondary hover:text-white"
                }`}
        >
            {children}
        </button>
    );
}
