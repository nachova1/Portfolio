import { ArrowUpRight, Users, Briefcase } from "lucide-react"

type Badge = "Community" | "Freelance"

interface Project {
  title: string
  description: string
  badge: Badge
  href: string
  accentText: string
  accentBar: string
}

const projects: Project[] = [
  {
    title: "Stereos en la nube",
    description:
      "Plataforma desarrollada en comunidad enfocada en la gestión y organización de contenido digital.",
    badge: "Community",
    href: "https://estereos-en-la-nube.vercel.app/",
    accentText: "text-blue-500",
    accentBar: "bg-blue-500/50 group-hover:bg-blue-500/70",
  },
  {
    title: "Reparame App",
    description:
      "Aplicación web orientada a resolver necesidades específicas de usuarios mediante una interfaz intuitiva y eficiente.",
    badge: "Community",
    href: "https://s11-10-m-java-next-eight.vercel.app/",
    accentText: "text-violet-500",
    accentBar: "bg-violet-500/50 group-hover:bg-violet-500/70",
  },
  {
    title: "Wayclo",
    description:
      "Proyecto freelance donde trabajé en el desarrollo de una solución real para un cliente, enfocándome en la experiencia de usuario y funcionalidad.",
    badge: "Freelance",
    href: "https://prueba-seven-blush.vercel.app/",
    accentText: "text-emerald-500",
    accentBar: "bg-emerald-500/50 group-hover:bg-emerald-500/70",
  },
]

const badgeConfig: Record<Badge, { icon: typeof Users; classes: string }> = {
  Community: {
    icon: Users,
    classes: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  Freelance: {
    icon: Briefcase,
    classes: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-28 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          02. proyectos
        </p>
        <div className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="text-sm text-muted-foreground">
            {projects.length} proyectos · 2 tipos
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const { icon: BadgeIcon, classes: badgeClasses } = badgeConfig[project.badge]

            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-surface)] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-default)] hover:bg-[var(--card-surface-hover)] hover:shadow-xl hover:shadow-black/10"
              >
                {/* Top row: badge + arrow */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium ${badgeClasses}`}
                  >
                    <BadgeIcon className="h-3 w-3" />
                    {project.badge}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--card-surface)] text-muted-foreground transition-all duration-200 group-hover:border-[var(--border-default)] group-hover:text-foreground group-hover:scale-110">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Accent bar */}
                <div
                  className={`mb-3 h-1.5 w-8 rounded-full transition-all duration-300 group-hover:w-14 ${project.accentBar}`}
                />

                {/* Title */}
                <h3 className={`mb-2 text-base font-semibold text-foreground transition-colors duration-200 group-hover:${project.accentText}`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Hover CTA */}
                <p className={`mt-5 text-xs font-medium opacity-0 transition-all duration-200 group-hover:opacity-100 ${project.accentText}`}>
                  Ver proyecto →
                </p>
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

      </div>
    </section>
  )
}
