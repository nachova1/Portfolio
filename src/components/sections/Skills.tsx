const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Docker", "Git",
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
