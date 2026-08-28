import { Reveal, SectionLabel } from "./Reveal";

const statements = ["LISTENS TO YOU.", "REMEMBERS FOR YOU.", "ACTS FOR YOU."];

export function Personal() {
  return (
    <section id="personal" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>08 — Personal assistant</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            Your voice. Your assistant.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            VOXZI is a personal desktop voice assistant — it sits with you while you work,
            waits for your voice, and handles the rest.
          </p>
        </Reveal>

        <div className="mt-20 space-y-8 border-t border-border pt-12">
          {statements.map((s, i) => (
            <Reveal key={s} delay={i * 0.1} y={40}>
              <p className="font-display text-4xl font-semibold uppercase leading-none tracking-tight text-metal sm:text-7xl">
                {s}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
