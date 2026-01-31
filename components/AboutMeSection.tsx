"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "./Buttons";

export default function AboutMeSection({ person }: { person: any }) {
    const [imgError, setImgError] = useState(false);

    return (
        <section id="about" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Left: Portrait */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                    className="lg:col-span-5 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-10" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border shadow-2xl bg-bg-secondary flex items-center justify-center">
                            {!imgError ? (
                                <img
                                    src={person.portrait || "/images/portrait_2.png"}
                                    alt={person.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 contrast-[1.05]"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                                    <span className="text-white/20 font-bold text-4xl">MM</span>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div>
                        <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Introduction</span>
                        <h2 className="font-tight text-4xl md:text-5xl font-bold text-white mt-4">About Me</h2>
                    </div>

                    <p className="text-text-secondary text-lg leading-relaxed font-light">
                        {person.summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <PrimaryButton href="https://drive.google.com/file/d/1n1NIpnAxKMF-htoPc-alGbDs7xN8o5PT/view?usp=sharing">Resume</PrimaryButton>
                    </div>

                    <div className="pt-10">
                        <div className="flex flex-wrap gap-8 justify-between">
                            {person.skills.tools.map((tool: any, i: number) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <div className="relative w-20 h-20">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                            {/* Background circle */}
                                            <circle
                                                className="text-border stroke-current"
                                                strokeWidth="6"
                                                fill="transparent"
                                                r="40"
                                                cx="50"
                                                cy="50"
                                            />
                                            {/* Progress circle */}
                                            <motion.circle
                                                className="text-accent stroke-current"
                                                strokeWidth="6"
                                                strokeDasharray={251.2}
                                                initial={{ strokeDashoffset: 251.2 }}
                                                whileInView={{ strokeDashoffset: 251.2 - (251.2 * tool.level) / 100 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                strokeLinecap="round"
                                                fill="transparent"
                                                r="40"
                                                cx="50"
                                                cy="50"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{tool.level}%</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
