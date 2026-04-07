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
          className="text-base font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Ignacio
          <span className="ml-1 text-blue-500">.</span>
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
