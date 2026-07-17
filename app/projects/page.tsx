import { Suspense } from "react";
import ProjectList from "@/components/ProjectList";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import Pagination from "@/components/Pagination";
import { getProjects, getProjectsCount } from "@/lib/projects-db";

async function Projects({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q, page } = await searchParams;
  const currentPage = Number(page) || 1;

  const [projects, totalCount] = await Promise.all([
    getProjects({ search: q, page: currentPage }),
    getProjectsCount({ search: q }),
  ]);

  return (
    <>
      <ProjectList projects={projects} />
      <Pagination totalCount={totalCount} />
    </>
  );
}

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <Projects searchParams={searchParams} />
    </Suspense>
  );
}
