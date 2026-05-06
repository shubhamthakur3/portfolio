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
    id: "hotel-backend",
    title: "Hotel Backend API",
    summary: "Scalable Booking Engine",
    description:
      "A production-grade hotel booking platform with concurrency-safe inventory management, automated task processing, and secure payment integration.",
    technologies: ["Django", "Python", "PostgreSQL", "Redis", "Stripe", "Celery"],
    githubUrl: "https://github.com",
    emoji: "🏨",
    color: "bg-teal",
  },
  {
    id: "travellers-dairy",
    title: "Traveller's Dairy",
    summary: "Himalayan Travel Log",
    description:
      "An immersive travel dairy capturing the essence of the Himalayas through rich storytelling and dynamic visual experiences.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "AOS"],
    githubUrl: "https://github.com",
    emoji: "🏔️",
    color: "bg-blue",
  },
  {
    id: "mediashare",
    title: "MediaShare",
    summary: "Photo & Video Sharing Platform",
    description:
      "A backend-centric application for secure photo and video sharing, featuring ImageKit integration for real-time optimization and JWT-based authentication.",
    technologies: ["Python", "FastAPI", "SQLite", "ImageKit.io", "JWT"],
    githubUrl: "https://github.com",
    emoji: "📸",
    color: "bg-orange",
  },
  {
    id: "time-tracking",
    title: "Time Tracking",
    summary: "Python Automation Script",
    description:
      "An automation script integrated with Google Calendar API to streamline time tracking processes, featuring seamless error handling and local deployment.",
    technologies: ["Python", "Google Calendar API", "Pyinstaller"],
    githubUrl: "https://github.com",
    emoji: "⏱️",
    color: "bg-purple",
  },
];


