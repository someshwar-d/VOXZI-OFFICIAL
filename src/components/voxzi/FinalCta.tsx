import { Reveal } from "./Reveal";

const VOXZI_APP_URL = "https://voxzi-orb-interface.lovable.app/";

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden border-t border-border bg-onyx py-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[26vw] font-bold leading-none tracking-tight text-foreground/[0.035]"
      >
        VOXZI
      </span>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-metal sm:text-7xl">
            More than an assistant.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 font-display text-lg font-medium tracking-[0.5em] text-platinum">
            VOXZI™
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
            Speak. VOXZI listens.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={VOXZI_APP_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="sweep mt-12 inline-block rounded-full border border-silver/50 bg-primary px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Experience VOXZI →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
