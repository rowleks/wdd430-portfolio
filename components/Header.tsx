import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-16 items-center justify-between px-6 container">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          Rowland
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
