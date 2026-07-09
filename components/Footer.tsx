export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="mx-auto flex h-16 items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
