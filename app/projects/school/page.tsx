import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import { getProjects } from "@/lib/projects-db";

async function SchoolProjects() {
  const projects = await getProjects("school");
  return <ProjectList projects={projects} />;
}

export default function SchoolPage() {
  return (
    <div className="space-y-8">
      <h2>School Projects</h2>
      <Suspense fallback={<ProjectSkeleton />}>
        <SchoolProjects />
      </Suspense>
    </div>
  );
}
