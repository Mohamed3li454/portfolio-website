"use client";

import { motion } from "framer-motion";

// Symmetrical Hexagonal Network Shape
const nodes = [
    // Center Core
    { x: 50, y: 50 }, // 0: The Hub

    // Inner Hexagon Ring
    { x: 50, y: 30 }, // 1: Top
    { x: 67, y: 40 }, // 2: Top Right
    { x: 67, y: 60 }, // 3: Bottom Right
    { x: 50, y: 70 }, // 4: Bottom
    { x: 33, y: 60 }, // 5: Bottom Left
    { x: 33, y: 40 }, // 6: Top Left

    // Outer Satellites (Extensions)
    { x: 50, y: 15 }, // 7: Top Tip
    { x: 85, y: 50 }, // 8: Right Tip
    { x: 50, y: 85 }, // 9: Bottom Tip
    { x: 15, y: 50 }, // 10: Left Tip
];

const connections = [
    // Center Spokes (Star pattern)
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],

    // Inner Hexagon Loop (The shield)
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],

    // Outer Connections (Tech web)
    [1, 7], [2, 7], // Top connections
    [2, 8], [3, 8], // Right connections
    [3, 9], [4, 9], // Bottom connections
    [5, 10], [6, 10], // Left connections

    // Long structural supports (optional, makes it look denser)
    [7, 6], [7, 2],
    [9, 5], [9, 3]
];

export default function Constellation() {
    return (
        <div className="relative w-full h-full">
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible opacity-80"
            >
                {/* Connections */}
                {connections.map(([start, end], i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={nodes[start].x}
                        y1={nodes[start].y}
                        x2={nodes[end].x}
                        y2={nodes[end].y}
                        stroke="rgba(99, 102, 241, 0.2)" // Indigo-500 low opacity
                        strokeWidth="0.25"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                            transition: {
                                duration: 2,
                                ease: "easeInOut"
                            }
                        }}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={`node-${i}`}
                        cx={node.x}
                        cy={node.y}
                        r={i === 0 ? "1.2" : "0.9"} // Make center node slightly bigger
                        fill={i === 0 ? "#ffffff" : (i % 2 === 0 ? "#818cf8" : "#a78bfa")} // Center is white, others alternate
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            scale: { duration: 4, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" },
                            opacity: { duration: 4, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" },
                            default: { duration: 0.5, delay: i * 0.05 }
                        }}
                    />
                ))}
            </svg>

            {/* Soft Glow Center */}
            <motion.div
                className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}