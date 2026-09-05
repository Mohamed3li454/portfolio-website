"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PhoneSimulator from "./ui/PhoneSimulator";

const steps = [
    {
        id: 1,
        number: "01",
        title: "Idea & Planning",
        badge: "Blueprint Phase",
        description:
            "Deconstructing user requirements, mapping complete navigation flows, and drafting responsive wireframes to guarantee a crystal-clear technical roadmap.",
        tags: ["User Flow Mapping", "Wireframes", "Feature Scoping", "Tech Stack Selection"],
    },
    {
        id: 2,
        number: "02",
        title: "Clean Architecture & State",
        badge: "Engineering Phase",
        description:
            "Decoupling the application into Presentation, Domain, and Data layers. Structuring predictable state management with BLoC or Cubit so the codebase stays testable and scalable.",
        tags: ["Clean Architecture", "BLoC / Cubit", "Dependency Injection", "Repository Pattern"],
    },
    {
        id: 3,
        number: "03",
        title: "UI/UX & Motion Craft",
        badge: "Design Execution",
        description:
            "Translating designs into responsive Flutter widgets with pixel perfection, intuitive gestures, fluid micro-interactions, and adaptive layouts across iOS and Android.",
        tags: ["Flutter Widgets", "Material 3", "Responsive UI", "Micro-Interactions"],
    },
    {
        id: 4,
        number: "04",
        title: "Performance & Launch",
        badge: "Production Release",
        description:
            "Profiling rendering pipelines for rock-solid 60 FPS, eliminating frame drops, securing offline storage, and preparing production-grade builds for the App Store and Google Play.",
        tags: ["60 FPS Profiling", "Zero Jank", "App Store (iOS)", "Google Play (Android)"],
    },
];

export default function ProcessSection() {
    const [activeStage, setActiveStage] = useState<number>(1);

    return (
        <section id="process" className="relative py-28 sm:py-36 overflow-hidden">
            {/* Unified Deep Space Gradient - Seamless Continuity */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-mid)] via-[var(--gradient-mid-heavy)] to-[var(--gradient-mid)] pointer-events-none" />
            {/* Subtle Cosmic Accent Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(var(--cosmic-indigo),0.08)] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-indigo-400 font-semibold tracking-widest text-xs sm:text-sm mb-3 uppercase bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-500/20"
                    >
                        The Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
                    >
                        From Concept to Launch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-neutral-400 text-sm sm:text-base leading-relaxed"
                    >
                        A disciplined engineering pipeline for turning ideas into clean, maintainable, and high-performance mobile applications.
                    </motion.p>
                </div>

                {/* Mobile / Tablet Stage Selector Strip (< lg) */}
                <div className="flex lg:hidden items-center justify-start gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
                    {steps.map((step) => {
                        const isActive = step.id === activeStage;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveStage(step.id)}
                                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 border shrink-0 ${
                                    isActive
                                        ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                        : "bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                                }`}
                            >
                                <span className="font-mono text-[11px] opacity-80">{step.number}</span>
                                <span>{step.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Main 2-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left Column: Interactive Sticky Phone Mockup (5 cols) */}
                    <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                        <PhoneSimulator activeStage={activeStage} />
                    </div>

                    {/* Right Column: 4 Interactive Stage Cards (7 cols) */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                        {steps.map((step) => {
                            const isActive = step.id === activeStage;

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStage(step.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            setActiveStage(step.id);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    className={`relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left group overflow-hidden ${
                                        isActive
                                            ? "bg-neutral-900/80 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.18)]"
                                            : "bg-neutral-900/30 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700"
                                    }`}
                                >
                                    {/* Active Left Indicator Accent Bar */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-b from-indigo-500 to-violet-500 shadow-[0_0_12px_rgba(99,102,241,1)]"
                                                : "bg-transparent"
                                        }`}
                                    />

                                    {/* Card Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`text-sm font-mono font-bold transition-colors duration-300 ${
                                                    isActive ? "text-indigo-400" : "text-neutral-500"
                                                }`}
                                            >
                                                {step.number}
                                            </span>
                                            <h3
                                                className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                                                    isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                                                }`}
                                            >
                                                {step.title}
                                            </h3>
                                        </div>

                                        <span
                                            className={`text-[11px] font-medium font-mono px-2.5 py-0.5 rounded-full border transition-colors duration-300 ${
                                                isActive
                                                    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
                                                    : "bg-neutral-800/50 text-neutral-500 border-neutral-800"
                                            }`}
                                        >
                                            {step.badge}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {step.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-2.5 py-1 rounded-md transition-colors duration-300 ${
                                                    isActive
                                                        ? "bg-indigo-950/40 text-indigo-200 border border-indigo-500/20"
                                                        : "bg-neutral-800/40 text-neutral-400 border border-neutral-800"
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
