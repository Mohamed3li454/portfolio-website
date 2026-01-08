"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
// 1. استيراد الأيقونات الجديدة
import { FaGithub, FaBehance, FaTelegram, FaAndroid, FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiFlutter } from "react-icons/si"; // بنستخدم SiFlutter عشان ده اللوجو الرسمي

const expertise = [
    "Flutter & Dart — production-ready Android & iOS apps",
    "REST API Integration — Postman, clean networking",
    "Firebase — Authentication, Firestore, Cloud Storage",
    "BLoC State Management — scalable architecture",
    "UI/UX Focus — smooth animations and clean layouts",
    "Local Storage — Hive & offline-first apps",
];

const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/Mohamed3li454" },
    { name: "Behance", icon: FaBehance, url: "https://www.behance.net/Mohamed3li454" },
    { name: "Telegram", icon: FaTelegram, url: "https://t.me/Mohamed3li454" },
    { name: "X", icon: BsTwitterX, url: "https://twitter.com/Mohamed3li454" },
];

// 2. تعديل المصفوفة عشان تشيل الـ Component واللون بدلاً من الإيموجي
const orbitingIcons = [
    { name: "Android", icon: FaAndroid, color: "#3DDC84", angle: 0 },   // لون أندرويد الأخضر
    { name: "iOS", icon: FaApple, color: "#FFFFFF", angle: 120 },       // لون أبل الأبيض
    { name: "Flutter", icon: SiFlutter, color: "#54C5F8", angle: 240 }, // لون فلاتر الأزرق
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden"
        >
            {/* Background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-end)] via-[var(--gradient-mid-heavy)] to-[var(--gradient-mid)] z-0 pointer-events-none"
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Profile Image with Orbiting Icons */}
                    <motion.div
                        className="relative flex justify-center items-center order-1 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">

                            {/* Orbiting Icons Container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {orbitingIcons.map((item, index) => {
                                    // بنعمل متغير للأيقونة عشان نستخدمها كـ Component
                                    const IconComponent = item.icon;

                                    return (
                                        <motion.div
                                            key={item.name}
                                            className="absolute w-full h-full"
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: (index * 20) / 3,
                                            }}
                                            style={{
                                                transform: `rotate(${item.angle}deg)`,
                                            }}
                                        >
                                            <motion.div
                                                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 backdrop-blur-md rounded-full flex items-center justify-center border border-indigo-500/30 shadow-lg"
                                                animate={{ rotate: -360 }}
                                                transition={{
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: (index * 20) / 3,
                                                }}
                                                whileHover={{ scale: 1.2 }}
                                                style={{
                                                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                                                }}
                                            >
                                                {/* 3. عرض الأيقونة هنا بدلاً من النص */}
                                                <IconComponent
                                                    className="text-2xl sm:text-3xl"
                                                    style={{ color: item.color }}
                                                />
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Profile Image with Glow */}
                            <motion.div
                                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Animated Glow */}
                                <motion.div
                                    className="absolute -inset-4 rounded-full pointer-events-none z-0"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        boxShadow: `
                                            0 0 60px rgba(99, 102, 241, 0.5),
                                            0 0 100px rgba(124, 58, 237, 0.3)
                                        `
                                    }}
                                />

                                {/* Image Container */}
                                <div className="relative w-full h-full bg-neutral-900 rounded-full overflow-hidden border-4 border-indigo-500/30">
                                    <Image
                                        src="/myimage.JPG"
                                        alt="Mohamed Ali"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                        quality={95}
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Text Content with Glassmorphism */}
                    <motion.div
                        className="order-2 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 }}
                    >
                        {/* Glassmorphism Container */}
                        <div
                            className="relative bg-gradient-to-br from-neutral-900/40 to-neutral-800/20 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border border-indigo-500/20 shadow-2xl"
                            style={{
                                boxShadow: "0 0 60px rgba(99, 102, 241, 0.1)",
                            }}
                        >
                            {/* Section Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <h3 className="text-sm tracking-[0.3em] uppercase text-indigo-400/80 mb-2">
                                    About Me
                                </h3>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 mb-2">
                                    Mohamed Ali
                                </h2>
                                <p className="text-xl sm:text-2xl text-indigo-300 mb-6">
                                    Flutter Developer
                                </p>
                            </motion.div>

                            {/* Intro Quote */}
                            <motion.p
                                className="text-lg text-neutral-300 mb-6 italic border-l-4 border-indigo-500/50 pl-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                "I build high-quality mobile applications with Flutter, focusing on clean architecture, performance, and real-world scalability."
                            </motion.p>

                            {/* Main Paragraph */}
                            <motion.p
                                className="text-base text-neutral-400 mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                I specialize in crafting cross-platform mobile apps that feel smooth, modern, and reliable. From pixel-perfect UI to robust backend integrations, I enjoy turning complex ideas into elegant digital products that users actually love using.
                            </motion.p>

                            {/* Expertise List */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                <h4 className="text-sm tracking-wider uppercase text-indigo-400/80 mb-4">
                                    Expertise
                                </h4>
                                <ul className="space-y-3">
                                    {expertise.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 text-sm text-neutral-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                                        >
                                            <span className="text-indigo-400 mt-1">▹</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Closing Line */}
                            <motion.p
                                className="text-base text-neutral-400 mb-8 italic"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 1.4, duration: 0.6 }}
                            >
                                I value clear communication, fast iteration, and delivering on time.
                            </motion.p>

                            {/* Social Links */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 1.5, duration: 0.6 }}
                            >
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-neutral-800/50 border border-indigo-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-400 transition-all duration-300"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)",
                                            }}
                                        >
                                            <Icon className="text-xl" />
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square rounded-full pointer-events-none -z-10 hidden lg:block"
                style={{
                    background: `radial-gradient(
                        circle at center,
                        rgba(99, 102, 241, 0.08) 0%,
                        transparent 70%
                    )`,
                    filter: 'blur(80px)',
                }}
            />
        </section>
    );
}