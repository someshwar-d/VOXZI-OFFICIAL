import { useEffect, useRef, useState } from "react";
import { HoverShine } from "./Reveal";

/** Circular microphone interface with reactive silver waveform. */
export function VoiceOrb() {
  const [active, setActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const energy = useRef(0.18);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let t = 0;
    const draw = () => {
      const { width: w, height: h } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, w, h);
      const target = active ? 1 : 0.18;
      energy.current += (target - energy.current) * 0.06;
      const e = energy.current;
      const mid = h / 2;

      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const p = x / w;
          const env = Math.sin(Math.PI * p) ** 1.6;
          const y =
            mid +
            env *
              e *
              (h * 0.32) *
              Math.sin(p * (7 + layer * 3) - t * (1.4 + layer * 0.5)) *
              Math.cos(p * 3 + t * 0.6 + layer);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(226,229,234,${0.5 - layer * 0.15})`;
        ctx.lineWidth = layer === 0 ? 1.6 : 1;
        ctx.stroke();
      }

      if (!reduce) t += 0.03;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
        <div className="animate-pulse-ring absolute inset-0 rounded-full border border-silver/25" />
        <div
          className="animate-pulse-ring absolute inset-6 rounded-full border border-silver/20"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="animate-pulse-ring absolute inset-12 rounded-full border border-silver/15"
          style={{ animationDelay: "1.6s" }}
        />
        <div className="glow-soft surface-glass absolute inset-16 rounded-full" />
        <button
          type="button"
          aria-pressed={active}
          aria-label={active ? "Stop VOXZI listening demo" : "Start VOXZI listening demo"}
          onClick={() => setActive((v) => !v)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full text-platinum transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{
            background: "radial-gradient(circle at 35% 30%, #3a3a3e, #16161a 65%, #060607)",
            boxShadow:
              "0 12px 30px rgba(0,0,0,0.7), inset 0 2px 3px rgba(255,255,255,0.15), inset 0 -6px 10px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="flex h-[80%] w-[80%] items-center justify-center rounded-full"
            style={{
              background: "radial-gradient(circle at 40% 35%, #232326, #0c0c0e 70%)",
              boxShadow:
                "inset 0 3px 6px rgba(0,0,0,0.9), inset 0 -2px 3px rgba(255,255,255,0.06)",
            }}
          >
            <HoverShine className="h-[75%] w-[75%]">
              <img
                src="/brand/voxzi-mark-circle.png"
                alt="VOXZI"
                className="h-full w-full rounded-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              />
            </HoverShine>
          </div>
        </button>
      </div>

      <div className="mt-2 w-full">
        <canvas ref={canvasRef} className="h-24 w-full" aria-hidden="true" />
        <p className="text-center font-mono text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
          {active ? "Listening…" : "Tap VOXZI"}
        </p>
      </div>
    </div>
  );
}
