"use client";

import { motion } from "framer-motion";
import { MoveLeft, Eye, Lock, Target, Search, BarChart, Zap, ShieldCheck, Heart, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TrustLensCaseStudy() {
    return (
        <main className="bg-bg-primary min-h-screen text-white pb-32">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-6 glass-nav px-6">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors group">
                        <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium uppercase tracking-widest">Back to Portfolio</span>
                    </Link>
                    <div className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Case Study</div>
                </div>
            </nav>

            <div className="pt-32 px-6 max-w-5xl mx-auto">
                {/* Hero Header */}
                <header className="space-y-6 mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">TrustLens</h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-light max-w-3xl leading-relaxed">
                        Reimagining AI data security as a real-time, human-centered experience that builds trust without friction.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest">Privacy UX</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary text-xs font-bold uppercase tracking-widest">Human-AI</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary text-xs font-bold uppercase tracking-widest">Trust & Safety</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Content */}
                    <div className="lg:col-span-8 space-y-24">
                        {/* Summary & Goal */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-accent uppercase tracking-widest text-sm">The Goal</h2>
                            <p className="text-3xl font-tight font-medium text-white italic">"Design data security into the interaction itself, not hidden behind policies."</p>
                        </section>

                        {/* Introduction */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold">Introduction</h2>
                            <p className="text-lg text-text-secondary">
                                As AI tools like ChatGPT and Gemini become everyday work partners, users increasingly share sensitive information without clear awareness. sentinel UX explores how to bridge this gap.
                            </p>
                        </section>

                        {/* Problem Statement */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold">Problem Statement</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white">The Gap</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Users rely on AI for high-stakes tasks but lack real-time clarity on data usage, storage, and retention.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-white">The Risk</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Accidental sharing of PII, buried privacy controls, and trust built on assumptions rather than transparency.</p>
                                </div>
                            </div>
                        </section>

                        {/* Concept */}
                        <section className="space-y-12">
                            <h2 className="text-3xl font-bold">Core Design Strategy</h2>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-white">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold">Real-Time Sensitive Data Detector</h4>
                                        <p className="text-text-secondary leading-relaxed text-sm">Inline detection that highlights sensitive data as users type, preventing accidental leaks before they happen.</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-white">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold">Privacy Mode Presets</h4>
                                        <p className="text-text-secondary leading-relaxed text-sm">One-tap modes (Public, Private, Confidential) that automatically adjust data rules per interaction.</p>
                                    </div>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent flex items-center justify-center text-white">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold">Post-Conversation Data Control</h4>
                                        <p className="text-text-secondary leading-relaxed text-sm">Clear data summary showing exactly what was used and offering one-click deletion or closure.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Lessons Learned */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold">Lessons Learned</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <p className="text-sm text-text-secondary">Security UX must be proactive, appearing exactly at the moment of action.</p>
                                </div>
                                <div className="flex gap-4">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <p className="text-sm text-text-secondary">Visual cues create faster trust than large walls of policy text.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Stats */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="space-y-6 sticky top-32">
                            <div className="bg-bg-secondary p-8 rounded-3xl border border-white/5 space-y-8">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Role</span>
                                    <p className="text-sm text-white">Privacy UX • AI Safety</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Duration</span>
                                    <p className="text-sm text-white">Focus Project</p>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Methods</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">User Interviews</span>
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">Competitive Analysis</span>
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">Prototyping</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
