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
      className="group block rounded-xl border-4 border-gray-600 bg-navy-light overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[6px_6px_0px_0px_#34d399]"
    >
      {/* Top — Emoji area */}
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100 border-b-4 border-gray-600 group-hover:border-accent transition-colors duration-300">
        <span className="text-6xl md:text-7xl">{project.emoji}</span>
      </div>

      {/* Bottom — Info area with color */}
      <div className={`${project.color} px-5 py-5`}>
        <h3 className="font-display text-xl md:text-2xl font-black text-white">
          {project.title}
        </h3>
        <p className="text-sm font-bold text-white/80 mt-1">
          {project.summary}
        </p>
      </div>
    </a>
  );
}
