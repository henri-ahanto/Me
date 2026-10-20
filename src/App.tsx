import { useCallback, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Timeline } from "./components/sections/Timeline";
import { Background } from "./components/fx/Background";
import { IntroExperience } from "./components/fx/IntroExperience";
import { ScrollProgress } from "./components/fx/ScrollProgress";
import { Spotlight } from "./components/fx/Spotlight";
import { PortfolioProvider } from "./data/PortfolioProvider";

export default function App() {
  const [siteVisible, setSiteVisible] = useState(false);
  const revealSite = useCallback(() => setSiteVisible(true), []);

  return (
    <PortfolioProvider>
      {siteVisible && (
        <div className="relative min-h-screen bg-ink-900 text-snow">
          <Background />
          <Spotlight />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

      <IntroExperience onRevealStart={revealSite} />
    </PortfolioProvider>
  );
}
