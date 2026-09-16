import { useState, type CSSProperties } from "react";
import type { Student } from "../data/squad";

export default function Avatar({
  student,
  className = "",
  big = false,
  modal = false,
}: {
  student: Student;
  className?: string;
  big?: boolean;
  modal?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const h = student.hue;
  const isRemote = student.photo.startsWith("http");

  const photoSrc = isRemote
    ? student.photo
    : modal
      ? `/${student.photo.replace(".jpg", "-modal.jpg")}`
      : `/${student.photo}`;
  // const isCustom01 = student.id === 1;
  // const custom01Style: CSSProperties | undefined = !isCustom01
  //   ? undefined
  //   : big
  //     ? { objectPosition: "50% 90%", scale: "1.25", transformOrigin: "50% 45%" }
  //     : { objectPosition: "50% 50%", scale: "2.4", transformOrigin: "51% 44%" };
  return (
    <div
      className={`relative overflow-hidden bg-[#0a1020] ${className}`}
      style={{
        background: `radial-gradient(circle at 28% 18%, hsla(${h},75%,62%,0.5), transparent 58%), radial-gradient(circle at 78% 82%, hsla(${(h + 60) % 360},70%,55%,0.38), transparent 55%), radial-gradient(circle at 60% 40%, hsla(${h},60%,40%,0.25), transparent 60%), linear-gradient(165deg, #101a33 0%, #070b18 70%)`,
      }}
    >
      {/* star dust */}
      {[
        [12, 22, 2.5],
        [78, 14, 1.8],
        [64, 34, 1.4],
        [22, 64, 1.6],
        [86, 58, 2.2],
        [42, 82, 1.5],
        [8, 44, 1.3],
        [55, 70, 1.8],
      ].map(([x, y, s], i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: s,
            height: s,
            opacity: 0.35 + ((i * 37) % 40) / 100,
            boxShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
        />
      ))}
      {/* constellation lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 130"
        preserveAspectRatio="none"
      >
        <path
          d="M12 28 L42 52 L68 30 L88 62 L55 92 L22 70 Z"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
        />
      </svg>
      {/* monogram */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`font-display leading-none bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent ${big ? "text-8xl md:text-9xl" : "text-6xl"}`}
          style={{ textShadow: "0 0 40px rgba(158,197,255,0.25)" }}
        >
          {student.num}
        </span>
        <span
          className={`font-display italic text-[#9ec5ff]/90 mt-1 ${big ? "text-2xl" : "text-lg"}`}
        >
          {student.nickname}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#04060d]/55 via-transparent to-transparent pointer-events-none" />
      {/* real photo overlays when provided */}
      <img
        src={photoSrc}
        alt={student.name}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
        // style={custom01Style}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
