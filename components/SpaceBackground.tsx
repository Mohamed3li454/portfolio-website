"use client";

import { useEffect, useRef } from "react";

/**
 * SpaceBackground Component
 * 
 * Canvas-based starfield with fixed positioning.
 * Stars drift slowly but do NOT move with scroll.
 */

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number;
    moveX: number;
    moveY: number;
}

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to full window
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Create stars
        const stars: Star[] = [];
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                twinkleSpeed: Math.random() * 0.002 + 0.001,
                moveX: (Math.random() - 0.5) * 0.2,
                moveY: (Math.random() - 0.5) * 0.2,
            });
        }

        let animationFrame: number;
        let time = 0;

        // Animation loop
        const animate = () => {
            // Clear canvas
            ctx.fillStyle = "#0a0a0a";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            time += 1;

            // Draw and update each star
            stars.forEach((star) => {
                // Twinkle effect
                star.opacity = 0.3 + Math.abs(Math.sin(time * star.twinkleSpeed)) * 0.5;

                // Normal drift movement
                star.x += star.moveX;
                star.y += star.moveY;

                // Wrap around edges
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Draw star with glow
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
                ctx.shadowBlur = 3;
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            setCanvasSize();
            // Redistribute stars on resize - simple logic
            stars.forEach((star) => {
                if (star.x > canvas.width) star.x = Math.random() * canvas.width;
                if (star.y > canvas.height) star.y = Math.random() * canvas.height;
            });
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
        </div>
    );
}
