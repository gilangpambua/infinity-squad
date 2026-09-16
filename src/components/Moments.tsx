import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  DoorOpen,
  Bus,
  Flame,
  CloudRain,
  Camera,
  GraduationCap,
  Quote,
} from "lucide-react";
import { MOMENTS, WALL_QUOTES } from "../data/content";
import { Reveal, SectionHead } from "./ui";

const ICONS: Record<string, typeof Bus> = {
  door: DoorOpen,
  bus: Bus,
  flame: Flame,
  cloud: CloudRain,
  camera: Camera,
  cap: GraduationCap,
};

export function Moments() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#8b5cf6]/10 blur-[130px] rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          eyebrow="Chapter 06 — Moment Yang Menyatukan Bangsa"
          title={
            <>
              Moment Yang{" "}
              <span className="italic font-display font-normal text-[#9ec5ff]">
                Menyatukan Bangsa
              </span>
            </>
          }
          sub="Enam moment yang akan kami ceritakan kepada anak-anak kami."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOMENTS.map((m, i) => {
            const Icon = ICONS[m.icon] ?? Camera;
            return (
              <Reveal key={m.title} delay={(i % 3) * 0.1}>
                <article className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7 md:p-8 card-lift overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#5b8cff]/10 blur-[60px] group-hover:bg-[#8b5cf6]/20 transition-colors duration-700" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-to-br from-[#5b8cff]/25 to-[#8b5cf6]/25 border border-white/12">
                        <Icon size={20} className="text-[#9ec5ff]" />
                      </span>
                      <span className="font-display italic text-white/30 text-lg">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="mt-6 text-[11px] tracking-[0.3em] uppercase text-[#8b5cf6]">
                      {m.grade}
                    </p>
                    <h3 className="font-display text-3xl mt-2">{m.title}</h3>
                    <p className="mt-3 text-white/55 font-light leading-relaxed text-[15px]">
                      “{m.text}”
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function QuoteWall() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIdx((v) => (v + 1) % WALL_QUOTES.length),
      4200,
    );
    return () => clearInterval(id);
  }, [paused]);

  const q = WALL_QUOTES[idx];

  return (
    <section
      className="relative py-28 md:py-36 border-y border-white/[0.07] bg-gradient-to-b from-[#070b18] via-[#0a0f24] to-[#070b18] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[26rem] leading-none text-white/[0.025] select-none hidden md:block">
          ”
        </span>
      </div>
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#9ec5ff]/80">
            Kata-kata hari ini
          </p>
        </Reveal>
        <div className="mt-8 min-h-[190px] md:min-h-[210px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
              transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-3xl md:text-5xl leading-tight">
                “{q.text}”
              </p>
              <footer className="mt-6 text-[12px] tracking-[0.3em] uppercase text-white/45">
                — {q.by}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {WALL_QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-gradient-to-r from-[#5b8cff] to-[#8b5cf6]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
        <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/25 flex items-center justify-center gap-2">
          <Quote size={11} />
        </p>
      </div>
    </section>
  );
}
