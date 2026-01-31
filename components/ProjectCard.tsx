"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col bg-[#141418] border border-[#1F1F24] rounded-[32px] overflow-hidden transition-all duration-500 hover:border-accent/40"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5 p-8 flex items-center justify-center">
                <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                    }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest uppercase flex items-center gap-2">
                        View Project <MoveRight className="w-5 h-5" />
                    </span>
                </div>

                {/* Tag */}
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full glass-card border-white/10 group-hover:opacity-0 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                        {project.tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {project.hoverText || project.role}
                </p>

                <div className="mt-auto flex items-center gap-4">
                    <Link
                        href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
                    >
                        Case Study
                    </Link>
                    <div className="h-[1px] flex-1 bg-border" />
                </div>
            </div>
        </motion.div>
    );
}
