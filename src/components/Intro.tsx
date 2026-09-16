import { Reveal } from "./ui";
import Starfield from "./Starfield";

export default function Intro() {
  return (
    <section id="intro" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Starfield
          density={0.4}
          interactive={false}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gradient-to-r from-[#5b8cff] to-[#8b5cf6]" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#9ec5ff]/90">
                Chapter 01 — Pada Zaman Dahulu
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.0] tracking-tight">
              Lebih dari
              <br />
              Sekedar{" "}
              <span className="italic bg-gradient-to-r from-[#9ec5ff] to-[#c4b5fd] bg-clip-text text-transparent">
                Kelas
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 font-display italic text-xl md:text-2xl text-white/75 leading-relaxed max-w-xl">
              “Tiga tahun. Begitu banyak momen. 36 kepribadian yang berbeda.
              Entah bagaimana, kami menjadi satu kisah.”
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-xl text-sm leading-relaxed text-white/50 font-light">
              <p>
                Kami tiba sebagai orang asing dengan seragam baru sambil
                cengar-cengir kebingungan cari tempat duduk dimana.
              </p>
              <p>
                Di antara banyaknya pulpen yang hilang dipinjam, jam istirahat
                makan siang yang riuh, dan panggilan belajar pukul 14.00 dini
                hari, orbit-orbit itupun akhirnya bersatu. Arsip ini adalah
                bukti bahwa hal itu benar-benar terjadi. ANJAYYY
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 relative">
          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10 md:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#8b5cf6]/20 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#5b8cff]/20 blur-[80px]" />
              <div className="relative text-center">
                <div className="font-display text-[9rem] md:text-[11rem] leading-none bg-gradient-to-b from-white via-[#cfe3ff] to-[#5b8cff]/40 bg-clip-text text-transparent text-glow">
                  36
                </div>
                <div className="text-[11px] tracking-[0.45em] uppercase text-white/60 mt-2">
                  siswa tara laku
                </div>
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <p className="font-display italic text-xl text-white/70">
                  satu petualangan tak terlupakan
                </p>
                <div className="mt-6 flex justify-center gap-1.5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#9ec5ff]"
                      style={{ opacity: 0.25 + (i % 4) * 0.22 }}
                    />
                  ))}
                  <span className="text-[10px] text-white/40 ml-2 tracking-widest"></span>
                </div>
              </div>
            </div>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/50 font-light">
                “Fun fact : Web ini dibuat karena kegabutan di Kontrakan
                Beriman, Jogja. Namun karena developernya pamalas jadi proyek
                ini mangkrak selama 2 tahun. Kemudian akhirnya ada niat
                terkumpul selama 2 tahun itu dan website inipun akhirnya jadi
                setelah tidak tersentuh selama 63.072.000 detik.”
              </p>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
