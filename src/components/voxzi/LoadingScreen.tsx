import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-onyx transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        <div
          className="absolute inset-0 animate-spin rounded-full"
          style={{
            border: "1px solid transparent",
            borderTopColor: "#e2e5ea",
            borderRightColor: "#e2e5ea44",
            animationDuration: "1.3s",
          }}
        />
        <img src="/brand/voxzi-mark-flat.png" alt="" className="h-16 w-16 object-contain" />
      </div>
    </div>
  );
}
