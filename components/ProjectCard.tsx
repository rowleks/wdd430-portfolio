import type { Project as ProjectCardProps } from "@/lib/projects-db";

export default function ProjectCard({ title, description, technologies, link, type }: ProjectCardProps) {
  return (
    <article className="group relative rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${type === "school" ? "bg-linear-to-r from-accent to-cyan-500" : "bg-linear-to-r from-purple-500 to-red-500"}`}
      />
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground border-card-border">
          {type}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View Project
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </article>
  );
}
