import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionLabel } from "./Reveal";

const words = ["SPEAK.", "LISTEN.", "RESPOND."];

function BigWord({ word, index }: { word: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? ["-6%", "6%"] : ["6%", "-6%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.15, 1, 1, 0.15]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.h3
        style={reduce ? {} : { x, opacity }}
        className="font-display text-[16vw] font-semibold leading-[0.95] tracking-tight text-metal sm:text-[11vw]"
      >
        {word}
      </motion.h3>
    </div>
  );
}

export function Idea() {
  return (
    <section id="idea" className="relative border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>01 — The Idea</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display text-4xl font-light tracking-tight sm:text-6xl">
            Just speak.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            VOXZI gives you a natural way to interact with your computer using your voice.
          </p>
        </Reveal>

        <div className="mt-20 space-y-2">
          {words.map((w, i) => (
            <BigWord key={w} word={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
