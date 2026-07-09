import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function SchoolPage() {
  const filtered = projects.filter((p) => p.type === "school");
  return (
    <div className="space-y-8">
      <h2>School Projects</h2>
      <ProjectList projects={filtered} />
    </div>
  );
}
