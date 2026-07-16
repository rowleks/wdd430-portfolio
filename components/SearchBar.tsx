"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    params.delete("page");
    router.replace(`?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search projects..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-lg border border-card-border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
