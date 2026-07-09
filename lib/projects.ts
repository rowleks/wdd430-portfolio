export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: "school" | "opensource";
}

export const projects: Project[] = [
  {
    title: "Next Blog",
    description:
      "A modern blog platform built with Next.js featuring Drizzle ORM with PostgreSQL, NextAuth authentication, full admin management, and deployed on Neon serverless.",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "NextAuth"],
    link: "https://fso-next-blog.vercel.app",
    type: "opensource",
  },
  {
    title: "Praxis Task Manager",
    description:
      "A comprehensive task management system with a RESTful API backend and React SPA frontend, featuring secure auth, filtering, real-time task CRUD, and containerized with Docker.",
    technologies: ["Node.js", "Express", "React", "MongoDB", "Docker"],
    link: "https://github.com/rowleks/praxis-task-management",
    type: "opensource",
  },
  {
    title: "FSO RDB",
    description:
      "A relational database backend for Full Stack Open, built with Express and Sequelize, integrating PostgreSQL, authentication, and Docker Compose for development.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Docker"],
    link: "https://github.com/rowleks/fso-rdb",
    type: "opensource",
  },
  {
    title: "Hyerd",
    description:
      "A modern, minimalistic web application built with Vite featuring a fluid layout and fast development pipeline.",
    technologies: ["Vite", "JavaScript", "CSS"],
    link: "https://github.com/rowleks/hyerd",
    type: "opensource",
  },
  {
    title: "CSE341 Readlyst API",
    description:
      "A book tracking REST API with full CRUD capabilities, JWT-based authentication, comprehensive Swagger documentation, and deployed on a Node/Express backend.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    link: "https://github.com/rowleks/cse341-readlyst-api",
    type: "school",
  },
  {
    title: "WDD330 Team Project",
    description:
      "A collaborative web application built for WDD330, showcasing team-based frontend development with modern JavaScript patterns.",
    technologies: ["JavaScript", "CSS", "HTML"],
    link: "https://github.com/rowleks/wdd330-team15",
    type: "school",
  },
  {
    title: "CSE212 Data Structures",
    description:
      "Programming with Data Structures coursework covering fundamental CS concepts using C#.",
    technologies: ["C#"],
    link: "https://github.com/rowleks/cse212",
    type: "school",
  },
  {
    title: "CSE340 Backend",
    description:
      "Web Backend Development project for CSE340, implementing server-side logic and API routes.",
    technologies: ["Node.js", "JavaScript"],
    link: "https://github.com/rowleks/cse340",
    type: "school",
  },
];