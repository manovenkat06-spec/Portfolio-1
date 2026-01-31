"use client";

import { useParams, useRouter } from "next/navigation";
import { PERSON } from "@/lib/data";
import { motion, useScroll, useSpring } from "framer-motion";
import { MoveLeft, ArrowRight, Share2, Calendar, Target, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    // Find the project data
    const project = PERSON.projects.find(p => p.title.toLowerCase().replace(/ /g, "-") === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-white p-6">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/" className="text-accent hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <main className="relative bg-bg-primary min-h-screen selection:bg-accent/30 selection:text-white pb-32">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Background elements */}
            <div className="mesh-bg opacity-50" />
            <div className="noise-overlay" />

            {/* Back Navigation */}
            <div className="fixed top-8 left-8 z-[70]">
                <Link
                    href="/"
                    className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-premium group"
                >
                    <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Project Hero */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-3 py-1 rounded-full glass-card border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest">
                            {project.role}
                        </span>
                        <div className="h-[1px] w-12 bg-border" />
                        <span className="text-text-muted text-[10px] uppercase tracking-widest">Case Study</span>
                    </div>

                    <h1 className="font-tight text-5xl md:text-8xl font-bold text-white mb-12 max-w-4xl text-gradient">
                        {project.title}.
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
                        <div className="space-y-1">
                            <p className="text-text-muted text-[10px] uppercase tracking-widest">Role</p>
                            <p className="text-white font-bold text-sm">Lead Designer</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-text-muted text-[10px] uppercase tracking-widest">Timeline</p>
                            <p className="text-white font-bold text-sm">3 Months</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-text-muted text-[10px] uppercase tracking-widest">Sector</p>
                            <p className="text-white font-bold text-sm">Enterprise / AI</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-text-muted text-[10px] uppercase tracking-widest">Deliverables</p>
                            <p className="text-white font-bold text-sm">UX Audit, Hi-Fi UI</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Large Hero Image */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
                    className="relative aspect-[21/9] rounded-[48px] overflow-hidden border border-border group"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-40" />
                </motion.div>
            </section>

            {/* Case Study Content */}
            <section className="px-6 md:px-12 max-w-4xl mx-auto space-y-32">
                {/* Problem Section */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-accent" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">The Challenge</h2>
                    </div>
                    <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-light">
                        {project.bullets.map((bullet, i) => (
                            <p key={i}>{bullet}</p>
                        ))}
                        <p>
                            The primary objective was to bridge the gap between complex technical safeguards and intuitive user behavior. Users were struggling to maintain compliance without sacrificing productivity.
                        </p>
                    </div>
                </div>

                {/* Insight Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card p-10 rounded-[40px] bento-glow space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Insight #1</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            62% of users unintentionally shared PII due to unclear interface cues and "security fatigue".
                        </p>
                    </div>
                    <div className="glass-card p-10 rounded-[40px] bento-glow space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                            <Share2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Insight #2</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Real-time governance reduced IT dependency by ~25% by empowering users to self-correct.
                        </p>
                    </div>
                </div>

                {/* Process / Narrative */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-accent" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Strategic Approach</h2>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed font-light">
                        I implemented an **Intent-Aware Governance** framework. Instead of reactive blocking, the system now provides proactive, educational nudges that help users understand *why* a policy exists.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs">01. Discovery</span>
                            <p className="text-white text-sm font-bold">Audit of 120+ workflows</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs">02. Design</span>
                            <p className="text-white text-sm font-bold">Real-time policy overlay</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs">03. Impact</span>
                            <p className="text-white text-sm font-bold">30% reduction in confusion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Navigation */}
            <section className="mt-40 border-t border-border pt-20 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-sm font-bold uppercase tracking-widest text-text-muted hover:text-white transition-colors flex items-center gap-2">
                    <MoveLeft className="w-4 h-4" />
                    All Projects
                </Link>
                <div className="flex items-center gap-4">
                    <Share2 className="w-4 h-4 text-text-muted" />
                    <span className="text-xs text-text-muted uppercase tracking-widest">Share Project</span>
                </div>
            </section>
        </main>
    );
}
