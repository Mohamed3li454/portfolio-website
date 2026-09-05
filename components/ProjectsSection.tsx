"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaBehance } from "react-icons/fa";
import TiltCard from "./ui/TiltCard";
import MagneticButton from "./ui/MagneticButton";

interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    techStack: string[];
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Libris",
        type: "Book Discovery & Personal Library App",
        description:
            "A modern book discovery app for exploring books, reading available titles, and building a personal library.",
        techStack: ["Flutter", "Dart", "Cubit", "Hive", "Dio", "GoRouter"],
        link: "https://www.behance.net/gallery/255206229/Libris-Modern-Book-Discovery-Personal-Library-App",
        image: "/projects/libris-app/libris_app.png",
    },
    {
        id: 2,
        title: "Notes App",
        type: "Productivity App",
        description:
            "A smart notes app with editing, timestamps, and color personalization.",
        techStack: ["Flutter", "Local Storage", "Clean UI"],
        link: "https://www.behance.net/gallery/193240001/Notes-App-Mobile-app-build-with-Flutter",
        image: "/projects/notes/notes-1.jpg",
    },
    {
        id: 3,
        title: "Cool Chat",
        type: "Real-time Chat App",
        description:
            "Secure messaging with media sharing and multi-provider authentication.",
        techStack: ["Flutter", "Firebase", "Auth", "Cloud Storage"],
        link: "https://www.behance.net/gallery/192949309/Cool-Chat-Chat-App-Build-with-Flutter-Use-Firebase",
        image: "/projects/cool-chat/coolchat-1.gif",
    },
    {
        id: 4,
        title: "Flutter Market",
        type: "E-commerce App",
        description:
            "A modern shopping app with REST API integration and smooth browsing.",
        techStack: ["Flutter", "REST API", "Postman"],
        link: "https://www.behance.net/gallery/189507175/Flutter-Market-Online-App-Shop-App-Build-with-Flutter",
        image: "/projects/flutter-market/fluttermarket-1.gif",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

    const isEven = index % 2 === 0;

    // منطق تحديد نوع الرابط
    const isBehance = project.link.includes("behance.net");

    // 🔥 التعديل الجديد: التحقق مما إذا كانت الصورة GIF
    const isGif = project.image.toLowerCase().endsWith(".gif");

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                y: yProgress,
                rotateX: rotateX,
                perspective: 1000,
            }}
            className={`relative flex items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"
                } justify-center mb-24 md:mb-32 last:mb-0`}
        >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[rgba(var(--cosmic-indigo),1)] rounded-full border-4 border-neutral-900 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(var(--cosmic-indigo),0.5)] hidden md:block" />

            {/* Content Card */}
            <div
                className={`relative w-full md:w-[calc(50%-4rem)] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    } px-4 md:px-0`}
            >
                <TiltCard className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                            // 🔥 التعديل الجديد: إيقاف التحسين للصور المتحركة فقط
                            unoptimized={isGif}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div className="min-w-0">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300 transform translate-z-10">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium text-indigo-400 mt-1">
                                    {project.type}
                                </p>
                            </div>

                            {/* الزر الذكي */}
                            <MagneticButton
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-300 border border-neutral-700/50 whitespace-nowrap shrink-0"
                            >
                                {isBehance ? (
                                    <>
                                        <FaBehance className="w-4 h-4 text-[#1769ff] shrink-0" />
                                        View Case Study
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 text-[#1769ff]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                            />
                                        </svg>
                                        Visit Project
                                    </>
                                )}
                            </MagneticButton>
                        </div>

                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </TiltCard>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Unified Deep Space Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-end)] via-[var(--gradient-end)] to-[var(--gradient-end)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16 sm:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent work in mobile & web development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" />
                    <motion.div
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent hidden md:block"
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <div className="flex flex-col gap-12 sm:gap-0">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}