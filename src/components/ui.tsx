import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-10 bg-gradient-to-r from-[#5b8cff] to-[#8b5cf6]" />
      <span className="text-[11px] tracking-[0.35em] uppercase text-[#9ec5ff]/90 font-medium">{children}</span>
    </div>
  );
}

export function SectionHead({ eyebrow, title, sub, align = "left" }: { eyebrow: string; title: ReactNode; sub?: string; align?: "left" | "center" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center mx-auto items-center flex flex-col" : ""} max-w-3xl`}>
      <Reveal>
        {centered ? (
          <div className="flex items-center gap-3 mb-5 justify-center">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#5b8cff]" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#9ec5ff]/90 font-medium">{eyebrow}</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#8b5cf6]" />
          </div>
        ) : (
          <Eyebrow>{eyebrow}</Eyebrow>
        )}
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-white/55 text-base md:text-lg leading-relaxed font-light">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
