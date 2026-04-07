const projects = [
  {
    title: "Project One",
    description: "A brief description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of what this project does and the problem it solves.",
    tags: ["Python", "FastAPI", "Docker"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group rounded-xl border border-foreground/10 p-6 transition-colors hover:border-foreground/30 hover:bg-foreground/5"
          >
            <h3 className="mb-2 font-semibold group-hover:text-foreground transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-foreground/60 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/10 px-2.5 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
