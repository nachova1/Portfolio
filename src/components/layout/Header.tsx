"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navLinks = [
  { href: "#hero",       label: "Inicio" },
  { href: "#about",      label: "Sobre mí" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact",    label: "Contacto" },
]

export function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="#hero"
          aria-label="Inicio"
          className="transition-opacity hover:opacity-70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.16 46.625" className="h-7 w-auto" aria-hidden="true">
            <g transform="translate(0, 2.8125) rotate(0 20.5 20.5)">
              <path d="M40.6035 40.89V0.889954H19.0079L0.603525 19.2943L0.603516 40.89H40.6035Z" fill="#2F2722"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9139 27.4315L19.9139 39.5106L11.638 39.5106L11.638 24.0035L23.7171 11.9244L39.2242 11.9244L39.2242 20.2003L27.1451 20.2003L19.9139 27.4315Z" fill="#D62727"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.2587 23.2936L10.2587 39.5106L1.98283 39.5106L1.98283 19.8656L19.5792 2.26926L39.2242 2.26926L39.2242 10.5451L23.0072 10.5451L10.2587 23.2936Z" fill="#FFD43E"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M29.569 31.5695L29.569 39.5106L21.2932 39.5106L21.2932 28.1415L27.855 21.5796L39.2242 21.5796L39.2242 29.8555L31.283 29.8555L29.569 31.5695Z" fill="#EA721B"/>
            </g>
            <g transform="translate(47, 0.5)">
              <path fill="currentColor" d="M8.17 11.43L14.16 11.43L14.16 36L8.17 36L8.17 11.43ZM25.92 16.19Q27.98 16.19 29.54 17.03Q31.10 17.87 31.94 19.23L31.94 19.23L31.94 16.47L37.92 16.47L37.92 35.97Q37.92 38.66 36.85 40.85Q35.79 43.04 33.60 44.33Q31.41 45.63 28.16 45.63L28.16 45.63Q23.82 45.63 21.12 43.58Q18.43 41.53 18.04 38.03L18.04 38.03L23.96 38.03Q24.24 39.15 25.29 39.80Q26.34 40.45 27.88 40.45L27.88 40.45Q29.73 40.45 30.83 39.38Q31.94 38.31 31.94 35.97L31.94 35.97L31.94 33.20Q31.06 34.56 29.52 35.42Q27.98 36.28 25.92 36.28L25.92 36.28Q23.50 36.28 21.54 35.04Q19.58 33.80 18.44 31.50Q17.31 29.21 17.31 26.20L17.31 26.20Q17.31 23.19 18.44 20.91Q19.58 18.64 21.54 17.41Q23.50 16.19 25.92 16.19L25.92 16.19ZM31.94 26.23Q31.94 23.99 30.69 22.70Q29.45 21.41 27.67 21.41L27.67 21.41Q25.88 21.41 24.64 22.68Q23.40 23.96 23.40 26.20L23.40 26.20Q24.64 28.44 24.64 29.75Q25.88 31.06 27.67 31.06L27.67 31.06Q29.45 31.06 30.69 29.77Q31.94 28.48 31.94 26.23L31.94 26.23ZM54.16 16.26Q57.59 16.26 59.64 18.48Q61.69 20.70 61.69 24.59L61.69 24.59L61.69 36L55.74 36L55.74 25.39Q55.74 23.43 54.72 22.35Q53.71 21.27 51.99 21.27L51.99 21.27Q50.28 21.27 49.26 22.35Q48.25 23.43 48.25 25.39L48.25 25.39L48.25 36L42.26 36L42.26 16.47L48.25 16.47L48.25 19.06Q49.16 17.76 50.70 17.01Q52.24 16.26 54.16 16.26L54.16 16.26ZM64.66 26.20Q64.66 23.19 65.80 20.91Q66.94 18.64 68.90 17.41Q70.86 16.19 73.27 16.19L73.27 16.19Q75.34 16.19 76.89 17.03Q78.45 17.87 79.29 19.23L79.29 19.23L79.29 16.47L85.28 16.47L85.28 36L79.29 36L79.29 33.23Q78.42 34.60 76.86 35.44Q75.30 36.28 73.24 36.28L73.24 36.28Q70.86 36.28 68.90 35.04Q66.94 33.80 65.80 31.50Q64.66 29.21 64.66 26.20L64.66 26.20ZM79.29 26.23Q79.29 23.99 78.05 22.70Q76.81 21.41 75.02 21.41L75.02 21.41Q73.24 21.41 71.99 22.68Q70.75 23.96 70.75 26.20L70.75 26.20Q70.75 28.44 71.99 29.75Q73.24 31.06 75.02 31.06L75.02 31.06Q76.81 31.06 78.05 29.77Q79.29 28.48 79.29 26.23L79.29 26.23ZM88.43 26.20Q88.43 23.19 89.56 20.91Q90.70 18.64 92.66 17.41Q94.62 16.19 97.04 16.19L97.04 16.19Q98.96 16.19 100.55 16.99Q102.15 17.80 103.06 19.16L103.06 19.16L103.06 10.10L109.04 10.10L109.04 36L103.06 36L103.06 33.20Q102.22 34.60 100.66 35.44Q99.10 36.28 97.04 36.28L97.04 36.28Q94.62 36.28 92.66 35.04Q90.70 33.80 89.56 31.50Q88.43 29.21 88.43 26.20L88.43 26.20ZM103.06 26.23Q103.06 23.99 101.81 22.70Q100.57 21.41 98.79 21.41L98.79 21.41Q97.00 21.41 95.76 22.68Q94.52 23.96 94.52 26.20L94.52 26.20Q94.52 28.44 95.76 29.75Q97.00 31.06 98.79 31.06L98.79 31.06Q100.57 31.06 101.81 29.77Q103.06 28.48 103.06 26.23L103.06 26.23ZM131.79 25.92Q131.79 26.76 131.69 27.67L131.69 27.67L118.14 27.67Q118.28 29.49 119.31 30.45Q120.35 31.41 121.85 31.41L121.85 31.41Q124.09 31.41 124.97 29.52L124.97 29.52L131.34 29.52Q130.84 31.45 129.57 32.99Q128.29 34.53 126.37 35.41Q124.44 36.28 122.06 36.28L122.06 36.28Q119.19 36.28 116.95 35.05Q114.71 33.83 113.45 31.55Q112.19 29.28 112.19 26.23L112.19 26.23Q112.19 23.19 113.43 20.91Q114.68 18.64 116.92 17.41Q119.16 16.19 122.06 16.19L122.06 16.19Q124.90 16.19 127.10 17.38Q129.31 18.57 130.55 20.77Q131.79 22.98 131.79 25.92L131.79 25.92ZM118.18 24.34L125.67 24.34Q125.67 22.80 124.62 21.89Q123.57 20.98 121.99 20.98L121.99 20.98Q120.49 20.98 119.45 21.86Q118.42 22.73 118.18 24.34L118.18 24.34ZM139.49 16.47L143.73 30.40L147.96 16.47L154.33 16.47L147.40 36L140.02 36L133.09 16.47L139.49 16.47Z"/>
            </g>
          </svg>
        </Link>

        {/* Desktop nav — center */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + hamburger */}
        <div className="flex items-center gap-1">
          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground md:hidden"
          >
            {open
              ? <X className="h-5 w-5" />
              : <Menu className="h-5 w-5" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
