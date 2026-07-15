import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function OpenSourceLoading() {
  return (
    <div className="space-y-8">
      <div className="h-7 w-56 rounded-md bg-muted animate-pulse" />
      <ProjectSkeleton />
    </div>
  );
}