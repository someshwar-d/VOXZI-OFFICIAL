import { ShineCard, Reveal, SectionLabel } from "./Reveal";

const features = [
  {
    icon: "🎙",
    title: "Voice Interaction",
    body: "Talk naturally with VOXZI using your voice.",
  },
  {
    icon: "👂",
    title: "Listening",
    body: "VOXZI listens for your commands and converts your speech into actionable input.",
  },
  {
    icon: "🧠",
    title: "Understanding",
    body: "VOXZI interprets what you are asking and determines the appropriate response.",
  },
  {
    icon: "💾",
    title: "Memory",
    body: "VOXZI can remember useful information and recall it later.",
  },
  {
    icon: "⚡",
    title: "Actions",
    body: "VOXZI can execute supported computer commands and tasks.",
  },
  {
    icon: "🔊",
    title: "Response",
    body: "VOXZI responds through natural voice output.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>02 — What VOXZI does</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-4xl font-light tracking-tight sm:text-6xl">
            More than voice commands.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ShineCard key={f.title} delay={i * 0.08}>
              <article className="sweep group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                <span aria-hidden="true" className="text-2xl opacity-80 grayscale">
                  {f.icon}
                </span>
                <h3 className="mt-6 font-display text-lg font-medium tracking-wide text-platinum">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                <span className="mt-8 block h-px w-0 bg-silver/60 transition-all duration-700 group-hover:w-full" />
              </article>
            </ShineCard>
          ))}
        </div>
      </div>
    </section>
  );
}
