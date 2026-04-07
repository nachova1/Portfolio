import { Code2, Cpu, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    label: "Frontend",
    value: "React & Next.js",
  },
  {
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    label: "Backend",
    value: "Node.js & MongoDB",
  },
  {
    icon: Rocket,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    label: "Enfoque",
    value: "IA & Automatización",
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-28 overflow-hidden">
      {/* Faint background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Section label */}
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          01. sobre mí
        </p>

        <h2 className="mb-14 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          ¿Quién soy?
        </h2>

        <div className="grid gap-14 lg:grid-cols-[1fr_auto]">

          {/* Paragraphs */}
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            <p>
              Soy desarrollador{" "}
              <span className="font-medium text-[var(--text-secondary)]">Fullstack</span>{" "}
              enfocado en{" "}
              <span className="font-medium text-[var(--text-secondary)]">JavaScript</span>, con
              experiencia construyendo aplicaciones web modernas utilizando
              tecnologías como{" "}
              <span className="font-medium text-blue-500">Next.js</span>,{" "}
              <span className="font-medium text-blue-500">Node.js</span> y{" "}
              <span className="font-medium text-blue-500">MongoDB</span>.
            </p>
            <p>
              Me interesa especialmente el desarrollo de interfaces dinámicas, la
              automatización de procesos y el uso de{" "}
              <span className="font-medium text-[var(--text-secondary)]">
                inteligencia artificial
              </span>{" "}
              para crear soluciones reales que aporten valor concreto.
            </p>
            <p>
              Actualmente busco seguir creciendo profesionalmente, enfrentando
              nuevos desafíos y mejorando continuamente mis habilidades técnicas.
              Disfruto del aprendizaje constante y de trabajar en proyectos que
              combinen creatividad con buen código.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-row gap-3 lg:flex-col">
            {highlights.map(({ icon: Icon, color, bg, label, value }) => (
              <div
                key={label}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-surface)] px-4 py-4 text-center backdrop-blur-sm lg:w-44 lg:items-start lg:text-left"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-medium uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-secondary)]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

      </div>
    </section>
  )
}
