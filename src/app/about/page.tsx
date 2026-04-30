import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionTitle from "@/components/SectionTitle";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shubham Thakur — a developer passionate about building meaningful products, continuous learning, and thoughtful design.",
};

const journeyMilestones = [
  {
    year: "2024",
    title: "Full-Stack Development",
    description:
      "Expanded into backend development, building complete applications with modern frameworks and databases.",
    emoji: "⚡",
  },
  {
    year: "2023",
    title: "Frontend Foundations",
    description:
      "Deep-dived into React, TypeScript, and modern web technologies. Built first real-world projects.",
    emoji: "🔥",
  },
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Wrote my first lines of code and discovered a passion for creating things that live on the internet.",
    emoji: "🌱",
  },
];

const values = [
  {
    emoji: "🎯",
    title: "Clarity Over Complexity",
    description:
      "The best solutions are often the simplest. I aim to write code that is easy to read, maintain, and build upon.",
  },
  {
    emoji: "📈",
    title: "Continuous Growth",
    description:
      "Technology evolves fast. I stay curious, embrace challenges, and treat every project as a learning opportunity.",
  },
  {
    emoji: "👤",
    title: "User-First Thinking",
    description:
      "Great software solves real problems. I start with the user experience and work backwards to the implementation.",
  },
  {
    emoji: "✨",
    title: "Attention to Detail",
    description:
      "The difference between good and great often lies in the small things — spacing, transitions, and polish.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="About Me"
              subtitle="I'm Shubham Thakur — a developer who is passionate about turning ideas into elegant, functional digital experiences. Here's a little more about who I am."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <AnimateOnScroll delay={100}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  🧑‍💻 Who I Am
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  I&apos;m a developer at the beginning of an exciting journey in
                  technology. I believe in the power of well-crafted software to
                  solve real problems and improve lives. My approach combines
                  technical skill with creative thinking — always keeping the
                  end user in mind.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  💭 Philosophy
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  Beyond code, I&apos;m driven by curiosity about how things work
                  and how they can be made better. I enjoy collaborating with
                  others, sharing knowledge, and contributing to projects that
                  make a positive impact. I&apos;m always looking for new challenges.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Journey — Dark Section ── */}
      <section className="bg-navy py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle title="My Journey" dark />
          </AnimateOnScroll>
          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => (
              <AnimateOnScroll key={milestone.year} delay={index * 120}>
                <div className="flex gap-5 md:gap-8 items-start rounded-xl border-3 border-accent p-5 md:p-7 hover:bg-navy-light transition-all duration-300 group">
                  <span className="text-4xl md:text-5xl shrink-0">{milestone.emoji}</span>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-black bg-accent text-navy rounded-md mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-black text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-400 mt-2 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="Skills & Tools"
              subtitle="Technologies and tools I work with regularly."
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <AnimateOnScroll key={category.name} delay={catIndex * 100}>
                <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                  <h3 className="font-display text-lg font-black text-accent-dark mb-4 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm font-bold text-gray-600 flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values — Dark Section ── */}
      <section className="bg-navy py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle title="Values & Philosophy" dark />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 100}>
                <div className="rounded-xl border-3 border-accent bg-navy-light p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{value.emoji}</span>
                    <h3 className="font-display text-xl font-black text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Goals CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
              Looking Ahead 🔭
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-6 text-lg md:text-xl font-bold text-foreground max-w-2xl mx-auto leading-relaxed">
              My goal is to become a developer who builds products that matter —
              tools that simplify, platforms that connect, and experiences that
              delight. I&apos;m committed to continuous growth.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-extrabold tracking-tight rounded-xl bg-accent text-navy border-3 border-navy hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-300"
              >
                See My Work 🚀
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
