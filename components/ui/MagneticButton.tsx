"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    href,
    target,
    rel,
}: MagneticButtonProps) {
    // We use a flexible ref type here because we're attaching it to motion.a or motion.button
    const ref = useRef<any>(null);

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

    const Component = href ? motion.a : motion.button;
    // @ts-ignore - framer motion types are tricky with dynamic components, usually fine in practice
    const props = href ? { href, target, rel } : { onClick };

    return (
        <Component
            ref={ref}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </Component>
    );
}
