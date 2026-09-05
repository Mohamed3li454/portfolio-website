"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    as?: "a" | "button" | "div";
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    href,
    target,
    rel,
    as,
}: MagneticButtonProps) {
    const ref = useRef<HTMLElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the magnetic effect
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;

        if (ref.current) {
            const { height, width, left, top } = ref.current.getBoundingClientRect();

            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);

            // Move the button slightly towards the cursor (magnetic pull)
            x.set(middleX * 0.15); // Adjust multiplier for strength
            y.set(middleY * 0.15);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    if (as === "div") {
        return (
            <motion.div
                ref={ref as React.Ref<HTMLDivElement>}
                className={`relative ${className}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.div>
        );
    }

    if (href) {
        return (
            <motion.a
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                target={target}
                rel={rel}
                className={`relative ${className}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={ref as React.Ref<HTMLButtonElement>}
            onClick={onClick}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}
