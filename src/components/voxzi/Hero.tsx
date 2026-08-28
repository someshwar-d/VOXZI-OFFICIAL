import { VoiceOrb } from "./VoiceOrb";
import { Reveal } from "./Reveal";

const VOXZI_APP_URL = "https://voxzi-orb-interface.lovable.app/";

export function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-screen items-center overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.005 260 / 22%) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.5em] text-muted-foreground">
              Voice Assistant
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-6xl font-semibold tracking-[0.06em] text-metal sm:text-7xl">
              VOXZI<span className="align-super text-[0.35em] tracking-normal">™</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 font-display text-3xl font-light uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              More than an assistant.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              A voice assistant designed to listen, understand, respond, remember, and help
              you get things done.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={VOXZI_APP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="sweep rounded-full border border-silver/50 bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Meet VOXZI →
              </a>
              <a
                href={VOXZI_APP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-border px-7 py-3 text-xs uppercase tracking-[0.2em] text-platinum transition-colors hover:border-silver/70"
              >
                Explore Features ↓
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40}>
          <div className="animate-float">
            <VoiceOrb />
          </div>
        </Reveal>
      </div>
      <div className="hairline absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
