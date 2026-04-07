import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ignacio
        </Link>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-foreground/70">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
