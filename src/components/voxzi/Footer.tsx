const VOXZI_APP_URL = "https://voxzi-orb-interface.lovable.app/";

const links = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: VOXZI_APP_URL },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.3em] text-metal">
            VOXZI™
          </p>
          <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
            More than an assistant
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="text-sm text-muted-foreground transition-colors hover:text-platinum"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-2">
          <a
            href="https://github.com/voxzi-ai"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-sm text-muted-foreground transition-colors hover:text-platinum"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/company/143049472/"
            target="_blank"
            rel="noreferrer noopener"
            className="block text-sm text-muted-foreground transition-colors hover:text-platinum"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:voxziassistant@gmail.com"
            className="block text-sm text-muted-foreground transition-colors hover:text-platinum"
          >
            voxziassistant@gmail.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <div className="hairline h-px" />
        <p className="pt-6 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
          © 2026 VOXZI™. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
