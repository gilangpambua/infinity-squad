import { useMemo, useState } from "react";
import { MousePointerClick } from "lucide-react";
import { STUDENTS, type Student } from "../data/squad";
import { Reveal } from "./ui";
import Starfield from "./Starfield";

interface Pt {
  x: number;
  y: number;
}

export default function Constellation({
  onSelect,
}: {
  onSelect: (s: Student) => void;
}) {
  const [hover, setHover] = useState<number | null>(null);

  const pts: Pt[] = useMemo(() => {
    return STUDENTS.map((_, i) => {
      const t = (i / STUDENTS.length) * Math.PI * 2;
      const sin = Math.sin(t),
        cos = Math.cos(t);
      const denom = 1 + sin * sin;
      const jitter = (((i * 53) % 13) - 6) * 1.6;
      return {
        x: 400 + (280 * cos) / denom,
        y: 200 + (125 * sin * cos) / denom + jitter * 0.5,
      };
    });
  }, []);

  const pathD = useMemo(() => {
    return (
      pts
        .map(
          (p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`,
        )
        .join(" ") + " Z"
    );
  }, [pts]);

  const hovered = hover !== null ? STUDENTS[hover] : null;

  return (
    <section
      id="constellation"
      className="relative py-28 md:py-36 overflow-hidden border-y border-white/[0.07] bg-[#050814]"
    >
      <div className="absolute inset-0 opacity-70">
        <Starfield
          density={0.5}
          interactive={false}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_55%,rgba(139,92,246,0.14),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#9ec5ff]/80">
            Chapter 07 — Satu Rasi Bintang
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-4xl md:text-6xl mt-4">
            Satu{" "}
            <span className="italic text-[#9ec5ff]">
              Rasi Bintang Yang Baru
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 font-display italic text-xl text-white/60">
            “Kami 36 Bintang”
          </p>
          <p className="mt-2 text-white/45 font-light max-w-xl mx-auto">
            …sampai akhirnya kami menjadi satu rasi bintang. Setiap bintang di
            bawah ini adalah anggota kebun IC — tap buat reveal sang bintang.
          </p>
        </Reveal>

        {/* interactive sky */}
        <Reveal delay={0.2} className="mt-10">
          <div className="relative rounded-3xl border border-white/10 bg-[#04060d]/60 backdrop-blur overflow-hidden">
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-white/[0.07] text-[11px] tracking-[0.25em] uppercase text-white/40">
              <span className="flex items-center gap-2">
                <MousePointerClick size={13} className="text-[#9ec5ff]" />{" "}
                Infinity Squad
              </span>
              <span className="hidden sm:block">
                36 Bintang · ∞ connections
              </span>
            </div>

            <div className="relative">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-[380px] md:h-[480px]"
                role="img"
                aria-label="Infinity Squad constellation — 36 stars"
              >
                <defs>
                  <linearGradient id="const-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#5b8cff" stopOpacity="0.55" />
                    <stop offset="0.5" stopColor="#c4b5fd" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.55" />
                  </linearGradient>
                  <radialGradient id="star-glow">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#9ec5ff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9ec5ff" stopOpacity="0" />
                  </radialGradient>
                  <filter
                    id="soft"
                    x="-80%"
                    y="-80%"
                    width="260%"
                    height="260%"
                  >
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* infinity path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#const-line)"
                  strokeWidth="1"
                  opacity="0.5"
                  strokeDasharray="3 5"
                />
                {/* center glow */}
                <ellipse
                  cx="400"
                  cy="200"
                  rx="90"
                  ry="55"
                  fill="url(#star-glow)"
                  opacity="0.25"
                />

                {pts.map((p, i) => {
                  const s = STUDENTS[i];
                  const isH = hover === i;
                  const isNeighbor =
                    hover !== null &&
                    (i === (hover + 1) % 36 || i === (hover + 35) % 36);
                  const dim = hover !== null && !isH && !isNeighbor;
                  return (
                    <g
                      key={s.id}
                      opacity={dim ? 0.35 : 1}
                      style={{ transition: "opacity 0.4s" }}
                    >
                      {isH && (
                        <>
                          <line
                            x1={p.x}
                            y1={p.y}
                            x2={pts[(hover + 1) % 36].x}
                            y2={pts[(hover + 1) % 36].y}
                            stroke="#c4b5fd"
                            strokeWidth="1.6"
                            opacity="0.95"
                          />
                          <line
                            x1={p.x}
                            y1={p.y}
                            x2={pts[(hover + 35) % 36].x}
                            y2={pts[(hover + 35) % 36].y}
                            stroke="#5b8cff"
                            strokeWidth="1.6"
                            opacity="0.95"
                          />
                        </>
                      )}
                      {/* halo */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isH ? 20 : 11}
                        fill="url(#star-glow)"
                        opacity={isH ? 0.85 : 0.4}
                        style={{ transition: "all 0.4s" }}
                      />
                      {/* hit area */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={22}
                        fill="transparent"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        onFocus={() => setHover(i)}
                        onBlur={() => setHover(null)}
                        onClick={() => onSelect(s)}
                      />
                      {/* star core */}
                      <g
                        onMouseEnter={() => setHover(i)}
                        onClick={() => onSelect(s)}
                        style={{ cursor: "pointer" }}
                      >
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={isH ? 6.5 : 3.6 + ((i * 29) % 3) * 0.7}
                          fill={isH ? "#ffffff" : "#e8efff"}
                          filter="url(#soft)"
                          style={{
                            transition: "all 0.35s",
                            animation: `tw 3s ease-in-out ${((i * 0.37) % 3).toFixed(2)}s infinite`,
                            transformOrigin: `${p.x}px ${p.y}px`,
                          }}
                        />
                        {/* number for brighter stars */}
                        {(isH || i % 6 === 0) && (
                          <text
                            x={p.x}
                            y={p.y - (isH ? 16 : 11)}
                            textAnchor="middle"
                            fill={isH ? "#fff" : "rgba(255,255,255,0.55)"}
                            fontSize={isH ? 13 : 9}
                            fontFamily="Space Grotesk, sans-serif"
                            letterSpacing="1"
                            style={{
                              paintOrder: "stroke",
                              stroke: "#04060d",
                              strokeWidth: 3,
                            }}
                          >
                            {isH ? `${s.num} · ${s.nickname}` : s.num}
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </svg>
              <style>{`@keyframes tw { 0%,100% { opacity: 0.55; } 50% { opacity: 1; } }`}</style>

              {/* hover readout */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto pointer-events-none">
                <div
                  className={`glass rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
                  {hovered && (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#9ec5ff] shadow-[0_0_12px_#9ec5ff] animate-pulse" />
                      <span className="text-sm whitespace-nowrap">
                        <span className="text-white/50 mr-2">
                          {hovered.num}
                        </span>
                        <span className="font-medium">{hovered.name}</span>
                        <span className="font-display italic text-[#9ec5ff] ml-2">
                          “{hovered.nickname}”
                        </span>
                      </span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 hidden sm:inline">
                        tap 4 open →
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* touch-friendly chips */}
            <div className="px-5 md:px-7 py-5 border-t border-white/[0.07]">
              <div className="flex gap-2 overflow-x-auto no-scrollbar mask-fade-x pb-1">
                {STUDENTS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => onSelect(s)}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className={`shrink-0 text-xs px-3.5 py-2 rounded-full border transition-all ${
                      hover === i
                        ? "bg-white text-[#04060d] border-white font-semibold"
                        : "border-white/12 text-white/55 hover:border-[#8b5cf6]/60 hover:text-white"
                    }`}
                  >
                    {s.num} · {s.nickname}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
