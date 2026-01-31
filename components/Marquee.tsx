"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeItem {
    image: string;
    title: string;
    category: string;
}

export default function Marquee({ items }: { items: MarqueeItem[] }) {
    return (
        <div className="relative flex overflow-hidden py-20 bg-accent/5 border-y border-border/30">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap px-4"
            >
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="inline-flex flex-col gap-4 w-[300px] p-4 rounded-[28px] glass-card bento-glow group transition-premium"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-bg-primary">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="px-2 pb-2">
                            <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">{item.category}</p>
                            <h4 className="text-white font-bold text-sm group-hover:text-accent transition-colors">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Gradient Mask */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-bg-primary to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-bg-primary to-transparent z-20 pointer-events-none" />
        </div>
    );
}
