import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects-db";

export default function ProjectsPage() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
