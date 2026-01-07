"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./ui/MagneticButton";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const titles = [
    "Flutter Developer",
    "Mobile App Engineer",
    "Firebase & API Specialist",
];

const philosophySentences = [
    "Code is just a tool.",
    "Thinking is the real skill.",
    "I build software that lasts."
];

export default function HeroSection() {
    const [introStep, setIntroStep] = useState(0);
    const [showHero, setShowHero] = useState(false);
    const [titleIndex, setTitleIndex] = useState(0);

    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Scroll parallax for content
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

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

    // Smooth spring physics for natural movement
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform mouse position to parallax offset (subtle movement)
    const orbLeftX = useTransform(smoothMouseX, [-500, 500], [20, -20]);
    const orbLeftY = useTransform(smoothMouseY, [-500, 500], [15, -15]);
    const orbRightX = useTransform(smoothMouseX, [-500, 500], [-25, 25]);
    const orbRightY = useTransform(smoothMouseY, [-500, 500], [-20, 20]);

    // Tech Planet Parallax
    const planetX = useTransform(smoothMouseX, [-500, 500], [10, -10]);
    const planetY = useTransform(smoothMouseY, [-500, 500], [10, -10]);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            mouseX.set(clientX - centerX);
            mouseY.set(clientY - centerY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Rotate through titles (only start after hero is shown)
    useEffect(() => {
        if (!showHero) return;
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [showHero]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Semi-transparent atmospheric gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,10,20,0.4)] to-[rgba(10,10,10,0.8)] z-0" />

            {/* Background Orbs (Subtle ambience) */}
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none z-0"
                style={{ x: orbLeftX, y: orbLeftY }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 w-full mb-10">
                <AnimatePresence mode="wait">
                    {!showHero ? (
                        /* INTRO SEQUENCE */
                        <motion.div
                            key="intro"
                            className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-20 sm:-mt-0"
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <AnimatePresence mode="wait">
                                {introStep < philosophySentences.length && (
                                    <motion.h2
                                        key={introStep}
                                        className="text-3xl md:text-5xl font-bold text-white text-center px-4 tracking-tight leading-tight"
                                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        {philosophySentences[introStep]}
                                    </motion.h2>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        /* MAIN HERO CONTENT */
                        <motion.div
                            key="hero"
                            className="relative px-6 sm:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                            style={{ y, opacity }}
                        >
                            {/* 3D Tech Planet Visual */}
                            <motion.div
                                className="absolute -z-10 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] pointer-events-none opacity-60 mix-blend-screen"
                                style={{ x: planetX, y: planetY }}
                                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                                animate={{
                                    opacity: 0.6,
                                    scale: 1,
                                    rotate: 0,
                                    transition: { duration: 2, ease: "easeOut" }
                                }}
                            >
                                <motion.img
                                    src="/blue-planet.png"
                                    alt="Tech Planet Core"
                                    className="w-full h-full object-contain"
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                />
                                {/* Glow overlay */}
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px]" />
                            </motion.div>

                            {/* Name Title */}
                            <motion.h1
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center"
                                variants={fadeInUp}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-2xl">
                                    Mohamed Ali
                                </span>
                            </motion.h1>

                            <motion.div
                                className="mt-6 sm:mt-8 h-[36px] sm:h-[40px] md:h-[48px] overflow-hidden"
                                variants={fadeInUp}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={titleIndex}
                                        className="text-xl sm:text-2xl md:text-3xl text-indigo-300 font-medium tracking-wide uppercase px-4 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 backdrop-blur-sm"
                                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {titles[titleIndex]}
                                    </motion.p>
                                </AnimatePresence>
                            </motion.div>

                            <motion.div
                                className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
                                variants={fadeInUp}
                            >
                                <MagneticButton
                                    href="#projects"
                                    className="group relative px-10 py-5 w-full sm:w-auto min-w-[200px] rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                                >
                                    <span className="relative z-10">Explore Work</span>
                                    <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </MagneticButton>

                                <MagneticButton
                                    href="#contact"
                                    className="group px-10 py-5 w-full sm:w-auto min-w-[200px] rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-medium text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                                >
                                    Contact
                                </MagneticButton>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scroll indicator (Only show when hero is active) */}
            {showHero && (
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 mix-blend-difference"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        className="w-5 h-8 rounded-full border border-white/50 flex justify-center pt-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2 bg-white rounded-full"
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
