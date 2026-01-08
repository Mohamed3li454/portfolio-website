"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Skill {
    name: string;
    tooltip: string;
    x: number; // Position in percentage (0-100)
    y: number; // Position in percentage (0-100)
}

const skills: Skill[] = [
    { name: "Flutter", tooltip: "Cross-platform mobile development", x: 20, y: 50 },
    { name: "Firebase", tooltip: "Backend & real-time database", x: 50, y: 10 },
    { name: "REST APIs", tooltip: "Integration & data management", x: 50, y: 50 },
    { name: "BLoC", tooltip: "State management in production", x: 80, y: 10 },
    { name: "UI/UX", tooltip: "Premium design implementation", x: 80, y: 100 },
    { name: "Hive", tooltip: "Fast local storage solution", x: 50, y: 100 },
];

// Connection lines between related skills
const connections = [
    [0, 1], // Flutter <-> Firebase
    [0, 0], // Flutter <-> BLoC
    // [0, 4], // Flutter <-> UI/UX
    // [0, 2], // Firebase <-> REST APIs
    // [0, 5], // Firebase <-> Hive
    [1, 3], // Firebase <-> BLoC
    // [0, 4], // Firebase <-> UI/UX
    [0, 5], // BLoC <-> Hive
    [2, 4], // REST APIs <-> UI/UX 
    // [2, 5], // REST APIs <-> Hive
    // [2, 3], // REST APIs <-> BLoC
    // [2, 0], // REST APIs <-> Flutter 
    // [2, 5], // REST APIs <-> Hive
    [2, 3], // REST APIs <-> BLoC
    // [2, 4], // REST APIs <-> UI/UX
    // [3, 4], // BLoC <-> UI/UX
    // [3, 5], // BLoC <-> Hive
    // [3, 1], // BLoC <-> Firebase
    // [3, 0], // BLoC <-> Flutter
    // [3, 2], // BLoC <-> REST APIs
    // [4, 5], // UI/UX <-> Hive
    // [4, 1], // UI/UX <-> Firebase
    // [4, 0], // UI/UX <-> Flutter
    // [4, 2], // UI/UX <-> REST APIs
    // [4, 3], // UI/UX <-> BLoC
    // [5, 1], // Hive <-> Firebase
    // [5, 0], // Hive <-> Flutter
    // [5, 2], // Hive <-> REST APIs
    // [5, 3], // Hive <-> BLoC
    [5, 4], // Hive <-> UI/UX



];

export default function SkillsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 pt-20 pb-50 overflow-hidden"
        >
            {/* Background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-mid)] via-[var(--gradient-mid-heavy)] to-[var(--gradient-end)] z-0 pointer-events-none"
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl w-full">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Constellation Container */}
                <motion.div
                    className="relative w-full aspect-video max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* SVG for connection lines */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ overflow: 'visible' }}
                    >
                        {connections.map(([startIdx, endIdx], idx) => {
                            const start = skills[startIdx];
                            const end = skills[endIdx];

                            return (
                                <motion.line
                                    key={`connection-${idx}`}
                                    x1={`${start.x}%`}
                                    y1={`${start.y}%`}
                                    x2={`${end.x}%`}
                                    y2={`${end.y}%`}
                                    stroke="rgba(99, 102, 241, 0.3)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{
                                        duration: 1.2,
                                        delay: 1.5 + idx * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            );
                        })}
                    </svg>

                    {/* Skill Stars */}
                    {skills.map((skill, index) => {
                        // Random direction for entrance animation
                        const direction = index % 4;
                        const initialX = direction === 0 ? -50 : direction === 1 ? 50 : 0;
                        const initialY = direction === 2 ? -50 : direction === 3 ? 50 : 0;

                        return (
                            <motion.div
                                key={skill.name}
                                className="absolute group cursor-pointer"
                                style={{
                                    left: `${skill.x}%`,
                                    top: `${skill.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.8 + index * 0.15,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Star Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 -m-8 sm:-m-20 rounded-full pointer-events-none"
                                    animate={{
                                        opacity: hoveredIndex === index ? 0.8 : 0.4,
                                        scale: hoveredIndex === index ? 1.3 : 2,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: `radial-gradient(
                                            circle at center,
                                            rgba(99, 102, 241, 0.4) 0%,
                                            rgba(124, 58, 237, 0.2) 40%,
                                            transparent 70%
                                        )`,
                                        filter: 'blur(15px)',
                                    }}
                                />

                                {/* Star Core */}
                                <motion.div
                                    className="relative bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full shadow-lg"
                                    style={{
                                        width: 'clamp(12px, 3vw, 16px)',
                                        height: 'clamp(12px, 3vw, 16px)',
                                        boxShadow: `
                                            0 0 20px rgba(99, 102, 241, 0.6),
                                            0 0 40px rgba(124, 58, 237, 0.4)
                                        `
                                    }}
                                    animate={{
                                        scale: hoveredIndex === index ? 1.4 : 1,
                                        boxShadow: hoveredIndex === index
                                            ? `0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(124, 58, 237, 0.6)`
                                            : `0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(124, 58, 237, 0.4)`
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Skill Label */}
                                <motion.div
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 sm:mt-4 whitespace-nowrap"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 1.5 + index * 0.15 }}
                                >
                                    <span className="text-xs sm:text-sm font-medium text-indigo-300/90 tracking-wide">
                                        {skill.name}
                                    </span>
                                </motion.div>

                                {/* Tooltip - appears on hover */}
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 sm:mb-6 px-3 py-2 bg-neutral-900/95 backdrop-blur-sm border border-indigo-500/30 rounded-lg shadow-xl whitespace-nowrap"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-xs sm:text-sm text-neutral-300">
                                            {skill.tooltip}
                                        </span>
                                        {/* Arrow */}
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                                            style={{
                                                borderLeft: '6px solid transparent',
                                                borderRight: '6px solid transparent',
                                                borderTop: '6px solid rgba(99, 102, 241, 0.3)',
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Subtle ambient glow - desktop only */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square rounded-full pointer-events-none hidden md:block -z-10"
                    style={{
                        background: `radial-gradient(
                            circle at center,
                            rgba(99, 102, 241, 0.05) 0%,
                            transparent 70%
                        )`,
                        filter: 'blur(60px)',
                    }}
                />
            </div>
        </section>
    );
}