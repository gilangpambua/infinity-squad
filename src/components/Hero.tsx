import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Users, Route } from "lucide-react";
import Starfield from "./Starfield";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* cosmic backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(91,140,255,0.22),transparent),radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(139,92,246,0.16),transparent),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(56,189,248,0.1),transparent)]" />
        <Starfield density={1.4} className="absolute inset-0 w-full h-full" />
        {/* infinity glow ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full border border-white/[0.05] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#04060d] to-transparent" />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-5 pt-32 pb-16 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 glass rounded-full pl-2 pr-5 py-1.5 mb-8"
        >
          <span className="text-[11px] tracking-[0.2em] uppercase bg-gradient-to-r from-[#5b8cff] to-[#8b5cf6] rounded-full px-3 py-1 font-semibold">
            IC AIHIHIHI
          </span>
          <span className="text-xs tracking-[0.25em] uppercase text-white/60">
            Year Book Ala-Ala
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="font-display italic text-[#9ec5ff] text-lg md:text-2xl mb-4 text-glow-soft"
        >
          kelas yang berubah menjadi rasi bintang. "rasi bintang itu apa kak?
          google dek"
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold tracking-tight leading-[0.95] text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          Infinity
          <br />
          <span className="font-display font-normal italic bg-gradient-to-r from-[#cfe3ff] via-[#9ec5ff] to-[#c4b5fd] bg-clip-text text-transparent text-glow pr-2">
            Squad
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-7 flex flex-col items-center gap-3"
        >
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-white/80">
            · 36 Manusia · 1 Tim Futsal ·
          </p>
          <p className="font-display italic text-white/45 text-lg md:text-xl">
            “Go to infinity and beyond”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#squad"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#04060d] text-sm tracking-[0.12em] uppercase font-semibold hover:bg-[#cfe3ff] transition-all hover:shadow-[0_0_50px_rgba(158,197,255,0.5)]"
          >
            <Users size={16} /> Stalk Tipis-tipis
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/20 text-sm tracking-[0.12em] uppercase text-white/85 hover:border-[#8b5cf6]/60 hover:bg-white/5 backdrop-blur transition-all"
          >
            <Route size={16} /> Cerita Dongeng
          </a>
        </motion.div>

        {/* mini stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-14 flex items-center gap-6 md:gap-10 text-center"
        >
          {[
            ["36", "bintang"],
            ["03", "years"],
            ["∞", "memories"],
          ].map(([n, l]) => (
            <div key={l} className="flex items-center gap-6 md:gap-10">
              <div>
                <div className="font-display text-3xl md:text-4xl">{n}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">
                  {l}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative pb-8 flex flex-col items-center gap-3 text-white/45 hover:text-white/80 transition-colors"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">
          Scroll ke bawah dek
        </span>
        <span className="scroll-line" />
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
