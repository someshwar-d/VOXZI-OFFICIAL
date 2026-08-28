import { useState } from "react";
import { ShineCard, Reveal, SectionLabel } from "./Reveal";

const categories: Record<string, { cmd: string; result: string }[]> = {
  Applications: [
    { cmd: "Open Chrome.", result: "Browser opens" },
    { cmd: "Play music.", result: "Music starts" },
    { cmd: "Close this window.", result: "Window closes" },
  ],
  Browser: [
    { cmd: "Open YouTube.", result: "YouTube opens in your browser" },
    { cmd: "Search for keyboard shortcuts.", result: "Search results open" },
  ],
  System: [
    { cmd: "Volume up.", result: "System volume increases" },
    { cmd: "Lock my computer.", result: "Screen locks" },
  ],
  Information: [
    { cmd: "What's the time?", result: "VOXZI responds with the time" },
    { cmd: "Tell me something interesting.", result: "VOXZI speaks a fact" },
  ],
  Productivity: [
    { cmd: "Remember this note.", result: "Note stored in memory" },
    { cmd: "What did I ask you earlier?", result: "VOXZI recalls your request" },
  ],
  "Custom Commands": [
    { cmd: "Start my workspace.", result: "Your configured apps launch" },
    { cmd: "Run my shortcut.", result: "Your custom action runs" },
  ],
};

const names = Object.keys(categories);

export function Commands() {
  const [active, setActive] = useState(names[0]!);

  return (
    <section id="commands" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>06 — Commands & actions</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            Say it. VOXZI acts.
          </h2>
        </Reveal>

        <ShineCard delay={0.1}>
          <div className="surface-glass mt-14 overflow-hidden rounded-2xl">
            <div className="flex flex-wrap gap-2 border-b border-border p-4">
              {names.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setActive(n)}
                  className={`rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] transition-colors ${
                    active === n
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-platinum"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <div className="divide-y divide-border font-mono">
              {categories[active]!.map((c) => (
                <div
                  key={c.cmd}
                  className="sweep flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-card/60 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-platinum">
                    <span className="text-muted-foreground">$ </span>“{c.cmd}”
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    → {c.result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ShineCard>
      </div>
    </section>
  );
}
