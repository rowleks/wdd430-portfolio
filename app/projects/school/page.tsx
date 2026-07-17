import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import Pagination from "@/components/Pagination";
import { getProjects, getProjectsCount } from "@/lib/projects-db";

async function SchoolProjects({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q, page } = await searchParams;
  const currentPage = Number(page) || 1;

  const [projects, totalCount] = await Promise.all([
    getProjects({ type: "school", search: q, page: currentPage }),
    getProjectsCount({ type: "school", search: q }),
  ]);

  return (
    <>
      <ProjectList projects={projects} />
      <Pagination totalCount={totalCount} />
    </>
  );
}

export default async function SchoolPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  return (
    <div className="space-y-8">
      <h2>School Projects</h2>
      <Suspense fallback={<ProjectSkeleton />}>
        <SchoolProjects searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
