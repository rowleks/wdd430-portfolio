import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center bg-background font-sans">
      <section className="flex w-full flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-1">
          <h1 className="text-foreground">Projects</h1>
          <p className="text-muted-foreground">A selection of things I&apos;ve built.</p>
        </div>
        <Suspense>
          <SearchBar />
        </Suspense>
        <nav className="flex gap-4 text-sm font-medium">
          <Link
            href="/projects"
            className="rounded-full border border-card-border px-3.5 py-1.5 text-foreground transition-colors hover:bg-muted"
          >
            All
          </Link>
          <Link
            href="/projects/opensource"
            className="rounded-full border border-card-border px-3.5 py-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            Open Source
          </Link>
          <Link
            href="/projects/school"
            className="rounded-full border border-card-border px-3.5 py-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            School
          </Link>
        </nav>
        {children}
      </section>
    </div>
  );
}
