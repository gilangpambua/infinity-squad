import { motion } from "framer-motion";
import { Sparkles, Compass, GraduationCap, Quote } from "lucide-react";
import { Reveal, SectionHead } from "./ui";

const CHAPTERS = [
  {
    grade: "Kelas 10",
    year: "2017 — 2018",
    title: "Where It All Began",
    text: "Wajah-wajah baru, perkenalan yang canggung, nama-nama yang asing, dan awal dari sesuatu yang terduga akan menjadi kenangan tak terlupakan.",
    icon: Sparkles,
    photo: "/images/memory-classroom.jpg",
    moments: ["Edisi Cari Tedu'", "36 nama, hari pertama", "Cengar Cengir"],
    quote: "Awalnya tidak saling kenal, tapi lama-lama jadi sok kenal",
  },
  {
    grade: "Kelas 11",
    year: "2018 — 2019",
    title: "Where We Became A Squad",
    text: "Orang-orang yang tadinya asing pun menjadi teman, bahkan saudara. Dark jokes bermunculan di mana-mana, kenangan mulai menumpuk, dan ruang kelas mulai terasa seperti pasar pagi.",
    icon: Compass,
    photo: "/images/memory-trip.jpg",
    moments: [
      "The legendary IC Squad",
      "Debut Kelas Tersolid katanya",
      "Grup Kelas : 10k pesan",
    ],
    quote:
      "Moment dimana banyak bolosnya, kantin no 1, dan awal mula rapat kebun dimulai",
  },
  {
    grade: "Kelas 12",
    year: "2019 — 2020",
    title: "The Final Chapter",
    text: "Tahun terakhir. Hari terakhir. Foto kelas terakhir. Bab terakhir dari perjalanan SMA kita — namun kenangan ini takkan pernah berakhir.",
    icon: GraduationCap,
    photo: "/images/memory-graduation.jpg",
    moments: ["Last Day", "Final Chapter", "Babai IC"],
    quote: "Bingung mau kuliah dimana",
  },
];

export default function Journey() {
  return (
    <section id="story" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          eyebrow="Chapter 02 — Cerita Dongeng"
          title={
            <>
              Petualangan Mencari{" "}
              <span className="italic font-display font-normal text-[#9ec5ff]">
                Arti 5W+1H
              </span>
            </>
          }
          sub="“Every chapter brought us closer.” — three years, three versions of us. —"
          align="center"
        />

        <div className="relative mt-20">
          {/* spine */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5b8cff]/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {CHAPTERS.map((c, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={c.grade}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 pl-14 md:pl-0 items-center`}
                >
                  {/* node */}
                  <span className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 z-10">
                    <span className="relative grid place-items-center w-11 h-11 rounded-full bg-[#070b18] border border-[#5b8cff]/50 shadow-[0_0_24px_rgba(91,140,255,0.5)]">
                      <c.icon size={16} className="text-[#9ec5ff]" />
                      <motion.span
                        className="absolute inset-0 rounded-full border border-[#8b5cf6]/40"
                        animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </span>
                  </span>

                  <Reveal
                    className={`${left ? "md:order-1 md:text-right md:pr-4" : "md:order-2 md:pl-4"}`}
                  >
                    <p className="text-[11px] tracking-[0.35em] uppercase text-[#8b5cf6]">
                      {c.grade} · {c.year}
                    </p>
                    <h3 className="font-display text-3xl md:text-5xl mt-3">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-white/55 font-light leading-relaxed">
                      {c.text}
                    </p>
                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}
                    >
                      {c.moments.map((m) => (
                        <span
                          key={m}
                          className="text-xs px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.04] text-white/65"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <p
                      className={`mt-5 font-display italic text-[#9ec5ff]/85 ${left ? "md:ml-auto" : ""} max-w-md`}
                    >
                      <Quote
                        size={13}
                        className="inline mr-2 -mt-1 opacity-60"
                      />
                      {c.quote}
                    </p>
                  </Reveal>

                  <Reveal
                    delay={0.12}
                    className={`${left ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4 md:text-right"}`}
                  >
                    <div className="img-zoom group relative rounded-2xl overflow-hidden border border-white/10 card-lift">
                      <img
                        src={c.photo}
                        alt={c.title}
                        loading="lazy"
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04060d]/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <span className="font-display italic text-lg text-white/90">
                          {c.grade}
                        </span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60"></span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
