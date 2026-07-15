export default function ProjectSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <article key={i} className="relative rounded-xl border border-card-border bg-card p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-muted" />
          <div className="flex items-start justify-between gap-2">
            <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-5 w-12 rounded-full border border-card-border bg-muted animate-pulse" />
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-3.5 w-full rounded bg-muted animate-pulse" />
            <div className="h-3.5 w-5/6 rounded bg-muted animate-pulse" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-5 w-14 rounded-full bg-muted animate-pulse" />
            <div className="h-5 w-20 rounded-full bg-muted animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
          </div>
        </article>
      ))}
    </div>
  );
}