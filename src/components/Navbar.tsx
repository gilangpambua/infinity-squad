import { useEffect, useState } from "react";
import { Menu, X, View } from "lucide-react";

const LINKS = [
  { label: "IC", href: "#home" },
  { label: "Cerita Gak Penting", href: "#story" },
  { label: "Anggota Keluarga", href: "#squad" },
  { label: "Guru", href: "#teachers" },
  { label: "Kenangan IC", href: "#memories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "bg-[#04060d]/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 grid place-items-center text-white text-xl">
              <img
                src="/icw.png"
                alt="Infinity Squad"
                className="w-full h-full object-contain"
              />
            </span>
            <span className="leading-none">
              <span className="block text-[13px] font-semibold tracking-[0.28em]">
                INFINITY SQUAD
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-white/45 mt-1">
                SMAN 2 Toraja Utara 2020
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-[#5b8cff] after:to-[#8b5cf6] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/infinitysquadsmada"
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase font-medium px-5 py-2.5 rounded-full bg-white text-[#04060d] hover:bg-[#9ec5ff] transition-colors"
            >
              <View size={14} /> Instagram
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[75] lg:hidden transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#04060d]/95 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-center px-10 gap-2">
          <p className="text-[11px] tracking-[0.4em] text-[#9ec5ff]/70 uppercase mb-6">
            Navigate the archive
          </p>
          {[...LINKS, { label: "Explore the Squad", href: "#squad" }].map(
            (l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-5xl py-2 text-white/90 hover:text-white transition-all duration-500 hover:translate-x-2 hover:italic ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
              >
                <span className="text-sm align-super mr-3 text-[#8b5cf6] font-sans">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ),
          )}
          <p className="mt-10 text-white/35 text-sm font-light">
            36 Stories. One Squad. Forever.
          </p>
        </div>
      </div>
    </>
  );
}
