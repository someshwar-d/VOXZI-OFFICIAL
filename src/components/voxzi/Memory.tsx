import { ShineCard, Reveal, SectionLabel } from "./Reveal";

const nodes = [
  { x: 18, y: 30, label: "colour" },
  { x: 50, y: 16, label: "name" },
  { x: 78, y: 36, label: "routine" },
  { x: 32, y: 70, label: "notes" },
  { x: 66, y: 76, label: "recall" },
];

function Bubble({ who, text }: { who: string; text: string }) {
  const isVox = who === "VOXZI";
  return (
    <div
      className={`rounded-xl border p-4 ${
        isVox ? "border-silver/35 bg-onyx/70" : "border-border bg-card/40"
      }`}
    >
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
        {who}
      </p>
      <p className={`mt-2 ${isVox ? "text-platinum" : "text-foreground"}`}>“{text}”</p>
    </div>
  );
}

export function Memory() {
  return (
    <section id="memory" className="relative border-t border-border py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionLabel>05 — Memory</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
              It can remember.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tell VOXZI something worth keeping and it stores it. Ask later, and it recalls
              it — no re-explaining, no repeating yourself.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <Reveal delay={0.15}>
              <Bubble who="You" text="Remember that my favourite colour is black." />
            </Reveal>
            <Reveal delay={0.2}>
              <Bubble who="VOXZI" text="I'll remember that." />
            </Reveal>
            <Reveal delay={0.25}>
              <p className="pt-2 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
                — Later —
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Bubble who="You" text="What's my favourite colour?" />
            </Reveal>
            <Reveal delay={0.35}>
              <Bubble who="VOXZI" text="Your favourite colour is black." />
            </Reveal>
          </div>
        </div>

        <ShineCard delay={0.15} y={40}>
          <div className="surface-glass glow-soft relative aspect-square w-full overflow-hidden rounded-2xl">
            <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
              {nodes.map((a, i) =>
                nodes.slice(i + 1).map((b) => (
                  <line
                    key={`${a.label}-${b.label}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-silver/25"
                  />
                )),
              )}
              {nodes.map((n, i) => (
                <g key={n.label} className="text-silver">
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.25"
                    className="animate-pulse-ring"
                    style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.4}s` }}
                  />
                  <circle cx={n.x} cy={n.y} r="1.6" fill="currentColor" />
                  <text
                    x={n.x}
                    y={n.y + 10}
                    textAnchor="middle"
                    className="fill-muted-foreground font-mono"
                    style={{ fontSize: 2.6, letterSpacing: 0.3 }}
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </ShineCard>
      </div>
    </section>
  );
}
