export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;

  emoji: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    summary: "Team Project Management",
    description:
      "A project management dashboard that helps teams organize, track, and deliver work with clarity and focus.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",

    emoji: "📋",
    color: "bg-teal",
  },
  {
    id: "devconnect",
    title: "DevConnect",
    summary: "Developer Community Platform",
    description:
      "A community platform for developers to share knowledge, collaborate on projects, and build meaningful connections.",
    technologies: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",

    emoji: "🤝",
    color: "bg-purple",
  },
  {
    id: "cloudsync",
    title: "CloudSync",
    summary: "Secure Cloud Storage",
    description:
      "A secure cloud storage solution with intelligent file organization and seamless cross-device synchronization.",
    technologies: ["React", "AWS S3", "Node.js", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",

    emoji: "☁️",
    color: "bg-blue",
  },
  {
    id: "pixelcraft",
    title: "PixelCraft",
    summary: "Design Collaboration Tool",
    description:
      "A design collaboration tool that enables teams to create, iterate, and ship beautiful interfaces together.",
    technologies: ["TypeScript", "Canvas API", "WebSocket", "React"],
    githubUrl: "https://github.com",

    emoji: "🎨",
    color: "bg-pink",
  },
  {
    id: "datapulse",
    title: "DataPulse",
    summary: "Analytics Dashboard",
    description:
      "An analytics dashboard that transforms complex data into clear, actionable insights with beautiful visualizations.",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",

    emoji: "📊",
    color: "bg-orange",
  },
  {
    id: "codementor",
    title: "CodeMentor",
    summary: "Interactive Learning Platform",
    description:
      "An interactive learning platform that makes programming accessible through guided exercises and real-time feedback.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com",

    emoji: "🧑‍💻",
    color: "bg-rose",
  },
];


