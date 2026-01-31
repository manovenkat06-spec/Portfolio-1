"use client";

import { motion } from "framer-motion";
import { MoveLeft, Shield, Users, Zap, Search, Layout, MessageSquare, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TeamsGuardrailCaseStudy() {
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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">TeamsGuardrail</h1>
                    <p className="text-xl md:text-2xl text-text-secondary font-light max-w-3xl leading-relaxed">
                        A human-centered security layer that transforms Microsoft Teams into a protective, intelligent workspace where AI (Copilot) acts as a safety teammate.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest">AI Safety</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary text-xs font-bold uppercase tracking-widest">Enterprise UX</span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-text-secondary text-xs font-bold uppercase tracking-widest">Governance</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Content */}
                    <div className="lg:col-span-8 space-y-24">
                        {/* Summary & North Star */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-accent uppercase tracking-widest text-sm">North Star</h2>
                            <p className="text-3xl font-tight font-medium text-white italic">"Make data protection feel like guidance, not governance."</p>
                        </section>

                        {/* Problem Statement */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold">Problem Statement</h2>
                            <p className="text-lg text-text-secondary">
                                Teams users frequently share sensitive content (documents, strategy notes, client data, screenshots, recordings) while collaborating with AI and teammates—often without realizing the risk.
                            </p>
                            <div className="bg-bg-secondary p-8 rounded-3xl border border-white/5 space-y-4">
                                <h4 className="font-bold text-white">Core problems:</h4>
                                <ul className="space-y-3 text-text-secondary list-disc pl-5">
                                    <li>No real-time detection of sensitive data inside chats or Copilot prompts</li>
                                    <li>AI can summarize confidential content without clear boundaries</li>
                                    <li>Meeting recordings persist indefinitely by default</li>
                                    <li>Users lack simple, moment-of-action privacy controls</li>
                                </ul>
                            </div>
                        </section>

                        {/* Personas */}
                        <section className="space-y-12">
                            <h2 className="text-3xl font-bold">Users & Pain Points</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="font-bold text-white underline decoration-accent underline-offset-8">The Team Collaborator</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Priya pastes confidential screenshots into chat accidentally. Fears data exposure but needs speed.</p>
                                </div>
                                <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="font-bold text-white underline decoration-accent underline-offset-8">The Manager</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Arun runs meetings and reviews decks. Unsure who can access past recordings and AI notes.</p>
                                </div>
                            </div>
                        </section>

                        {/* Prototype Concepts */}
                        <section className="space-y-12">
                            <h2 className="text-3xl font-bold">Core Experience Concepts</h2>
                            <div className="space-y-12">
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Real-Time Chat Guardrail</h4>
                                        <p className="text-text-secondary leading-relaxed">Inline scanner highlights sensitive text. Suggests: Redact | Make Private | Proceed Securely.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Copilot Safe Mode</h4>
                                        <p className="text-text-secondary leading-relaxed">Three presets: Open (normal), Private (no training), and Confidential (auto-delete).</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Meeting Sentinel</h4>
                                        <p className="text-text-secondary leading-relaxed">Pre-meeting risk indicators and post-meeting data control dashboards for recordings.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Impact */}
                        <section className="bg-accent/10 p-12 rounded-[2rem] border border-accent/20 space-y-8">
                            <h2 className="text-3xl font-bold text-accent">Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-white">40%</div>
                                    <div className="text-sm text-text-secondary">Reduction in accidental data leaks</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold text-white">Fast</div>
                                    <div className="text-sm text-text-secondary">Maintain creative collaboration speed</div>
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
                                    <p className="text-sm text-white">UX Research • AX Design</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Timeline</span>
                                    <p className="text-sm text-white">8 Weeks</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Deliverables</span>
                                    <p className="text-sm text-white">UX Audit, Prototypes, Design System Layer</p>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Key Tools</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">Figma</span>
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">UserTesting</span>
                                        <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold text-white">Miro</span>
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
