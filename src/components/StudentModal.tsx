import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Sparkles,
  Quote,
  Camera,
  Heart,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react";
import { STUDENTS, type Student } from "../data/squad";
import Avatar from "./Avatar";

export default function StudentModal({
  student,
  onClose,
  onNav,
}: {
  student: Student | null;
  onClose: () => void;
  onNav: (s: Student) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!student) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(STUDENTS[student.id % 36]);
      if (e.key === "ArrowLeft") onNav(STUDENTS[(student.id + 34) % 36]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [student, onClose, onNav]);

  useEffect(() => {
    document.body.style.overflow = student ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [student]);

  const gallery = [
    "/images/memory-class.jpg",
    "/images/memory-candid.jpg",
    "/images/memory-trip.jpg",
  ];

  return (
    <AnimatePresence>
      {student && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-t-3xl md:rounded-3xl border border-white/12 bg-[#070b18] shadow-[0_40px_120px_-20px_rgba(91,140,255,0.4)]"
          >
            {/* header art */}
            <div className="relative">
              <Avatar
                student={student}
                big
                modal
                className="w-full h-72 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-[#070b18]/20 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-full bg-black/50 border border-white/15 backdrop-blur hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <button
                onClick={onClose}
                className="absolute top-4 left-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-4 py-2.5 rounded-full bg-black/50 border border-white/15 backdrop-blur hover:bg-black/80 transition-colors"
              >
                <ArrowLeft size={14} /> Back to The Squad
              </button>
              <div className="absolute bottom-5 left-6 right-6 md:left-10 md:right-10">
                <p className="text-[11px] tracking-[0.4em] text-[#9ec5ff] uppercase">
                  Star {student.num} / 36 · {student.role}
                </p>
                <h3 className="font-display text-4xl md:text-6xl mt-2">
                  {student.name}
                </h3>
                <p className="font-display italic text-xl text-white/60 mt-1">
                  “{student.nickname}”
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10 grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-7">
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-2 flex items-center gap-2">
                    <Quote size={12} /> Quote
                  </p>
                  <p className="font-display italic text-2xl leading-snug text-white/90">
                    “{student.quote}”
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-2 flex items-center gap-2">
                    <Heart size={12} /> Kenangan Favorit
                  </p>
                  <p className="text-white/65 font-light leading-relaxed">
                    {student.favoriteMemory}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#8b5cf6]/25 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent p-5">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[#c4b5fd] mb-2">
                    Pesan buat squad ic
                  </p>
                  <p className="font-display italic text-lg text-white/85 leading-relaxed">
                    “{student.message}”
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-3">
                    Peran di Squad
                  </p>
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#5b8cff] to-[#8b5cf6] text-sm font-medium">
                    {student.role}
                  </span>
                  {/* <div className="mt-5">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-3">
                      Fun facts
                    </p>
                    <ul className="space-y-2.5 text-sm text-white/65 font-light">
                      {student.funFacts.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span className="text-[#8b5cf6] mt-0.5">✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-3">
                    Find {student.nickname}
                  </p>
                  {student && (
                    <div className="flex gap-2.5">
                      {[Instagram].map((Icon, i) => (
                        <a
                          key={i}
                          href={student.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 grid place-items-center rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#8b5cf6]/60 hover:bg-[#8b5cf6]/10 transition-all"
                          aria-label="Instagram"
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-white/35 mt-3 font-light">
                    Follow ignya kk {student.name}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => onNav(STUDENTS[(student.id + 34) % 36])}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full border border-white/15 text-sm hover:bg-white/5 transition-colors"
                  >
                    <ArrowLeft size={15} /> Prev
                  </button>
                  <button
                    onClick={() => onNav(STUDENTS[student.id % 36])}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-[#04060d] text-sm font-semibold hover:bg-[#cfe3ff] transition-colors"
                  >
                    Next <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
