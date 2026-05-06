import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Profile Avatar */}
          <AnimateOnScroll>
            <div className="relative mb-10">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-[6px] border-navy overflow-hidden bg-accent relative hover:border-accent transition-all duration-500 pulse-border">
                <Image
                  src="/profile.JPG"
                  alt="Shubham Thakur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Intro Text */}
          <AnimateOnScroll delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] max-w-4xl">
              Hey, I&apos;m{" "}
              <span className="text-accent-dark">Shubham Thakur</span>
              .
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-xl md:text-2xl font-bold text-foreground max-w-3xl leading-relaxed">
              I&apos;m a developer and creator. I love building things and I&apos;m
              always working on something new. I do my best to create things
              with ❤️
            </p>
          </AnimateOnScroll>

          {/* CTA Buttons */}
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-extrabold tracking-tight rounded-xl bg-accent text-navy border-3 border-navy hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-300"
              >
                View My Projects ⬇️
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-extrabold tracking-tight rounded-xl bg-transparent text-foreground border-3 border-foreground hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#34d399] hover:border-accent transition-all duration-300"
              >
                About Me 👋
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>



      {/* ══════════════════════════════════════════════
          ALL PROJECTS — Dark Section
          ══════════════════════════════════════════════ */}
      <section id="projects" className="bg-navy py-20 md:py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="My Projects"
              subtitle="I love to create things, and I'm always working on something new! You can view some of my favorite projects below."
              dark
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.id} delay={index * 80}>
                <ProjectCard project={project} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT SECTION
          ══════════════════════════════════════════════ */}
      <section id="about" className="py-20 md:py-28 px-6 md:px-10 bg-gray-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="About Me"
              subtitle="A little bit about who I am, what I do, and what drives me."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who I Am */}
            <AnimateOnScroll delay={100}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  🧑‍💻 Who I Am
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  I&apos;m a developer at the beginning of an exciting journey in
                  technology. I believe in the power of well-crafted software to
                  solve real problems and improve lives. My approach combines
                  technical skill with creative thinking.
                </p>
              </div>
            </AnimateOnScroll>

            {/* My Journey */}
            <AnimateOnScroll delay={200}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  🚀 My Journey
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  From writing my first lines of code to building full-stack
                  applications, every step has been fueled by curiosity. I love
                  exploring new technologies and pushing the boundaries of what
                  I can create.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Values */}
            <AnimateOnScroll delay={300}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  💡 Values
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  Clarity over complexity. User-first thinking. Continuous
                  growth. Attention to detail. I believe the best solutions are
                  often the simplest, and great software starts with
                  understanding people.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Goals */}
            <AnimateOnScroll delay={400}>
              <div className="rounded-xl border-4 border-card-border bg-card-bg p-6 md:p-8 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#34d399] transition-all duration-300">
                <h3 className="font-display text-2xl font-black text-foreground mb-4">
                  🎯 Goals
                </h3>
                <p className="text-base font-semibold text-gray-600 leading-relaxed">
                  To become a developer who builds products that matter —
                  tools that simplify, platforms that connect, and experiences
                  that delight. Always aiming higher.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SKILLS SECTION
          ══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="Skills & Tools"
              subtitle="Technologies and tools I work with to bring ideas to life."
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

      {/* ══════════════════════════════════════════════
          EXTRAS — Dark Section
          ══════════════════════════════════════════════ */}
      <section id="extras" className="bg-navy py-20 md:py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <SectionTitle
              title="Extras"
              subtitle="An incomplete list of some resources, writings, and interests. Check them out if you like!"
              dark
            />
          </AnimateOnScroll>

          {/* Extra Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <AnimateOnScroll delay={100}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl bg-accent p-6 border-4 border-accent hover:border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]"
              >
                <span className="text-4xl">💻</span>
                <div>
                  <h3 className="font-display text-xl font-black text-navy">
                    GitHub Profile
                  </h3>
                  <p className="text-sm font-bold text-navy/70 mt-1">
                    My open source work, contributions, and experiments.
                  </p>
                </div>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl bg-accent p-6 border-4 border-accent hover:border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)]"
              >
                <span className="text-4xl">🔗</span>
                <div>
                  <h3 className="font-display text-xl font-black text-navy">
                    LinkedIn
                  </h3>
                  <p className="text-sm font-bold text-navy/70 mt-1">
                    Connect with me professionally and see my career journey.
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Media / Articles Section */}
          <div id="media" className="space-y-5 scroll-mt-24">
            <AnimateOnScroll>
              <h3 className="font-display text-3xl font-black text-white mb-6">
                Writing & Media
              </h3>
            </AnimateOnScroll>

            {[
              {
                title: "Building Better Developer Tools",
                description:
                  "Thoughts on creating tools that developers actually want to use.",
              },
              {
                title: "The Power of Clean Code",
                description:
                  "Why writing readable, maintainable code matters more than clever solutions.",
              },
              {
                title: "Starting Your Developer Journey",
                description:
                  "Advice and reflections for those beginning their path in software development.",
              },
            ].map((article, index) => (
              <AnimateOnScroll key={article.title} delay={index * 100}>
                <div className="rounded-xl border-3 border-accent p-5 md:p-6 hover:bg-navy-light transition-all duration-300 cursor-pointer group">
                  <h4 className="font-display text-lg md:text-xl font-black text-accent group-hover:text-accent-light transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm font-bold text-gray-400 mt-1">
                    {article.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
