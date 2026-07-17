import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function OpenSourceLoading() {
  return (
    <div className="space-y-8">
      <div className="h-7 w-56 rounded-md bg-muted animate-pulse" />
      <ProjectSkeleton />
      <div className="flex items-center justify-center gap-1 pt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-8 w-8 rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    </div>
  );
}
