import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Shubham Thakur — from web applications and developer tools to design platforms and analytics dashboards.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Green Header Banner ── */}
      <section className="bg-accent py-4 border-b-4 border-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-display text-sm font-black text-navy text-center tracking-wider uppercase">
            ✨ Portfolio — Shubham Thakur ✨
          </p>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="My Projects"
              subtitle="I love to create things, and I'm always working on something new! You can view some of my favorite projects below."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.id} delay={index * 80}>
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Dark Section ── */}
      <section className="bg-navy py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Want to work together? 🤝
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="mt-6 text-lg md:text-xl font-bold text-gray-400 max-w-xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities and collaborations.
              Let&apos;s build something great.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-8">
              <a
                href="mailto:hello@shubhamthakur.dev"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-extrabold tracking-tight rounded-xl bg-accent text-navy border-3 border-accent hover:border-white hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Get in Touch ✉️
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
