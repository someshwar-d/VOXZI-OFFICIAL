import { Reveal, SectionLabel } from "./Reveal";

const chain = [
  { label: "YOUR VOICE", module: "input", desc: "You speak a request." },
  { label: "EARS", module: "ears.py", desc: "Captures and transcribes speech." },
  { label: "BRAIN", module: "brain.py", desc: "Routes the request to the right handler." },
  { label: "SMART BRAIN", module: "smart_brain.py", desc: "Handles open-ended questions." },
  { label: "MEMORY", module: "memory.py", desc: "Stores and recalls what matters." },
  { label: "HANDS", module: "hands.py", desc: "Performs supported actions." },
  { label: "MOUTH", module: "mouth.py", desc: "Speaks the response back." },
  { label: "YOUR RESPONSE", module: "output", desc: "You hear the answer." },
];

export function UnderTheHood() {
  return (
    <section id="technology" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <SectionLabel>07 — Under the hood</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            Inside VOXZI.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            A modular assistant — each component does one thing, and passes the voice along.
          </p>
        </Reveal>

        <div className="mt-16 space-y-3">
          {chain.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="sweep surface-glass flex flex-col gap-1 rounded-lg px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[0.6rem] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-medium tracking-[0.25em] text-metal">
                    {c.label}
                  </span>
                </div>
                <div className="flex items-center gap-4 pl-10 sm:pl-0">
                  <span className="text-xs text-muted-foreground">{c.desc}</span>
                  <code className="rounded border border-border px-2 py-1 font-mono text-[0.65rem] text-silver">
                    {c.module}
                  </code>
                </div>
              </div>
              {i < chain.length - 1 && (
                <div aria-hidden="true" className="mx-auto my-1 h-5 w-px bg-gradient-to-b from-silver/50 to-transparent" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
