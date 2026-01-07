"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        id: 1,
        title: "Idea & Planning",
        description: "Brainstorming core features and mapping user flows to ensure a solid foundation.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Architecture",
        description: "Designing scalable systems and selecting the right tech stack for long-term growth.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "UI/UX Craft",
        description: "Blending aesthetics with usability to create immersive and intuitive interfaces.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Performance",
        description: "Optimizing every interaction for 60fps smoothness and instant load times.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block text-indigo-400 font-medium tracking-wider text-sm mb-4 uppercase"
                    >
                        The Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                    >
                        Systematic Creativity
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Central Beam */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2" />

                    {/* Active Beam (Progress) */}
                    <motion.div
                        className="absolute left-[20px] md:left-1/2 top-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                        style={{ height: useTransform(smoothProgress, [0.1, 0.85], ["0%", "100%"]) }}
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={step.id} className={`relative flex items-center md:justify-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Node Point */}
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0a0a] border border-neutral-800 flex items-center justify-center z-20 group">
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-neutral-600 transition-colors duration-500 group-hover:bg-indigo-400"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ margin: "-100px" }}
                                        />
                                        {/* Active Halo */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full border border-indigo-500/50"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ margin: "-100px" }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ margin: "-100px", once: true }}
                                        className={`ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
                                    >
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                                            <div className="w-12 h-12 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-indigo-400 mb-4 backdrop-blur-sm shadow-lg">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
