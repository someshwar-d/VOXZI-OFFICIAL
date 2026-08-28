import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/voxzi/Nav";
import { Hero } from "@/components/voxzi/Hero";
import { Idea } from "@/components/voxzi/Idea";
import { Features } from "@/components/voxzi/Features";
import { HowItWorks } from "@/components/voxzi/HowItWorks";
import { Experience } from "@/components/voxzi/Experience";
import { Memory } from "@/components/voxzi/Memory";
import { Commands } from "@/components/voxzi/Commands";
import { UnderTheHood } from "@/components/voxzi/UnderTheHood";
import { Personal } from "@/components/voxzi/Personal";
import { Founder } from "@/components/voxzi/Founder";
import { FinalCta } from "@/components/voxzi/FinalCta";
import { Footer } from "@/components/voxzi/Footer";
import { LoadingScreen } from "@/components/voxzi/LoadingScreen";

const title = "VOXZI™ — More Than an Assistant";
const description =
  "VOXZI is a desktop voice assistant that listens, understands, remembers, acts, and speaks back — a natural way to control your computer with your voice.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "VOXZI",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Desktop",
          description,
          author: { "@type": "Person", name: "Somesh Dhina" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grid-bg min-h-screen bg-background">
      <LoadingScreen />
      <Nav />
      <main>
        <Hero />
        <Idea />
        <Features />
        <HowItWorks />
        <Experience />
        <Memory />
        <Commands />
        <UnderTheHood />
        <Personal />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
