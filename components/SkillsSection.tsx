"use client";

import { useState, useRef, KeyboardEvent } from "react";
import styles from "./SkillsSection.module.css";

interface SkillCategory {
  name: string;
  blurb: string;
  tools: string[];
}

const DATA: SkillCategory[] = [
  {
    name: "Mobile Development",
    blurb: "Native and cross-platform apps, built and shipped end to end.",
    tools: ["Flutter", "Dart", "Android", "iOS", "Cross-Platform", "Android Studio", "Xcode"],
  },
  {
    name: "Backend & APIs",
    blurb: "Connecting apps to real data — auth, storage, and the network layer.",
    tools: ["REST APIs", "Dio", "Firebase", "Supabase", "Postman", "Row Level Security (RLS)"],
  },
  {
    name: "UI/UX & Animation",
    blurb: "Interfaces that feel considered, from layout down to motion.",
    tools: ["Figma", "Material 3", "Responsive UI", "Lottie", "Jitter"],
  },
  {
    name: "Tools & CI/CD",
    blurb: "Version control, automated builds, and getting a build out the door.",
    tools: ["Git", "GitHub", "GitHub Actions", "Vercel", "GoRouter"],
  },
  {
    name: "Architecture",
    blurb: "Structuring code so it stays testable, scalable, and easy to change.",
    tools: ["Clean Architecture", "MVVM", "Repository Pattern", "Dependency Injection"],
  },
  {
    name: "Web Development",
    blurb: "The occasional web build, handled with the same care as mobile.",
    tools: ["Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Local Storage",
    blurb: "Keeping data on-device — fast, offline, and reliable.",
    tools: ["Hive", "SharedPreferences", "Isar"],
  },
  {
    name: "State Management",
    blurb: "Predictable app state, even as features and screens grow.",
    tools: ["Cubit", "BLoC"],
  },
];

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const totalTools = DATA.reduce((sum, c) => sum + c.tools.length, 0);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = (index + 1) % DATA.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = (index - 1 + DATA.length) % DATA.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = DATA.length - 1;
    }

    if (next !== null) {
      e.preventDefault();
      tabRefs.current[next]?.focus();
      setActiveIndex(next);
    }
  };

  return (
    <section className={styles.skills} id="skills">
      {/* Seamless Deep Space Gradient */}
      <div className={styles.skills__gradient} aria-hidden="true" />

      {/* Atmospheric Effects with feathered edge masks */}
      <div className={styles.skills__effects} aria-hidden="true">
        <div className={styles.skills__glow} />
        <div className={styles.skills__dots} />
        <svg
          className={styles.skills__constellation}
          viewBox="0 0 300 300"
          fill="none"
        >
          <line x1="240" y1="20" x2="180" y2="90" stroke="rgba(163,176,245,0.25)" strokeWidth="1" />
          <line x1="180" y1="90" x2="230" y2="150" stroke="rgba(163,176,245,0.25)" strokeWidth="1" />
          <line x1="180" y1="90" x2="110" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="230" y1="150" x2="270" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="110" y1="120" x2="60" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="240" cy="20" r="3" fill="#524fce" />
          <circle cx="180" cy="90" r="2.5" fill="rgba(255,255,255,0.6)" />
          <circle cx="230" cy="150" r="2" fill="rgba(255,255,255,0.4)" />
          <circle cx="110" cy="120" r="2" fill="rgba(255,255,255,0.35)" />
          <circle cx="270" cy="220" r="2.5" fill="#a3b0f5" />
          <circle cx="60" cy="180" r="1.8" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>

      <div className={styles.skills__inner}>
        <header className={styles.skills__head}>
          <h2 className={styles.skills__title}>
            Skills <span className={styles.amp}>&amp;</span>{" "}
            <span className={styles.accent}>Technologies</span>
          </h2>
          <div className={styles.skills__rule} />
          <p className={styles.skills__sub}>
            Tools I reach for when building and shipping mobile apps — from the interface down to the database.
          </p>
        </header>

        <div className={styles.skills__body}>
          <nav
            className={styles.skills__rail}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Skill categories"
          >
            {DATA.map((cat, i) => (
              <button
                key={cat.name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                className={styles.skills__tab}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === activeIndex}
                aria-controls={`panel-${i}`}
                tabIndex={i === activeIndex ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                <span className={styles.skills__node} aria-hidden="true" />
                <span className={styles.skills__tabname}>{cat.name}</span>
                <span className={styles.skills__tabcount}>{cat.tools.length}</span>
              </button>
            ))}
          </nav>

          <div className={styles.skills__panels}>
            {DATA.map((cat, i) => (
              <div
                key={cat.name}
                className={`${styles.skills__panel} ${i === activeIndex ? styles.isActive : ""}`}
                role="tabpanel"
                id={`panel-${i}`}
                aria-labelledby={`tab-${i}`}
              >
                <div className={styles.skills__panelhead}>
                  <h3>{cat.name}</h3>
                  <p>{cat.blurb}</p>
                </div>
                <ul className={styles.skills__list}>
                  {cat.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.skills__footnote}>
          {totalTools} tools, across {DATA.length} areas.
        </p>
      </div>
    </section>
  );
}