import { useEffect, useState } from "react";
import { ShineCard, Reveal, SectionLabel } from "./Reveal";
import { Waveform } from "./Waveform";

const conversations: { you: string; voxzi: string; action?: string }[] = [
  { you: "Open my browser.", voxzi: "Opening your browser.", action: "Launched Chrome" },
  { you: "What time is it?", voxzi: "It's 9:41 PM." },
  {
    you: "Remember my favourite colour.",
    voxzi: "Noted. I'll remember that.",
    action: "Saved to memory",
  },
  { you: "Open YouTube.", voxzi: "Opening YouTube for you.", action: "Launched youtube.com" },
  {
    you: "Tell me something interesting.",
    voxzi: "The human voice has a unique print, like a fingerprint.",
  },
  {
    you: "What did I ask you earlier?",
    voxzi: "You asked me to open your browser.",
    action: "Recalled from memory",
  },
];

type Phase = "listening" | "processing" | "responded";

export function Experience() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("listening");
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    setPhase("listening");
    const toProcessing = setTimeout(() => setPhase("processing"), 650);
    const toResponded = setTimeout(() => setPhase("responded"), 1500);
    return () => {
      clearTimeout(toProcessing);
      clearTimeout(toResponded);
    };
  }, [index]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % conversations.length), 4200);
    return () => clearInterval(id);
  }, [auto]);

  const current = conversations[index]!;

  return (
    <section id="experience" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionLabel>04 — The VOXZI experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            See it actually work.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            A live look at the request → process → action loop, exactly how VOXZI runs on
            your desktop.
          </p>
        </Reveal>

        <ShineCard delay={0.1}>
          <div className="surface-glass mt-14 overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/35" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
              </div>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                VOXZI™ Desktop
              </span>
              <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    phase === "listening" ? "bg-platinum animate-pulse" : "bg-muted-foreground/40"
                  }`}
                />
                {phase === "listening" ? "Listening" : "Standby"}
              </span>
            </div>

            <div className="space-y-6 px-6 py-10 sm:px-10">
              <div key={`you-${index}`} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
                  You
                </p>
                <p className="mt-2 text-xl text-foreground sm:text-2xl">“{current.you}”</p>
              </div>

              <Waveform />

              <div className="min-h-[92px] rounded-xl border border-border bg-onyx/60 p-5">
                {phase === "processing" ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-silver">
                      VOXZI
                    </span>
                    <span className="ml-2 flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-silver/70 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-silver/70 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-silver/70 [animation-delay:300ms]" />
                    </span>
                  </div>
                ) : phase === "responded" ? (
                  <div
                    key={`vox-${index}`}
                    className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-silver">
                        VOXZI
                      </p>
                      {current.action && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                          <span className="text-platinum">✓</span> {current.action}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xl text-platinum sm:text-2xl">“{current.voxzi}”</p>
                  </div>
                ) : (
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground/50">
                    VOXZI
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border px-6 py-5 sm:px-10">
              {conversations.map((c, i) => (
                <button
                  key={c.you}
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    setAuto(false);
                  }}
                  className={`rounded-full border px-4 py-2 text-[0.7rem] transition-colors ${
                    i === index
                      ? "border-silver/70 text-platinum"
                      : "border-border text-muted-foreground hover:border-silver/40 hover:text-platinum"
                  }`}
                >
                  “{c.you}”
                </button>
              ))}
            </div>
          </div>
        </ShineCard>
      </div>
    </section>
  );
}
