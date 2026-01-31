"use client";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "DISCOVER",
        desc: "Understanding the problem and defining the goal."
    },
    {
        num: "02",
        title: "IDEATE",
        desc: "Brainstorm ideas and explore multiple design directions."
    },
    {
        num: "03",
        title: "DESIGN",
        desc: "Develop high-fidelity designs, focusing on usability and aesthetics."
    },
    {
        num: "04",
        title: "TEST & REFINE",
        desc: "Conduct usability testing to identify potential pain points."
    }
];

export default function ProcessSection() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                className="mb-16"
            >
                <div className="inline-block px-3 py-1 bg-bg-secondary border border-border rounded-full text-[10px] text-accent font-bold tracking-widest uppercase mb-8">
                    METHODOLOGY
                </div>
                <h2 className="font-tight text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-[-0.01em] max-w-4xl text-gradient">
                    Strategic Workflow: <br />Insights to Impact.
                </h2>
                <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                    A structured approach built on empathy, strategy, and iterative refinement.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                        className="glass-card p-10 rounded-[32px] bento-glow transition-premium group"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-accent font-mono text-sm">{step.num}.</span>
                            <h3 className="text-white font-bold text-sm tracking-widest group-hover:text-accent transition-colors">{step.title}</h3>
                        </div>
                        <p className="text-text-secondary text-[15px] leading-relaxed font-light">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
