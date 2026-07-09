import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
