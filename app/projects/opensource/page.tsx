import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects-db";

export default function OpenSourcePage() {
  const filtered = projects.filter((p) => p.type === "opensource");
  return (
    <div className="space-y-8">
      <h2>Open Source Projects</h2>
      <ProjectList projects={filtered} />
    </div>
  );
}
