import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { STUDENTS, type Student } from "../data/squad";
import { Reveal, SectionHead } from "./ui";
import Avatar from "./Avatar";

const FILTERS = [
  "All",
  "Badut Kelas",
  "Sad Boy",
  "Masyarakat",
  "Ketua Kebun",
  "Orang Havefun",
];

function matches(s: Student, f: string) {
  if (f === "All") return true;
  const r = s.role.toLowerCase();
  if (f === "Badut Kelas")
    return (
      r.includes("nek") ||
      r.includes("ambe'") ||
      r.includes("tidak") ||
      r.includes("tukang") ||
      r.includes("idaman")
    );
  if (f === "Sad Boy") return r.includes("tidak");
  if (f === "Masyarakat") return r.includes("masyarakat");
  if (f === "Ketua Kebun")
    return (
      r.includes("ibu") ||
      r.includes("ambe'") ||
      r.includes("tukang") ||
      r.includes("tidak") ||
      r.includes("lucifer") ||
      r.includes("guru")
    );
  if (f === "Orang Havefun")
    return (
      r.includes("ketua") ||
      r.includes("wakil") ||
      r.includes("sekretaris") ||
      r.includes("bendahara")
    );
}

export default function Squad({
  onSelect,
}: {
  onSelect: (s: Student) => void;
}) {
  const [q, setQ] = useState("");
  const [f, setF] = useState("All");

  const list = useMemo(() => {
    return STUDENTS.filter((s) => matches(s, f)).filter((s) =>
      `${s.name} ${s.nickname} ${s.role}`
        .toLowerCase()
        .includes(q.toLowerCase()),
    );
  }, [q, f]);

  return (
    <section id="squad" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHead
            eyebrow="Chapter 03 — The Squad"
            title={
              <>
                The{" "}
                <span className="italic font-display font-normal text-[#9ec5ff]">
                  IC Squad
                </span>
              </>
            }
            sub="“36 orang. Satu cerita tak terlupakan.” —"
          />
          <Reveal delay={0.2} className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <label className="flex items-center gap-2.5 px-4 py-3 rounded-full border border-white/12 bg-white/[0.04] focus-within:border-[#8b5cf6]/60 transition-colors min-w-[240px]">
                <Search size={15} className="text-white/40 shrink-0" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Cari nama, nickname, role…"
                  className="bg-transparent outline-none text-sm w-full placeholder:text-white/30"
                />
              </label>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((x) => (
              <button
                key={x}
                onClick={() => setF(x)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all ${
                  f === x
                    ? "bg-white text-[#04060d] border-white font-semibold"
                    : "border-white/12 text-white/55 hover:border-white/35 hover:text-white"
                }`}
              >
                {x}
              </button>
            ))}
            <span className="ml-auto text-xs text-white/35 self-center tracking-widest">
              {list.length} / 36 Bintang
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 items-stretch">
          {list.map((s, i) => (
            <Reveal
              key={s.id}
              delay={Math.min((i % 1) * 0.05, 0.4)}
              y={20}
              className="h-full"
            >
              <button
                onClick={() => onSelect(s)}
                className="group w-full h-full flex flex-col text-left rounded-2xl overflow-hidden border border-white/10 bg-white/[0.025] card-lift img-zoom focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]"
              >
                <div className="relative shrink-0">
                  <Avatar student={s} className="w-full aspect-[4/5]" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] px-2.5 py-1 rounded-full bg-black/55 backdrop-blur border border-white/15 text-white/80">
                    {s.num}
                  </span>
                  <span className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-full bg-black/55 backdrop-blur border border-white/15 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="font-medium text-[15px] leading-tight truncate">
                    {s.name}
                  </p>
                  <p className="font-display italic text-[#9ec5ff]/85 text-sm mt-0.5 truncate">
                    “{s.nickname}”
                  </p>
                  <p className="text-xs text-white/45 font-light mt-2 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    “{s.quote}”
                  </p>
                  <p className="mt-auto pt-3 text-[10px] tracking-[0.2em] uppercase text-white/35 group-hover:text-[#c4b5fd] transition-colors truncate">
                    {s.role} →
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-12 text-center text-white/40 font-display italic text-xl">
            Doi gak ada? — cari yang lain aja.
          </p>
        )}
      </div>
    </section>
  );
}
