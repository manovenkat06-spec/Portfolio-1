"use client";

import { motion } from "framer-motion";
import { Users, Target, Lightbulb, PenTool, RotateCcw } from "lucide-react";

const iconMap: { [key: string]: any } = {
    Users,
    Target,
    Lightbulb,
    PenTool,
    RotateCcw
};

export default function DesignThinkingSection({ steps }: { steps: any[] }) {
    return (
        <section id="process" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-32">
            <div className="mb-20">
                <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Methodology</span>
                <h2 className="font-tight text-4xl md:text-6xl font-bold text-white mt-4">Design Thinking Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {steps.map((step, i) => {
                    const IconComponent = iconMap[step.icon];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group h-full"
                        >
                            {/* Card Decoration */}
                            <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative glass-card h-full p-8 rounded-[24px] border-border bg-[#141418] flex flex-col items-start space-y-6 overflow-hidden">
                                {/* Step Number */}
                                <div className="absolute top-4 right-8 text-6xl font-bold text-white/5 group-hover:text-accent/10 transition-colors pointer-events-none">
                                    0{i + 1}
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent ring-1 ring-accent/20 group-hover:bg-accent group-hover:text-white group-hover:ring-accent transition-all duration-500 shadow-[0_0_20px_rgba(255,122,0,0.1)]">
                                    {IconComponent && <IconComponent className="w-7 h-7" />}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{step.phase}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connecting Line (on desktop) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gradient-to-r from-accent/20 to-transparent z-20" />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
