"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Constellation from "./ui/Constellation";

const roles = [
    "Flutter Developer",
    "Firebase & API Specialist",
    "Mobile App Engineer",
];

const philosophySentences = [
    "Code is just a tool.",
    "Thinking is the real skill.",
    "I build software that lasts."
];

export default function HeroSection() {
    // State for Intro Sequence
    const [introStep, setIntroStep] = useState(0);
    const [showHero, setShowHero] = useState(false);

    // State for Hero Content
    const [roleIndex, setRoleIndex] = useState(0);

    // Optimized scroll parallax - using transform for GPU acceleration
    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
    const fadeOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Intro Sequence Logic
    useEffect(() => {
        if (introStep < philosophySentences.length) {
            const timer = setTimeout(() => {
                setIntroStep((prev) => prev + 1);
            }, 2500);
            return () => clearTimeout(timer);
        } else {
            // Intro complete, show hero
            setShowHero(true);
        }
    }, [introStep]);

    // Role rotation cycle (Starts only after hero is shown)
    useEffect(() => {
        if (!showHero) return;
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [showHero]);

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-12 py-20"
            style={{
                contain: 'layout style paint',
                willChange: 'auto'
            }}
        >
            {/* Background Effects - Unified Deep Space Gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-start)] via-[var(--gradient-mid-light)] to-[var(--gradient-mid)] z-0 pointer-events-none"
                style={{ contain: 'strict' }}
            />

            {/* Constellation Background - Optimized rendering */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden"
                style={{
                    contain: 'strict',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            >
                <Constellation />
            </div>

            <AnimatePresence mode="wait">
                {!showHero ? (
                    /* ============== INTRO SEQUENCE - Hardware Accelerated ============== */
                    <motion.div
                        key="intro"
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                        style={{
                            willChange: 'transform, opacity',
                            transform: 'translateZ(0)'
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {introStep < philosophySentences.length && (
                                <motion.h2
                                    key={introStep}
                                    className="text-3xl md:text-5xl font-bold text-white text-center px-4 tracking-tight leading-tight drop-shadow-2xl"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.43, 0.13, 0.23, 0.96]
                                    }}
                                    style={{
                                        willChange: 'transform, opacity',
                                        transform: 'translateZ(0)'
                                    }}
                                >
                                    {philosophySentences[introStep]}
                                </motion.h2>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    /* ============== MAIN HERO CONTENT - Optimized ============== */
                    <motion.div
                        key="hero"
                        className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        style={{
                            y: parallaxY,
                            opacity: fadeOpacity,
                            willChange: 'transform, opacity',
                            transform: 'translateZ(0)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        {/* LEFT COLUMN: Text Content - Hardware Accelerated */}
                        <div
                            className="flex flex-col items-start text-left space-y-6 order-2 lg:order-1"
                            style={{ contain: 'layout style' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.43, 0.13, 0.23, 0.96],
                                    delay: 0.2
                                }}
                                style={{
                                    willChange: 'transform, opacity',
                                    transform: 'translateZ(0)'
                                }}
                            >
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl">
                                    Mohamed <span className="text-indigo-500/80">Ali</span>
                                </h1>
                                <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-transparent mt-4 rounded-full" />
                            </motion.div>

                            {/* Animated Role Text - Optimized with transform only */}
                            <div
                                className="h-12 sm:h-16 flex items-center overflow-hidden"
                                style={{ contain: 'layout' }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.43, 0.13, 0.23, 0.96]
                                        }}
                                        className="text-xl sm:text-2xl md:text-3xl font-medium text-indigo-300 tracking-wide"
                                        style={{
                                            willChange: 'transform, opacity',
                                            transform: 'translateZ(0)'
                                        }}
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.4,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                                className="text-lg text-neutral-400 max-w-lg leading-relaxed"
                                style={{
                                    willChange: 'transform, opacity',
                                    transform: 'translateZ(0)'
                                }}
                            >
                                I build scalable and beautiful mobile applications.
                            </motion.p>
                        </div>

                        {/* RIGHT COLUMN: Image - Heavily Optimized */}
                        <motion.div
                            className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] max-w-md mx-auto lg:mx-0 order-1 lg:order-2 flex justify-center items-center lg:ml-auto" // أضف lg:ml-auto هنا
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.9,
                                ease: [0.43, 0.13, 0.23, 0.96],
                                delay: 0.2
                            }}
                            style={{
                                willChange: 'transform, opacity',
                                transform: 'translateZ(0)',
                                contain: 'layout'
                            }}
                        >
                            {/* Floating Animation - GPU Accelerated */}
                            <motion.div
                                className="relative w-full h-full rounded-2xl overflow-hidden group"
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    willChange: 'transform',
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden'
                                }}
                            >
                                {/* Optimized overlay effects */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-60 mix-blend-overlay z-10"
                                    style={{ pointerEvents: 'none' }}
                                />
                                <div
                                    className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
                                />

                                {/* Optimized Image Container */}
                                <div
                                    className="w-full h-full bg-neutral-900 flex items-center justify-center"
                                    style={{
                                        contain: 'strict',
                                        transform: 'translateZ(0)'
                                    }}
                                >
                                    <Image
                                        src="/myimage.JPG"
                                        alt="Mohamed Ali"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                                        priority
                                        quality={90}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            transform: 'translateZ(0)',
                                            willChange: 'filter'
                                        }}
                                    />
                                </div>

                                {/* Optimized Glow Effect - Using transform for better performance */}
                                <div
                                    className="absolute -inset-10 bg-indigo-500/20 blur-3xl -z-10 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                                    style={{
                                        transform: 'translateZ(0)',
                                        willChange: 'opacity'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Indicator - Hardware Accelerated */}
            {showHero && (
                <motion.div
                    className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 opacity-60"
                    style={{
                        transform: 'translate(-50%, 0) translateZ(0)',
                        willChange: 'transform, opacity'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1, duration: 0.8 },
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neutral-500 to-transparent" />
                </motion.div>
            )}
        </section>
    );
}