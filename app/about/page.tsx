import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center bg-background font-sans">
      <section className="flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <Image src="/assets/rowland.jpg" alt="Rowland" width={200} height={200} className="object-cover" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">About</h1>
            <p className="text-muted-foreground leading-relaxed">
              My name is Rowland and I&apos;m a full-stack developer passionate about building modern web applications.
              I work across the stack with TypeScript, React, Next.js, Node.js, and various databases.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This portfolio showcases projects from my coursework at BYU-Idaho and the Full Stack Open program, ranging
              from REST APIs and database-backed backends to full-stack applications with authentication,
              containerization, and deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
