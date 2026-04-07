import { Users, Lightbulb, CheckCircle } from "lucide-react"

const pillars = [
  {
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Trabajo en equipo",
    body: "Colaboro activamente con otros desarrolladores, adaptándome a distintas metodologías y flujos de trabajo para avanzar de forma coordinada hacia un objetivo común.",
  },
  {
    icon: Lightbulb,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Resolución de problemas",
    body: "Me enfoco en entender el problema antes de proponer una solución, evaluando opciones y eligiendo el enfoque más claro y sostenible en el tiempo.",
  },
  {
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Entrega de valor",
    body: "Priorizo el impacto real por sobre la complejidad técnica. Cada línea de código busca resolver algo concreto para el usuario o el equipo.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative bg-background py-28 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          03. experiencia
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Cómo trabajo
        </h2>

        {/* Two-column: prose left, pillars right */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">

          {/* Prose */}
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            <p>
              Durante mi experiencia como desarrollador, he participado en el
              desarrollo de aplicaciones web, colaborando en{" "}
              <span className="font-medium text-[var(--text-secondary)]">equipos de trabajo</span>{" "}
              y adaptándome a distintas metodologías para avanzar de forma
              efectiva hacia los objetivos del proyecto.
            </p>
            <p>
              Me enfoco en escribir{" "}
              <span className="font-medium text-[var(--text-secondary)]">código limpio</span>,
              mantener una buena organización del proyecto y entender las
              necesidades del usuario para ofrecer soluciones efectivas que
              tengan sentido más allá de lo técnico.
            </p>
            <p>
              También he trabajado en la resolución de problemas, mejora de
              interfaces y optimización de procesos, siempre buscando{" "}
              <span className="font-medium text-[var(--text-secondary)]">
                entregar valor real
              </span>{" "}
              en cada desarrollo.
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map(({ icon: Icon, color, bg, border, title, body }) => (
              <div
                key={title}
                className={`flex gap-4 rounded-xl border ${border} ${bg} px-5 py-4`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-[var(--text-secondary)]">
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
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
