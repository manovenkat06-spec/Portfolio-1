"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "./Buttons";

export default function ContactSection() {
    return (
        <section id="contact" className="relative z-10 py-32 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Get in Touch</span>
                        <h2 className="font-tight text-4xl md:text-6xl font-bold text-white">Let's build something <span className="italic text-accent">extraordinary.</span></h2>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed font-light">
                        I am always open to discussing new projects, creative ideas, or being part of your vision.
                    </p>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-[24px] border-border bg-[#141418]"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-[#1F1F24] border border-border rounded-[10px] px-4 py-3 text-white placeholder:text-text-muted focus:border-accent outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-[#1F1F24] border border-border rounded-[10px] px-4 py-3 text-white placeholder:text-text-muted focus:border-accent outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full bg-[#1F1F24] border border-border rounded-[10px] px-4 py-3 text-white placeholder:text-text-muted focus:border-accent outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Subject</label>
                                <select
                                    className="w-full bg-[#1F1F24] border border-border rounded-[10px] px-4 py-3 text-white placeholder:text-text-muted focus:border-accent outline-none transition-colors appearance-none"
                                >
                                    <option value="UX Design">UX Design</option>
                                    <option value="UI Design">UI Design</option>
                                    <option value="AI Design">AI Design</option>
                                    <option value="Collaboration">Collaboration</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Message</label>
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full bg-[#1F1F24] border border-border rounded-[10px] px-4 py-3 text-white placeholder:text-text-muted focus:border-accent outline-none transition-colors"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <PrimaryButton className="!px-10">
                                Send Message
                            </PrimaryButton>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
