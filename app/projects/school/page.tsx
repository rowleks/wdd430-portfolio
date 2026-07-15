import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolPage() {
  const projects = await getProjects("school");
  return (
    <div className="space-y-8">
      <h2>School Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
}
