import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Journey from "./components/Journey";
import Squad from "./components/Squad";
import StudentModal from "./components/StudentModal";
import Teachers from "./components/Teachers";
import MemoryWall, { Stats } from "./components/Memories";
import { Moments, QuoteWall } from "./components/Moments";
import Constellation from "./components/Constellation";
import Finale, { Footer } from "./components/Finale";
import type { Student } from "./data/squad";

export default function App() {
  const [selected, setSelected] = useState<Student | null>(null);

  return (
    <div className="relative min-h-screen bg-[#04060d] text-[#f2f5ff] overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Journey />
        <Squad onSelect={setSelected} />
        <Stats />
        <Teachers />
        <MemoryWall />
        <Moments />
        <QuoteWall />
        <Constellation onSelect={setSelected} />
        <Finale />
      </main>
      <Footer />
      <StudentModal student={selected} onClose={() => setSelected(null)} onNav={setSelected} />
    </div>
  );
}
