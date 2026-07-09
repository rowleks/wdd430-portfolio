import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background font-sans">
      <section className="flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-foreground">Portfolio</h1>
          <p className="text-muted-foreground">A selection of things I&apos;ve built.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
