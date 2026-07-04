import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Next Blog",
    description:
      "A modern blog platform built with Next.js featuring Drizzle ORM with PostgreSQL, NextAuth authentication, full admin management, and deployed on Neon serverless.",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "NextAuth"],
    link: "https://fso-next-blog.vercel.app",
  },
  {
    title: "Praxis Task Manager",
    description:
      "A comprehensive task management system with a RESTful API backend and React SPA frontend, featuring secure auth, filtering, real-time task CRUD, and containerized with Docker.",

    technologies: ["Node.js", "Express", "React", "MongoDB", "Docker"],
    link: "https://github.com/rowleks/praxis-task-management",
  },
  {
    title: "FSO RDB",
    description:
      "A relational database backend for Full Stack Open, built with Express and Sequelize, integrating PostgreSQL, authentication, and Docker Compose for development.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Docker"],
    link: "https://github.com/rowleks/fso-rdb",
  },
  {
    title: "Hyerd",
    description:
      "A modern, minimalistic web application built with Vite featuring a fluid layout and fast development pipeline.",
    link: "https://github.com/rowleks/hyerd",
    technologies: ["Vite", "JavaScript", "CSS"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background font-sans">
      <section className="flex w-full max-w-3xl flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Projects</h1>
          <p className="text-muted-foreground">A selection of things I&apos;ve built.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
