"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaApple, FaAndroid } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

interface PhoneSimulatorProps {
    activeStage: number; // 1 | 2 | 3 | 4
}

export default function PhoneSimulator({ activeStage }: PhoneSimulatorProps) {
    return (
        <div className="relative mx-auto w-[295px] sm:w-[325px] md:w-[335px] select-none">
            {/* Ambient Silver / Stage-Reactive Backglow */}
            <div
                className="absolute inset-0 -z-10 rounded-[64px] pointer-events-none transition-all duration-700"
                style={{
                    background:
                        activeStage === 4
                            ? "radial-gradient(circle at center, rgba(34, 197, 94, 0.28) 0%, rgba(226, 232, 240, 0.12) 45%, transparent 70%)"
                            : activeStage === 3
                            ? "radial-gradient(circle at center, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 45%, transparent 70%)"
                            : "radial-gradient(circle at center, rgba(241, 245, 249, 0.22) 0%, rgba(148, 163, 184, 0.12) 40%, transparent 70%)",
                    filter: "blur(48px)",
                    transform: "scale(1.08)",
                }}
            />

            {/* Phone Container matching exact iPhone Mockup Aspect Ratio (879 : 1745) */}
            <div className="relative w-full aspect-[879/1745] drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
                {/* 1. Screen Container: Positioned inside the screen bounds of the real mockup */}
                <div
                    className="absolute bg-[#08080f] overflow-hidden flex flex-col justify-between z-10"
                    style={{
                        top: "3.04%",
                        left: "7.05%",
                        width: "85.89%",
                        height: "93.81%",
                        borderRadius: "38px",
                    }}
                >
                    {/* Diagonal Glass Glare Reflection */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] z-30" />

                    {/* iOS Status Bar & Dynamic Island */}
                    <div className="relative z-30 pt-2.5 sm:pt-3 px-5 sm:px-6 flex items-center justify-between text-[11px] text-neutral-300 font-semibold tracking-tight">
                        <span className="font-medium">9:41</span>

                        {/* Native iOS 18 Dynamic Island */}
                        <div className="w-[78px] sm:w-[86px] h-[22px] sm:h-[24px] bg-black rounded-full border border-neutral-800/80 flex items-center justify-between px-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                            {/* TrueDepth Camera Lens with Reflection */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#04040a] border border-[#161626] flex items-center justify-center">
                                <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                            </div>
                            {/* Proximity / Ambient Sensor */}
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        </div>

                        {/* Cellular 5G + Battery Indicator */}
                        <div className="flex items-center gap-1.5 text-[10px]">
                            <span className="text-[9px] font-mono opacity-90">5G</span>
                            <div className="w-[18px] h-[10px] border border-neutral-300/80 rounded-[3px] p-[1px] flex items-center relative">
                                <div className="w-[85%] h-full bg-neutral-200 rounded-[1px]" />
                                <div className="w-[1.5px] h-[3.5px] bg-neutral-300/80 absolute -right-[2.5px] rounded-r-[1px]" />
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Screen Content Based on Active Stage */}
                    <div className="relative flex-1 px-3.5 sm:px-4 py-2 sm:py-3 overflow-hidden flex flex-col z-20">
                        <AnimatePresence mode="wait">
                                    {/* STAGE 1: Idea & Planning (Lo-Fi Wireframe) */}
                                    {activeStage === 1 && (
                                        <motion.div
                                            key="stage-1"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="h-full flex flex-col justify-between"
                                        >
                                            {/* Blueprint Grid Watermark */}
                                            <div
                                                className="absolute inset-0 pointer-events-none opacity-25"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(rgba(129, 140, 248, 0.4) 1px, transparent 1px)",
                                                    backgroundSize: "14px 14px",
                                                }}
                                            />

                                            <div>
                                                {/* Wireframe Tag */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                                                        Phase 01 // Blueprint
                                                    </span>
                                                    <span className="text-[10px] text-neutral-500 font-mono">
                                                        User Flow
                                                    </span>
                                                </div>

                                                {/* Wireframe App Header */}
                                                <div className="h-8 rounded-lg border border-dashed border-neutral-700 bg-neutral-900/40 mb-3 flex items-center justify-between px-3">
                                                    <div className="w-12 h-2 rounded bg-neutral-700" />
                                                    <div className="w-4 h-4 rounded-full border border-neutral-600" />
                                                </div>

                                                {/* Wireframe Node 1: Auth & Onboarding */}
                                                <div className="p-3 rounded-xl border border-dashed border-indigo-500/40 bg-indigo-950/20 mb-2">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-[11px] font-semibold text-indigo-300">
                                                            1. Auth &amp; State Mapping
                                                        </span>
                                                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <div className="w-full h-2 rounded bg-indigo-900/40" />
                                                        <div className="w-3/4 h-2 rounded bg-indigo-900/30" />
                                                    </div>
                                                </div>

                                                {/* Animated Connecting Vector */}
                                                <div className="flex justify-center my-1">
                                                    <motion.div
                                                        animate={{ y: [0, 4, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                        className="w-0.5 h-4 bg-gradient-to-b from-indigo-500 to-indigo-300 rounded-full"
                                                    />
                                                </div>

                                                {/* Wireframe Node 2: Core Feature Feed */}
                                                <div className="p-3 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/40">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-[11px] font-semibold text-neutral-300">
                                                            2. Core App Navigation
                                                        </span>
                                                        <div className="w-2 h-2 rounded-full border border-neutral-500" />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                                        <div className="h-10 rounded border border-neutral-800 bg-neutral-800/30" />
                                                        <div className="h-10 rounded border border-neutral-800 bg-neutral-800/30" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Status Badge */}
                                            <div className="mt-auto py-2 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-[11px] text-indigo-300">
                                                <span>Architecture Ready</span>
                                                <span className="text-xs font-bold text-indigo-400">100%</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STAGE 2: Architecture (Clean Architecture & BLoC) */}
                                    {activeStage === 2 && (
                                        <motion.div
                                            key="stage-2"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="h-full flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-500/30">
                                                        Phase 02 // Layers
                                                    </span>
                                                    <span className="text-[10px] text-neutral-400 font-mono">
                                                        BLoC Pattern
                                                    </span>
                                                </div>

                                                {/* Layer 1: Presentation */}
                                                <div className="p-2.5 rounded-xl border border-violet-500/40 bg-violet-950/20 mb-2">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[11px] font-bold text-violet-300">
                                                            Presentation Layer
                                                        </span>
                                                        <span className="text-[9px] text-violet-400 font-mono">UI &amp; BLoC</span>
                                                    </div>
                                                    <p className="text-[10px] text-neutral-400">
                                                        StatelessWidgets &bull; State Emit &bull; UI Events
                                                    </p>
                                                </div>

                                                {/* Data Flow Pulse */}
                                                <div className="flex justify-center my-0.5">
                                                    <motion.div
                                                        animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1.2, 0.8] }}
                                                        transition={{ duration: 1.2, repeat: Infinity }}
                                                        className="w-0.5 h-3 bg-violet-400 rounded-full"
                                                    />
                                                </div>

                                                {/* Layer 2: Domain */}
                                                <div className="p-2.5 rounded-xl border border-indigo-500/40 bg-indigo-950/20 mb-2">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[11px] font-bold text-indigo-300">
                                                            Domain Layer
                                                        </span>
                                                        <span className="text-[9px] text-indigo-400 font-mono">Pure Dart</span>
                                                    </div>
                                                    <p className="text-[10px] text-neutral-400">
                                                        Use Cases &bull; Business Logic &bull; Entities
                                                    </p>
                                                </div>

                                                {/* Data Flow Pulse */}
                                                <div className="flex justify-center my-0.5">
                                                    <motion.div
                                                        animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1.2, 0.8] }}
                                                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                                                        className="w-0.5 h-3 bg-indigo-400 rounded-full"
                                                    />
                                                </div>

                                                {/* Layer 3: Data */}
                                                <div className="p-2.5 rounded-xl border border-blue-500/40 bg-blue-950/20">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[11px] font-bold text-blue-300">
                                                            Data Layer
                                                        </span>
                                                        <span className="text-[9px] text-blue-400 font-mono">API &amp; DB</span>
                                                    </div>
                                                    <p className="text-[10px] text-neutral-400">
                                                        Repository Impl &bull; Dio REST &bull; Hive DB
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Bottom Status */}
                                            <div className="mt-auto py-2 px-3 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-between text-[11px] text-violet-300">
                                                <span>Testable &bull; Decoupled</span>
                                                <span className="text-xs font-bold text-violet-400">Clean Arch</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STAGE 3: UI/UX Craft (Vibrant Hi-Fi Mobile App) */}
                                    {activeStage === 3 && (
                                        <motion.div
                                            key="stage-3"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="h-full flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Hi-Fi App Header */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-[1px]">
                                                            <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center text-[10px] text-white font-bold">
                                                                MA
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[11px] font-bold text-white leading-tight">
                                                                Mobile Suite
                                                            </h5>
                                                            <p className="text-[9px] text-neutral-400">Flutter 3.x</p>
                                                        </div>
                                                    </div>
                                                    <SiFlutter className="text-sm text-sky-400" />
                                                </div>

                                                {/* Hero Card */}
                                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white shadow-lg mb-3 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-y-6 translate-x-6" />
                                                    <span className="text-[9px] font-medium text-indigo-200 uppercase tracking-wider block mb-1">
                                                        Performance Index
                                                    </span>
                                                    <div className="flex items-baseline justify-between">
                                                        <span className="text-xl font-extrabold tracking-tight">
                                                            99.8%
                                                        </span>
                                                        <span className="text-[10px] font-semibold bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                                                            Fluid Motion
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Action Chips */}
                                                <div className="grid grid-cols-3 gap-1.5 mb-3">
                                                    {["Animate", "Cache", "Sync"].map((label) => (
                                                        <div
                                                            key={label}
                                                            className="py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-center text-[10px] font-medium text-neutral-200"
                                                        >
                                                            {label}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Interactive Component Preview */}
                                                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[11px]">
                                                            ✦
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] font-semibold text-white">
                                                                Micro-Interactions
                                                            </div>
                                                            <div className="text-[8px] text-neutral-400">
                                                                Framer Motion + Flutter
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-7 h-4 rounded-full bg-indigo-500 flex items-center justify-end px-0.5">
                                                        <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Status */}
                                            <div className="mt-auto py-2 px-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-[11px] text-indigo-300">
                                                <span>Pixel-Perfect UI</span>
                                                <span className="text-xs font-bold text-indigo-400">Material 3</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STAGE 4: Performance & Launch (60 FPS & App Stores) */}
                                    {activeStage === 4 && (
                                        <motion.div
                                            key="stage-4"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="h-full flex flex-col justify-between"
                                        >
                                            <div>
                                                {/* Telemetry Header */}
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                                                        Phase 04 // Launch
                                                    </span>
                                                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                                        Live 60fps
                                                    </span>
                                                </div>

                                                {/* Giant 60 FPS Gauge */}
                                                <div className="p-4 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-neutral-900 border border-emerald-500/30 text-center mb-3 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
                                                    <span className="text-[10px] font-mono text-emerald-400 block mb-0.5">
                                                        RENDER PERFORMANCE
                                                    </span>
                                                    <div className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-1">
                                                        60 <span className="text-emerald-400 text-lg font-bold">FPS</span>
                                                    </div>
                                                    <p className="text-[9px] text-neutral-400 mt-1">
                                                        Zero Dropped Frames &bull; 16.6ms frame budget
                                                    </p>
                                                </div>

                                                {/* App Store Targets */}
                                                <div className="space-y-2 mb-2">
                                                    <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <FaApple className="text-base text-white" />
                                                            <div>
                                                                <div className="text-[11px] font-semibold text-white">
                                                                    Apple App Store
                                                                </div>
                                                                <div className="text-[9px] text-neutral-400">
                                                                    iOS Ready Build
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                                                            ✓ Verified
                                                        </span>
                                                    </div>

                                                    <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <FaAndroid className="text-base text-[#3ddc84]" />
                                                            <div>
                                                                <div className="text-[11px] font-semibold text-white">
                                                                    Google Play Store
                                                                </div>
                                                                <div className="text-[9px] text-neutral-400">
                                                                    AAB Optimized
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                                                            ✓ Verified
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Status */}
                                            <div className="mt-auto py-2 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-300">
                                                <span>Production Release</span>
                                                <span className="text-xs font-bold text-emerald-400">v1.0.0</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* iOS Home Indicator Bar */}
                            <div className="py-2 flex justify-center z-30">
                                <div className="w-24 sm:w-28 h-[3.5px] bg-white/40 rounded-full shadow-sm" />
                            </div>
                        </div>

                        {/* 2. Authentic iPhone Mockup Frame Overlay */}
                        <Image
                            src="/iphone-frame.png"
                            alt="iPhone 17 Pro Max Silver Mockup"
                            fill
                            sizes="(max-width: 640px) 295px, 335px"
                            priority
                            className="object-contain pointer-events-none select-none z-20"
                        />
                    </div>
                </div>
            );
        }
