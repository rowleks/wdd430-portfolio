import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourcePage() {
  const projects = await getProjects({ type: "opensource" });
  return (
    <div className="space-y-8">
      <h2>Open Source Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
}
