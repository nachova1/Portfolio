import { Mail, ArrowRight } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  )
}

const links = [
  {
    icon: Mail,
    label: "Email",
    display: "ignaciovarela.dev@gmail.com",
    href: "mailto:ignaciovarela.dev@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/40",
    hoverBg: "hover:bg-blue-500/15",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    display: "linkedin.com/in/ignaciovarela",
    href: "https://linkedin.com/in/ignaciovarela",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-500/40",
    hoverBg: "hover:bg-violet-500/15",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    display: "github.com/ignaciovarela",
    href: "https://github.com/ignaciovarela",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    hoverBg: "hover:bg-emerald-500/15",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-28 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">

        {/* Header */}
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-blue-500">
          05. contacto
        </p>
        <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hablemos
        </h2>
        <p className="mx-auto mb-4 max-w-md leading-relaxed text-muted-foreground">
          ¿Te interesa trabajar conmigo o tenés alguna idea en mente?
        </p>
        <p className="mx-auto mb-14 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Estoy abierto a nuevas oportunidades y proyectos. Podés contactarme
          a través de los siguientes medios.
        </p>

        {/* Contact links */}
        <div className="flex flex-col gap-3 text-left">
          {links.map(({ icon: Icon, label, display, href, color, bg, border, hoverBorder, hoverBg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl border ${border} ${bg} ${hoverBorder} ${hoverBg} px-5 py-4 transition-all duration-200`}
            >
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border ${border} ${bg}`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[0.7rem] font-medium uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="truncate text-sm font-medium text-[var(--text-secondary)] transition-colors group-hover:text-foreground">
                  {display}
                </p>
              </div>

              <ArrowRight className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:${color}`} />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
