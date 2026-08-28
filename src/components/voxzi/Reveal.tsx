import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card wrapper: fades/slides up like Reveal, then sweeps a diagonal
 * silver shine across the surface once it's in view. Delay staggers
 * both the entrance and the shine so a grid of cards lights up in sequence.
 */
export function ShineCard({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(226,229,234,0.18) 50%, transparent 60%)",
          }}
          initial={{ x: "-120%" }}
          whileInView={{ x: "120%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: delay + 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
      <span className="h-px w-8 bg-silver/60" />
      {children}
    </span>
  );
}

/**
 * Wraps any element (button, card, image) and plays a one-shot diagonal
 * silver shine sweep whenever the cursor enters or a touch begins.
 * Re-fires every time, so it can be replayed on repeated hover/touch.
 */
export function HoverShine({
  children,
  className,
  rounded = "rounded-full",
}: {
  children: ReactNode;
  className?: string;
  rounded?: string;
}) {
  const reduce = useReducedMotion();
  const [playCount, setPlayCount] = useState(0);
  const trigger = () => setPlayCount((c) => c + 1);

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className ?? ""}`}
      onMouseEnter={trigger}
      onTouchStart={trigger}
    >
      {children}
      {!reduce && (
        <motion.span
          key={playCount}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(226,229,234,0.6) 50%, transparent 65%)",
          }}
          initial={{ x: "-140%" }}
          animate={{ x: playCount > 0 ? "140%" : "-140%" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}
