import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.liveUrl || project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border-4 border-card-border bg-card-bg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#34d399]"
    >
      {/* Top — Emoji + Icon area */}
      <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <span className="text-5xl md:text-6xl">{project.emoji}</span>
      </div>

      {/* Bottom — Info area with color */}
      <div className={`${project.color} px-5 py-5`}>
        <h3 className="font-display text-xl md:text-2xl font-black text-white text-center">
          {project.title}
        </h3>
        <p className="text-sm font-bold text-white/80 text-center mt-1">
          {project.summary}
        </p>
      </div>
    </a>
  );
}
