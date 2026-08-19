import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { PrivacyStance } from "./components/PrivacyStance";
import { Features } from "./components/Features";
import { TorVsAntTor } from "./components/TorVsAntTor";
import { ExitNodes } from "./components/ExitNodes";
import { Encryption } from "./components/Encryption";
import { BigIdea } from "./components/BigIdea";
import { Why } from "./components/Why";
import { Roadmap } from "./components/Roadmap";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <PrivacyStance />
        <Features />
        <TorVsAntTor />
        <ExitNodes />
        <Encryption />
        <BigIdea />
        <Why />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}