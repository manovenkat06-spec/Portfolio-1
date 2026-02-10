"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, FolderOpen, Mail, Activity } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Process", href: "#process", icon: Activity },
    { name: "About", href: "#about", icon: User },
    { name: "Portfolio", href: "#work", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingTaskbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Keep it always visible or visible very early
            setIsVisible(true);
        };
        window.addEventListener("scroll", handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Sections to observe
        const sections = ["home", "services", "about", "work", "contact"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: -100, x: "-50%", opacity: 0 }}
                    className="fixed top-8 left-1/2 z-[100]"
                >
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#141418]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.slice(1);

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative p-3 rounded-full group transition-all"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="taskbar-active"
                                            className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(255,122,0,0.5)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <Icon
                                        className={`relative z-10 w-5 h-5 transition-colors ${isActive ? "text-white" : "text-text-secondary group-hover:text-white"
                                            }`}
                                    />

                                    {/* Tooltip */}
                                    <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1F1F24] border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
