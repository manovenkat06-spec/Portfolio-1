"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function HeroBlock({ person }: { person: any }) {
    const [imgError, setImgError] = useState(false);
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] as any }
        }
    };

    return (
        <section id="home" className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-col space-y-8"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <span className="text-text-secondary font-medium tracking-wide text-sm">Hi I am</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            {person.name}
                        </h1>
                        <h2 className="text-5xl md:text-7xl font-bold text-accent tracking-tight leading-tight">
                            {person.role}
                        </h2>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed font-light">
                        {person.tagline}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <PrimaryButton href="#contact">Hire Me</PrimaryButton>
                        <SecondaryButton href="https://drive.google.com/file/d/1n1NIpnAxKMF-htoPc-alGbDs7xN8o5PT/view?usp=sharing">Resume</SecondaryButton>
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10">
                        {person.metrics.map((metric: any, i: number) => (
                            <div key={i} className="glass-card p-6 rounded-[14px] border-border bg-[#141418] space-y-2">
                                <p className="text-2xl font-bold text-white">{metric.value}</p>
                                <p className="text-xs text-text-secondary uppercase tracking-widest leading-none">{metric.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
                    className="relative order-first lg:order-last flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Orange Rim Glow */}
                        <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse" />

                        {/* Portrait Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl shadow-accent/10 bg-bg-secondary flex items-center justify-center">
                            {!imgError ? (
                                <img
                                    src={person.portrait || "/images/portrait.png"}
                                    alt={person.name}
                                    className="w-full h-full object-cover contrast-[1.1] saturate-[1.05]"
                                    style={{ imageRendering: 'auto' }}
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                    <span className="text-accent font-bold text-6xl opacity-40">MVJ</span>
                                </div>
                            )}
                        </div>

                        {/* Extra soft glow */}
                        <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
