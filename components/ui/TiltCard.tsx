"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for tilt
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig); // Input is -0.5 to 0.5 percent
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

    // Glare effect values
    const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
    const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);
    const glareOpacity = useTransform(useSpring(useMotionValue(0), springConfig), [0, 1], [0, 1]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (normalized from -0.5 to 0.5)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / rect.width) - 0.5;
        const yPct = (mouseY / rect.height) - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Use a separate motion value for opacity if we want to animate it,
        // but simple hover state on parent usually works better for showing/hiding glare.
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative preserve-3d group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full"
            >
                {children}

                {/* Glare/Sheen Effect */}
                <div
                    className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden mix-blend-overlay z-10 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        transform: "translateZ(1px)", // Sit slightly above
                    }}
                >
                    <motion.div
                        className="absolute w-[200%] h-[200%] bg-gradient-radial from-white/30 to-transparent"
                        style={{
                            left: "-50%",
                            top: "-50%",
                            x: useTransform(x, [-0.5, 0.5], ["-50%", "50%"]),
                            y: useTransform(y, [-0.5, 0.5], ["-50%", "50%"]),
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
