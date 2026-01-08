"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import TiltCard from "./ui/TiltCard";
import MagneticButton from "./ui/MagneticButton";

interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    techStack: string[];
    behanceUrl: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Notes App",
        type: "Productivity App",
        description:
            "A smart notes app with editing, timestamps, and color personalization.",
        techStack: ["Flutter", "Local Storage", "Clean UI"],
        behanceUrl: "https://www.behance.net/gallery/193240001/Notes-App-Mobile-app-build-with-Flutter",
        image: "/projects/notes/notes-1.jpg",
    },
    {
        id: 2,
        title: "Cool Chat",
        type: "Real-time Chat App",
        description:
            "Secure messaging with media sharing and multi-provider authentication.",
        techStack: ["Flutter", "Firebase", "Auth", "Cloud Storage"],
        behanceUrl: "https://www.behance.net/gallery/192949309/Cool-Chat-Chat-App-Build-with-Flutter-Use-Firebase",
        image: "/projects/cool-chat/coolchat-1.gif",
    },
    {
        id: 3,
        title: "Flutter Market",
        type: "E-commerce App",
        description:
            "A modern shopping app with REST API integration and smooth browsing.",
        techStack: ["Flutter", "REST API", "Postman"],
        behanceUrl: "https://www.behance.net/gallery/189507175/Flutter-Market-Online-App-Shop-App-Build-with-Flutter",
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

    // 3D Rotation effect
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

    const isEven = index % 2 === 0;

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
            className={`relative flex items-center w-full ${isEven ? "md:justify-start" : "md:justify-end"} justify-center mb-24 md:mb-32 last:mb-0`}
        >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[rgba(var(--cosmic-indigo),1)] rounded-full border-4 border-neutral-900 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(var(--cosmic-indigo),0.5)] hidden md:block" />

            {/* Content Card */}
            <div
                className={`relative w-full md:w-[calc(50%-4rem)] ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} px-4 md:px-0`}
            >
                <TiltCard className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300 transform translate-z-10">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium text-indigo-400 mt-1">
                                    {project.type}
                                </p>
                            </div>
                            <MagneticButton
                                href={project.behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-300 border border-neutral-700/50"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#1769ff]">
                                    <path d="M7.335 15.688c.958 0 1.764-.109 2.418-.328.654-.219 1.154-.536 1.5-.953.345-.417.518-.934.518-1.551 0-.746-.263-1.346-.788-1.799-.525-.453-1.284-.68-2.277-.68h-4.32v5.31h2.95zm-2.95-6.574h2.583c.801 0 1.419-.17 1.854-.509.435-.34.652-.821.652-1.442 0-.583-.197-1.025-.591-1.328-.393-.303-1.002-.455-1.826-.455H4.385v3.734zM10.927 12c.57-.456.855-1.127.855-2.016 0-1.614-.94-2.583-2.82-2.906V7.06c1.23.235 2.146.736 2.748 1.503.602.767.903 1.739.903 2.916 0 1.155-.386 2.148-1.158 2.981-.772.833-1.85 1.354-3.235 1.564v-.004a5.57 5.57 0 0 1 2.707-3.02zM22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                </svg>
                                View Case Study
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
        <section
            id="projects"
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* Unified Deep Space Gradient - Final Section Transition */}
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
                        A selection of my recent work in mobile app development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with gradient mask */}
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
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
