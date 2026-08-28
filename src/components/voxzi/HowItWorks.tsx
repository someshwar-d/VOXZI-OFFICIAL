import { ShineCard, Reveal, SectionLabel } from "./Reveal";

const steps = [
  { n: "01", icon: "🎙", title: "SPEAK", body: "You speak to VOXZI." },
  { n: "02", icon: "👂", title: "LISTEN", body: "VOXZI captures your voice." },
  { n: "03", icon: "🧠", title: "UNDERSTAND", body: "Your command is interpreted." },
  { n: "04", icon: "⚡", title: "ACT", body: "VOXZI performs the requested action." },
  { n: "05", icon: "🔊", title: "RESPOND", body: "VOXZI speaks back." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>03 — How it works</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            From voice to action.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <ShineCard key={s.n} delay={i * 0.12} className="rounded-2xl">
              <div className="sweep surface-glass group h-full rounded-2xl p-7 transition-colors duration-500 hover:bg-card/60">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-widest text-muted-foreground">
                    {s.n}
                  </span>
                  <span aria-hidden="true" className="text-xl opacity-80 grayscale">
                    {s.icon}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg font-medium tracking-[0.15em] text-metal">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-6 block h-px w-0 bg-silver/60 transition-all duration-700 group-hover:w-full" />
              </div>
            </ShineCard>
          ))}
        </div>
      </div>
    </section>
  );
}
