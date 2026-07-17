import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import Pagination from "@/components/Pagination";
import { getProjects, getProjectsCount } from "@/lib/projects-db";

async function OpenSourceProjects({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q, page } = await searchParams;
  const currentPage = Number(page) || 1;

  const [projects, totalCount] = await Promise.all([
    getProjects({ type: "opensource", search: q, page: currentPage }),
    getProjectsCount({ type: "opensource", search: q }),
  ]);

  return (
    <>
      <ProjectList projects={projects} />
      <Pagination totalCount={totalCount} />
    </>
  );
}

export default async function OpenSourcePage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  return (
    <div className="space-y-8">
      <h2>Open Source Projects</h2>
      <Suspense fallback={<ProjectSkeleton />}>
        <OpenSourceProjects searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
