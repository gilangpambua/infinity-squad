import { ArrowUp, Heart } from "lucide-react";
import { Reveal } from "./ui";
import Starfield from "./Starfield";

export default function Finale() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center overflow-hidden py-28 px-5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(139,92,246,0.18),transparent),radial-gradient(ellipse_50%_35%_at_50%_30%,rgba(91,140,255,0.14),transparent)]" />
        <Starfield density={1.2} className="absolute inset-0 w-full h-full" />
        {/* giant infinity watermark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-light text-[52vw] md:text-[30rem] leading-none text-white/[0.03] select-none pointer-events-none drift-slow">
          ∞
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04060d] to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[11px] tracking-[0.45em] uppercase text-white/40">
            Final Dance?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-7xl md:text-9xl mt-6 leading-none">
            THE END<span className="text-[#8b5cf6] text-glow">?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-xl md:text-2xl text-white/60 font-light">
            Mungkin kelas sudah berakhir yah gess.
          </p>
          <p className="mt-2 font-display italic text-2xl md:text-4xl text-white/90">
            Tapi moment dan cerita itu tidak akan pernah berakhir
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="my-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-[#5b8cff]/70" />
            <span className="text-3xl text-[#9ec5ff] text-glow-soft float-y inline-block">
              ∞
            </span>
            <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-[#8b5cf6]/70" />
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="text-sm md:text-base tracking-[0.45em] uppercase font-semibold">
            Infinity Squad
          </p>
          <p className="mt-3 text-xs md:text-sm tracking-[0.3em] uppercase text-white/45">
            36 Stories · One Squad · Forever
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#squad"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#04060d] text-sm tracking-[0.12em] uppercase font-semibold hover:bg-[#cfe3ff] transition-all hover:shadow-[0_0_50px_rgba(158,197,255,0.5)]"
            >
              Kunjungi Sang Bintang
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-sm tracking-[0.12em] uppercase text-white/80 hover:border-white/50 hover:bg-white/5 transition-all"
            >
              <ArrowUp size={15} /> Kembali ke cerita
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    ["IC", "#home"],
    ["Cerita gak penting", "#story"],
    ["Anggota Keluarga", "#squad"],
    ["Guru", "#teachers"],
    ["Kenangan IC", "#memories"],
  ];
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#03040a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="flex items-center gap-2.5">
              <span className="w-8 h-8 grid place-items-center text-lg">
                <img
                  src="/icw.png"
                  alt="Infinity Squad"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="text-sm font-semibold tracking-[0.28em]">
                INFINITY SQUAD
              </span>
            </p>
            <p className="mt-3 font-display italic text-white/45 flex items-center gap-2">
              Made from memories that refuse to fade.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© Infinity Squad — SMA Negeri 2 Toraja Utara</p>
          <p>© Gilang Pappa' Tanto Pambua - 2020</p>
          <p className="tracking-[0.25em] uppercase">
            36 stars · one constellation · ∞
          </p>
        </div>
      </div>
    </footer>
  );
}
