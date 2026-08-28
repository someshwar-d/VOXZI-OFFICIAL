import { useEffect, useState } from "react";

const VOXZI_APP_URL = "https://voxzi-orb-interface.lovable.app/";

const links = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: VOXZI_APP_URL },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "surface-glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-sm font-semibold tracking-[0.3em] text-metal">
          VOXZI<span className="align-super text-[0.55em]">™</span>
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-platinum"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={VOXZI_APP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="sweep rounded-full border border-border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-platinum transition-colors hover:border-silver/70"
        >
          Meet VOXZI
        </a>
      </nav>
    </header>
  );
}
