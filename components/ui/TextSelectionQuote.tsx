"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextSelectionQuoteProps {
    text: string;
    className?: string;
}

export default function TextSelectionQuote({
    text,
    className = "",
}: TextSelectionQuoteProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    return (
        <div
            ref={ref}
            className={`relative inline-block w-full select-none cursor-text my-6 ${className}`}
        >
            {/* The Quote Text */}
            <p className="relative z-10 text-base sm:text-lg font-medium text-neutral-200 leading-relaxed italic px-3 py-2">
                &ldquo;{text}&rdquo;
            </p>

            {/* Selection Highlight Box - Sweeps smoothly across the text */}
            <motion.div
                className="absolute inset-y-0 left-0 bg-indigo-500/25 border-y border-indigo-400/40 rounded-sm pointer-events-none z-0"
                initial={{ width: "0%", opacity: 0 }}
                animate={
                    isInView
                        ? {
                              width: ["0%", "0%", "100%", "100%", "100%", "0%"],
                              opacity: [0, 1, 1, 1, 0, 0],
                          }
                        : {}
                }
                transition={{
                    duration: 6,
                    times: [0, 0.05, 0.35, 0.85, 0.95, 1],
                    repeat: Infinity,
                    repeatDelay: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {/* Right Handle (End Pin) - Rides along the right edge of the highlight box */}
                <div className="absolute right-0 -top-2 -bottom-2 w-[2.5px] bg-gradient-to-b from-indigo-400 to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]">
                    {/* Bottom Dot / Pin Head */}
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-300 absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,1)]" />
                </div>
            </motion.div>

            {/* Left Handle (Start Pin) - Anchored at the start with dot on top */}
            <motion.div
                className="absolute left-0 -top-2 -bottom-2 w-[2.5px] bg-gradient-to-b from-indigo-400 to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.8)] pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={
                    isInView
                        ? {
                              opacity: [0, 1, 1, 1, 0, 0],
                          }
                        : {}
                }
                transition={{
                    duration: 6,
                    times: [0, 0.05, 0.35, 0.85, 0.95, 1],
                    repeat: Infinity,
                    repeatDelay: 0.8,
                }}
            >
                {/* Top Dot / Pin Head */}
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-300 absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(99,102,241,1)]" />
            </motion.div>
        </div>
    );
}
