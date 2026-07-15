import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
