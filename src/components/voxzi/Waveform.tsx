import type { CSSProperties } from "react";

export function Waveform({ bars = 40, active = true }: { bars?: number; active?: boolean }) {
  return (
    <div className="flex h-8 items-center justify-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => {
        const h = Math.round(12 + Math.abs(Math.sin(i * 0.55)) * 70);
        return (
          <span
            key={i}
            data-active={active ? "true" : "false"}
            className="wave-bar w-[2px] rounded-full bg-silver/60"
            style={
              {
                "--bar-h": `${active ? h : 12}%`,
                "--bar-dur": `${Math.round((1.2 + (i % 5) * 0.18) * 100) / 100}s`,
                "--bar-delay": `${Math.round(i * 3) / 100}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
