import { Monitor, Server, Database, Wrench } from "lucide-react"

// ── Brand SVG icons ────────────────────────────────────────────────────────────

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.25" />
      <ellipse cx="12" cy="12" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.25" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.25" transform="rotate(120 12 12)" />
    </svg>
  )
}

function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.073 4.755 19.775.96 15.26.164c-.397-.07-.863-.115-1.377-.14A27.392 27.392 0 0 0 11.572 0z" />
    </svg>
  )
}

function JavaScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="2" fill="#F7DF1E" />
      <path d="M7.5 17.5c.4.7.94 1.2 1.88 1.2 1 0 1.62-.5 1.62-1.2 0-.83-.65-1.12-1.74-1.6l-.6-.26c-1.72-.73-2.86-1.65-2.86-3.59 0-1.79 1.36-3.15 3.49-3.15 1.52 0 2.6.52 3.38 1.9l-1.85 1.19c-.41-.73-.85-1.02-1.53-1.02-.7 0-1.14.44-1.14 1.02 0 .71.44 1 1.47 1.45l.6.26c2.03.87 3.17 1.76 3.17 3.76C13.79 19.4 12.2 21 9.8 21c-2.35 0-3.87-1.12-4.61-2.59L7.5 17.5zM15.5 8.25h2.2v5.99c0 2.7-1.58 3.93-3.9 3.93-.59 0-1.37-.1-1.87-.3l.3-1.84c.36.16.83.27 1.3.27 1.02 0 1.97-.44 1.97-2.09V8.25z" fill="#000" />
    </svg>
  )
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#06B6D4" className={className} aria-hidden="true">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
    </svg>
  )
}

function NodejsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#339933" className={className} aria-hidden="true">
      <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.6 3 7.1 3 7.65v8.7c0 .55.3 1.05.78 1.3l7.44 4.3c.46.26 1.06.26 1.52 0l7.44-4.3c.48-.25.78-.75.78-1.3v-8.7c0-.55-.3-1.05-.78-1.3L12.78 2.05c-.23-.13-.5-.2-.78-.2zm0 2.1l6.5 3.75v7.5L12 19l-6.5-3.8V7.7L12 3.95z" />
    </svg>
  )
}

function ExpressIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.284c-.076-.427-.07-.85-.139-1.4zm1.114-.049h9.431a5.003 5.003 0 0 0-1.1-3.505 4.021 4.021 0 0 0-5.85-.3 4.611 4.611 0 0 0-2.48 3.806z" />
    </svg>
  )
}

function MongoDBIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#47A248" className={className} aria-hidden="true">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  )
}

function GitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#F05032" className={className} aria-hidden="true">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.634-2.533L13.108 8.2v6.828a1.839 1.839 0 0 1 .49 3.583 1.838 1.838 0 0 1-2.329-1.753 1.838 1.838 0 0 1 1.007-1.634V8.13a1.837 1.837 0 0 1-1.007-1.632 1.838 1.838 0 0 1 .362-1.094L8.932 2.683 .454 11.162a1.549 1.549 0 0 0 0 2.187l10.477 10.478a1.549 1.549 0 0 0 2.188 0l10.427-10.428a1.549 1.549 0 0 0 0-2.469z" />
    </svg>
  )
}

function DockerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#2496ED" className={className} aria-hidden="true">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.085-.07-1.219-.63-2.278-1.658-3.221l-.332-.337-.337.331c-.649.65-1.022 1.472-1.056 2.409a3.494 3.494 0 0 0 .396 1.636 3.97 3.97 0 0 1-.787.187 8.957 8.957 0 0 1-1.176.07H.001c-.012.309.022.618.1.92.2.77.548 1.475 1.022 2.09a6.04 6.04 0 0 0 3.4 2.027c.627.126 1.268.189 1.91.187 1.017.002 2.027-.18 2.974-.54a8.232 8.232 0 0 0 2.455-1.587 9.65 9.65 0 0 0 1.696-2.283c.454.023.905-.013 1.35-.104a5.5 5.5 0 0 0 1.386-.53 4.63 4.63 0 0 0 .807-.614l.332-.333-.318-.35c-.048-.054-.543-.567-1.534-.774z" />
    </svg>
  )
}

function ApiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 6l-2 12" />
    </svg>
  )
}

// ── Data ───────────────────────────────────────────────────────────────────────

type Skill = { name: string; icon: React.FC<{ className?: string }> }

const categories: {
  icon: React.FC<{ className?: string }>
  label: string
  accent: string
  accentBg: string
  accentBorder: string
  skills: Skill[]
}[] = [
  {
    icon: Monitor,
    label: "Frontend",
    accent: "text-blue-500",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    skills: [
      { name: "React",      icon: ReactIcon },
      { name: "Next.js",    icon: NextjsIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Tailwind",   icon: TailwindIcon },
    ],
  },
  {
    icon: Server,
    label: "Backend",
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    skills: [
      { name: "Node.js", icon: NodejsIcon },
      { name: "Express", icon: ExpressIcon },
    ],
  },
  {
    icon: Database,
    label: "Base de datos",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    skills: [
      { name: "MongoDB", icon: MongoDBIcon },
    ],
  },
  {
    icon: Wrench,
    label: "Herramientas",
    accent: "text-amber-500",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    skills: [
      { name: "Git",    icon: GitIcon },
      { name: "APIs",   icon: ApiIcon },
      { name: "Docker", icon: DockerIcon },
    ],
  },
]

// ── Component ──────────────────────────────────────────────────────────────────

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-28 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          04. skills
        </p>
        <h2 className="mb-14 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tecnologías
        </h2>

        {/* Category grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: CatIcon, label, accent, accentBg, accentBorder, skills }) => (
            <div
              key={label}
              className={`flex flex-col gap-5 rounded-2xl border ${accentBorder} bg-[var(--card-surface)] p-5`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${accentBg}`}>
                  <CatIcon className={`h-4 w-4 ${accent}`} />
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${accent}`}>
                  {label}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-col gap-2">
                {skills.map(({ name, icon: SkillIcon }) => (
                  <div
                    key={name}
                    className="group flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-surface)] px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-default)] hover:bg-[var(--card-surface-hover)]"
                  >
                    <SkillIcon className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 group-hover:text-foreground">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

      </div>
    </section>
  )
}
