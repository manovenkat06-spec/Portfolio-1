"use client";

import { motion } from "framer-motion";
import { Search, Layers, Grid, Cpu, MessageSquare, Wrench } from "lucide-react";

const iconMap: { [key: string]: any } = {
    Search,
    Layers,
    Grid,
    Cpu,
    MessageSquare,
    Tool: Wrench
};

export default function ServicesSection({ services }: { services: any[] }) {
    return (
        <section id="services" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-32">
            <div className="mb-20">
                <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Specialization</span>
                <h2 className="font-tight text-4xl md:text-6xl font-bold text-white mt-4">Services & Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => {
                    const IconComponent = iconMap[service.icon];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="glass-card p-10 rounded-[24px] border-border bg-[#141418] space-y-4 hover:border-t-4 hover:border-t-accent transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                {IconComponent && <IconComponent className="w-6 h-6" />}
                            </div>
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
