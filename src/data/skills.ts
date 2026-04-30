export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "Tools & Workflow",
    skills: [
      "Git & GitHub",
      "Docker",
      "VS Code",
      "Figma",
      "Vercel",
      "AWS",
    ],
  },
  {
    name: "Concepts",
    skills: [
      "Responsive Design",
      "Agile Development",
      "CI/CD",
      "Testing",
      "Performance Optimization",
      "Accessibility",
    ],
  },
];
