"use client";
import Link from "next/link";
import { PrimaryButton } from "./Buttons";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [logoError, setLogoError] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "#services" },
        { name: "About me", href: "#about" },
        { name: "Portfolio", href: "#work" },
        { name: "Contact me", href: "#contact" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass-nav" : "py-8 bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative h-7 flex items-center">
                            {!logoError ? (
                                <img
                                    src="/images/logo.png"
                                    alt="Manobala MVJ"
                                    className="h-full w-auto object-contain"
                                    onError={() => setLogoError(true)}
                                />
                            ) : (
                                <span className="logo-fallback font-tight font-bold text-xl text-white tracking-tighter">
                                    MANOBALA MVJ
                                </span>
                            )}
                        </div>
                    </Link>
                </div>

                {/* Center: Nav links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right: CTA */}
                <div className="flex-1 flex justify-end">
                    <PrimaryButton href="#contact" className="!px-6 !py-2.5">
                        Hire Me
                    </PrimaryButton>
                </div>
            </div>
        </nav>
    );
}
