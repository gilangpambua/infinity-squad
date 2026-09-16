import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Quote, X, Mail } from "lucide-react";
import { TEACHERS, type Teacher } from "../data/content";
import { Reveal, SectionHead } from "./ui";

export default function Teachers() {
  const [active, setActive] = useState<Teacher | null>(null);

  return (
    <section id="teachers" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#5b8cff]/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          eyebrow="Chapter 04 — Wali Kelas"
          title={
            <>
              The Ones Who{" "}
              <span className="italic font-display font-normal text-[#9ec5ff]">
                Guided Us
              </span>
            </>
          }
          sub="“3 Tahun, 3 Wali Kelas, 3+3 = 7?”"
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.12}>
              <button
                onClick={() => setActive(t)}
                className="group w-full text-left rounded-3xl overflow-hidden border border-white/10 bg-white/[0.025] card-lift img-zoom"
              >
                <div className="relative h-80 md:h-[26rem] overflow-hidden">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04060d] via-[#04060d]/25 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full bg-black/55 backdrop-blur border border-white/15 text-[#9ec5ff]">
                    {t.grade}
                  </span>
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/50">
                      {t.title}
                    </p>
                    <h3 className="font-display text-3xl mt-1.5">{t.name}</h3>
                    <p className="font-display italic text-[#9ec5ff]/90 mt-1">
                      “{t.tagline}”
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-white/55">
                        {t.subject} · {t.years}
                      </span>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
                        Baca →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* teacher modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-t-3xl md:rounded-3xl border border-white/12 bg-[#070b18]"
            >
              <div className="relative h-72 md:h-96">
                <img
                  src={active.photo}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-[#070b18]/30 to-transparent" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-black/50 border border-white/15 backdrop-blur"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-5 left-6 right-6 md:left-10">
                  <p className="text-[11px] tracking-[0.35em] uppercase text-[#9ec5ff]">
                    {active.grade} · {active.years} · {active.subject}
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl mt-2">
                    {active.name}
                  </h3>
                  <p className="font-display italic text-white/60 text-lg">
                    {active.title}
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-10 space-y-6">
                <p className="text-white/65 font-light leading-relaxed flex gap-3">
                  <BookOpen
                    size={16}
                    className="shrink-0 mt-1 text-[#8b5cf6]"
                  />
                  {active.bio}
                </p>
                <p className="font-display italic text-2xl text-white/90">
                  <Quote
                    size={16}
                    className="inline mr-2 -mt-1 text-[#8b5cf6]"
                  />
                  “{active.quote}”
                </p>
                <div className="rounded-2xl border border-[#5b8cff]/25 bg-gradient-to-br from-[#5b8cff]/10 to-transparent p-5">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[#9ec5ff] mb-2 flex items-center gap-2">
                    <Mail size={12} /> Message to the class
                  </p>
                  <p className="font-display italic text-lg text-white/85 leading-relaxed">
                    “{active.message}”
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
