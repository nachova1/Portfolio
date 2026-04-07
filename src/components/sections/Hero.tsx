"use client"

import { ArrowRight, Mail, Download, Code2, Briefcase, Layers } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background flex items-center overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 lg:py-0">

        {/* ── Main layout ── */}
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">

          {/* Profile image */}
          <div className="animate-[fadeIn_0.6s_ease-out_both] flex-shrink-0">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 opacity-25 blur-sm" />

              <div className="relative h-64 w-64 rotate-3 overflow-hidden rounded-2xl border border-[var(--border-default)] shadow-2xl shadow-black/30 lg:h-72 lg:w-72">
                {/* Placeholder — replace with real photo via next/image */}
                <div className="flex h-full w-full items-end justify-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                  <svg
                    viewBox="0 0 128 128"
                    className="w-40 translate-y-3 text-slate-500"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="64" cy="44" r="26" />
                    <ellipse cx="64" cy="112" rx="46" ry="30" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-[fadeInUp_0.7s_ease-out_0.15s_both] flex-1 text-center lg:text-left">

            {/* Availability badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
              Disponible para proyectos
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Ignacio
              </span>
            </h1>

            <p className="mb-5 text-lg font-medium text-[var(--text-secondary)] sm:text-xl">
              Fullstack Developer especializado en JavaScript
            </p>

            <p className="mx-auto mb-8 max-w-lg leading-relaxed text-muted-foreground lg:mx-0">
              Construyo aplicaciones web modernas y escalables, con foco en la
              experiencia del usuario, código limpio y buenas prácticas. Siempre
              aprendiendo, siempre mejorando.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-blue-500/40"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--card-surface)] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-[var(--border-default)] hover:bg-[var(--card-surface-hover)]"
              >
                <Mail className="h-4 w-4" />
                Contactarme
              </a>
              <a
                href="/cv-ignacio.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] bg-[var(--card-surface)] px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="animate-[fadeInUp_0.7s_ease-out_0.4s_both] mt-20 border-t border-[var(--divider)] pt-8">
          <div className="flex flex-wrap justify-center gap-x-0 divide-y divide-[var(--divider)] sm:divide-x sm:divide-y-0 lg:justify-start">

            <div className="flex w-full items-center gap-3 py-4 sm:w-auto sm:px-8 sm:first:pl-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15">
                <Code2 className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none text-foreground">+10</p>
                <p className="mt-0.5 text-sm text-muted-foreground">proyectos</p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3 py-4 sm:w-auto sm:px-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15">
                <Briefcase className="h-4 w-4 text-violet-500" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none text-foreground">+1 año</p>
                <p className="mt-0.5 text-sm text-muted-foreground">experiencia</p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3 py-4 sm:w-auto sm:px-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15">
                <Layers className="h-4 w-4 text-emerald-500" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none text-foreground">Stack</p>
                <p className="mt-0.5 text-sm text-muted-foreground">React / Next.js / Node</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
