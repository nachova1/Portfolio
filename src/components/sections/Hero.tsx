export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-foreground/50">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Ignacio</h1>
      <p className="mt-4 max-w-xl text-lg text-foreground/60">
        Full-stack developer building clean, performant web experiences.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
