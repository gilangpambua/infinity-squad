import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { MEMORIES, MEMORY_CATEGORIES } from "../data/content";
import { Reveal, SectionHead } from "./ui";

export default function MemoryWall() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const list = useMemo(
    () =>
      cat === "All" ? MEMORIES : MEMORIES.filter((m) => m.category === cat),
    [cat],
  );
  const flatIndex = (item: (typeof MEMORIES)[number]) => MEMORIES.indexOf(item);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((v) => (v === null ? null : (v + 1) % MEMORIES.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) =>
          v === null ? null : (v + MEMORIES.length - 1) % MEMORIES.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="memories" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          eyebrow="Chapter 05 — Memory Wall"
          title={
            <>
              Memory{" "}
              <span className="italic font-display font-normal text-[#9ec5ff]">
                Wall
              </span>
            </>
          }
          sub="“Moment yang tidak bisa terulang lagi”"
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex gap-2 overflow-x-auto no-scrollbar pb-2 justify-start md:justify-center mask-fade-x">
            {MEMORY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 text-xs tracking-[0.12em] uppercase px-4 py-2.5 rounded-full border transition-all ${
                  cat === c
                    ? "bg-white text-[#04060d] border-white font-semibold"
                    : "border-white/12 text-white/55 hover:border-white/35 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 masonry">
          <AnimatePresence mode="popLayout">
            {list.map((m) => (
              <motion.button
                layout
                key={m.src + m.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(flatIndex(m))}
                className="group relative w-full text-left rounded-2xl overflow-hidden border border-white/10 img-zoom card-lift"
              >
                <img
                  src={m.src}
                  alt={m.title}
                  loading="lazy"
                  className={`w-full object-cover ${m.tall ? "h-96" : "h-64"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full bg-black/55 backdrop-blur border border-white/15 text-white/80">
                  {m.category}
                </span>
                <span className="absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-black/55 backdrop-blur border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand size={14} />
                </span>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="font-display text-2xl">{m.title}</p>
                  <p className="text-sm text-white/60 font-light mt-1">
                    {m.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/92 backdrop-blur-xl"
              onClick={() => setLightbox(null)}
            />
            <motion.figure
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full"
            >
              <img
                src={MEMORIES[lightbox].src}
                alt={MEMORIES[lightbox].title}
                className="w-full max-h-[75vh] object-contain rounded-2xl border border-white/12"
              />
              <figcaption className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[#9ec5ff]">
                    {MEMORIES[lightbox].category}
                  </p>
                  <p className="font-display text-2xl md:text-3xl mt-1">
                    {MEMORIES[lightbox].title}
                  </p>
                  <p className="text-white/55 font-light mt-1">
                    {MEMORIES[lightbox].caption}
                  </p>
                </div>
                <p className="text-white/35 text-sm shrink-0 font-display italic">
                  {lightbox + 1} / {MEMORIES.length}
                </p>
              </figcaption>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-11 h-11 grid place-items-center rounded-full bg-white text-black hover:bg-[#cfe3ff]"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <button
                onClick={() =>
                  setLightbox(
                    (lightbox + MEMORIES.length - 1) % MEMORIES.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/60 border border-white/20 backdrop-blur hover:bg-black/90"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setLightbox((lightbox + 1) % MEMORIES.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-black/60 border border-white/20 backdrop-blur hover:bg-black/90"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [vals, setVals] = useState([0, 0, 0]);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVals([36, 3, 3]);
      return;
    }
    const targets = [36, 3, 3];
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      setVals(targets.map((t) => Math.round(t * e)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce]);

  const items: [number | string, string, string][] = [
    [vals[0], "Bintang", "36 orbit yang berbeda"],
    [vals[1], "Tahun Bersama", "2018 → 2020, *libur gak dihitung"],
    [vals[2], "Wali Kelas", "The Three Muskeeters"],
    ["∞", "Kenangan", "Tak Terhingga"],
  ];

  return (
    <section className="relative py-20 md:py-28 border-y border-white/[0.07] bg-white/[0.015]">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center"
      >
        {items.map(([n, label, sub], i) => (
          <Reveal key={label} delay={i * 0.1}>
            <div className="font-display text-6xl md:text-7xl bg-gradient-to-b from-white to-[#5b8cff]/60 bg-clip-text text-transparent">
              {n}
            </div>
            <p className="mt-2 text-[11px] tracking-[0.35em] uppercase text-white/70">
              {label}
            </p>
            <p className="mt-1.5 text-xs text-white/35 font-light">{sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
