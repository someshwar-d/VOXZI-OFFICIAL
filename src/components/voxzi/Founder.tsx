import { useState } from "react";
import { HoverShine, Reveal, SectionLabel } from "./Reveal";

function FounderCard() {
  const [spinning, setSpinning] = useState(true);

  return (
    <div style={{ perspective: 1400 }}>
      <div
        onMouseEnter={() => setSpinning(false)}
        onMouseLeave={() => setSpinning(true)}
        onTouchStart={() => setSpinning(false)}
        onTouchEnd={() => setSpinning(true)}
        className="relative mx-auto w-full max-w-sm cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          animation: "card-spin 9s linear infinite",
          animationPlayState: spinning ? "running" : "paused",
        }}
      >
        {/* Front face */}
        <div
          className="rounded-xl border border-silver/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <HoverShine rounded="rounded-xl">
            <img
              src="/brand/founder-card-v2.png"
              alt="Someshwar D — Founder of VOXZI"
              className="pointer-events-none h-auto w-full select-none object-cover"
              draggable={false}
            />
          </HoverShine>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl border border-silver/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <HoverShine rounded="rounded-xl" className="h-full">
            <img
              src="/brand/founder-card-back.png"
              alt="VOXZI — AI & Data Science Student, contact card"
              className="pointer-events-none h-full w-full select-none object-cover"
              draggable={false}
            />
          </HoverShine>
        </div>
      </div>
    </div>
  );
}

export function Founder() {
  return (
    <section id="about" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionLabel>09 — Founder</SectionLabel>
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <FounderCard />
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Somesh Dhina is the Founder of VOXZI, a technology brand focused on developing
              innovative voice-assistant solutions.
            </p>
            <p>
              With a passion for technology and data science, he leads the vision and
              development of VOXZI.
            </p>
            <p>
              His goal is to create simple, intelligent, and accessible voice technology for
              everyday use.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
