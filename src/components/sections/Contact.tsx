export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-3xl font-bold tracking-tight">Contact</h2>
      <p className="mb-8 text-foreground/60">
        Have a project in mind? Let&apos;s talk.
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Send an email
      </a>
    </section>
  );
}
