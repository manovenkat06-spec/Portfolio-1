"use client";

import HeroBlock from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import DesignThinkingSection from "@/components/DesignThinkingSection";
import AboutMeSection from "@/components/AboutMeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FloatingTaskbar from "@/components/FloatingTaskbar";
import { PERSON } from "@/lib/data";
import { motion, useScroll, useSpring } from "framer-motion";
import { MoveRight, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sectionVariants = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" }
    };

    return (
        <main className="relative bg-bg-primary min-h-screen selection:bg-accent/30 selection:text-white overflow-hidden">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Premium Background Layer */}
            <div className="mesh-bg" />
            <div className="noise-overlay" />
            <div className="grain-texture" />

            <FloatingTaskbar />

            <HeroBlock person={PERSON} />

            <div className="pb-32">
                <ServicesSection services={PERSON.services} />

                <DesignThinkingSection steps={PERSON.designThinking} />

                <AboutMeSection person={PERSON} />

                <PortfolioSection projects={PERSON.projects} />

                <ContactSection />
            </div>

            {/* Footer */}
            <footer className="relative z-10 py-32 bg-[#0F0F12] border-t border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                        <div className="space-y-6">
                            <span className="font-tight font-bold text-3xl text-white">MANOBALA MVJ</span>
                            <div className="flex items-center gap-6">
                                {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 text-right">
                            <div className="flex items-center gap-3 justify-end group">
                                <Mail className="w-4 h-4 text-accent" />
                                <a href="mailto:manovenkat06@gmail.com" className="text-text-secondary group-hover:text-white transition-colors">
                                    manovenkat06@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 justify-end group">
                                <Phone className="w-4 h-4 text-accent" />
                                <a href="tel:+916383317573" className="text-text-secondary group-hover:text-white transition-colors">
                                    +91 63833 17573
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-text-muted text-sm capitalize">
                            Designed by <span className="text-white font-medium">Manobala MVJ</span>, UX/UI & AX Designer
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href={PERSON.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-white transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
