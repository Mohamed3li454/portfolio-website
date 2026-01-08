"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaBehance, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/Mohamed3li454" },
    { name: "Behance", icon: FaBehance, url: "https://www.behance.net/5c8dc512" },
    { name: "Telegram", icon: FaTelegram, url: "https://t.me/Mohamed3li54" },
    { name: "X", icon: BsTwitterX, url: "https://x.com/no_one8383" },
];

export default function ClosingSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden"
        >
            {/* Background gradient - darker ending */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            circle at 50% 100%,
                            rgba(99, 102, 241, 0.03) 0%,
                            transparent 50%
                        ),
                        linear-gradient(
                            to bottom,
                            var(--gradient-end) 0%,
                            rgba(var(--space-dark), 1) 100%
                        )
                    `
                }}
            />

            {/* Content Container */}
            <motion.div
                className="relative z-10 max-w-3xl w-full text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                {/* Headline */}
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 mb-8 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    Let's build something{" "}
                    <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                        meaningful
                    </span>.
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    className="text-lg sm:text-xl text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    If you have an idea, a product, or just curiosity —<br />
                    I'm always open to new challenges and collaborations.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    className="h-px w-32 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto mb-12"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                />

                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 backdrop-blur-sm border border-indigo-500/20 flex items-center justify-center text-neutral-400 transition-all duration-500 group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 1 + index * 0.1,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.1,
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(
                                            circle at center,
                                            rgba(99, 102, 241, 0.4) 0%,
                                            rgba(124, 58, 237, 0.2) 50%,
                                            transparent 100%
                                        )`,
                                        filter: 'blur(10px)',
                                        transform: 'scale(1.5)',
                                    }}
                                />

                                {/* Icon */}
                                <Icon className="text-2xl sm:text-3xl relative z-10 group-hover:text-white transition-colors duration-300" />

                                {/* Subtle ring on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-indigo-400/0 group-hover:border-indigo-400/40 transition-all duration-500"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.2, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Subtle footnote */}
                <motion.p
                    className="text-xs sm:text-sm text-neutral-600 mt-16 tracking-wider uppercase"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    Mohamed Ali — 2026
                </motion.p>
            </motion.div>

            {/* Ambient glow effect */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-video rounded-full pointer-events-none -z-10"
                style={{
                    background: `radial-gradient(
                        ellipse at center,
                        rgba(99, 102, 241, 0.06) 0%,
                        rgba(124, 58, 237, 0.03) 40%,
                        transparent 70%
                    )`,
                    filter: 'blur(100px)',
                }}
            />
        </section>
    );
}
