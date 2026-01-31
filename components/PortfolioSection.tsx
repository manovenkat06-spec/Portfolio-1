"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { GhostButton } from "./Buttons";

export default function PortfolioSection({ projects }: { projects: any[] }) {
    const [filter, setFilter] = useState("All");

    const filters = ["All", "UX/AX", "AI Products", "Trust & Privacy"];

    const filteredProjects = projects.filter(project => {
        if (filter === "All") return true;
        return project.tag.includes(filter);
    });

    return (
        <section id="work" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="space-y-4">
                    <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Portfolio</span>
                    <h2 className="font-tight text-4xl md:text-6xl font-bold text-white">Projects</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                    {filters.map((f) => (
                        <GhostButton
                            key={f}
                            onClick={() => setFilter(f)}
                            active={filter === f}
                        >
                            {f}
                        </GhostButton>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProjectCard project={project} index={idx} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
