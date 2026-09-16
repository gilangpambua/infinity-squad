import { useEffect, useRef } from "react";

interface Star { x: number; y: number; r: number; vx: number; vy: number; tw: number; phase: number; }

export default function Starfield({ density = 1, interactive = true, className = "" }: { density?: number; interactive?: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor(((w * h) / 9000) * density);
      stars = Array.from({ length: Math.min(count, 220) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        tw: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const onMouse = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            const o = (1 - d / 130) * 0.22;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(91,140,255,${o})`);
            grad.addColorStop(1, `rgba(139,92,246,${o})`);
            ctx.strokeStyle = grad;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx; s.y += s.vy;
          if (s.x < -10) s.x = w + 10; if (s.x > w + 10) s.x = -10;
          if (s.y < -10) s.y = h + 10; if (s.y > h + 10) s.y = -10;
        }
        const twinkle = reduced ? 0.8 : 0.45 + 0.55 * Math.abs(Math.sin(t * s.tw + s.phase));
        // mouse glow
        let glow = 0;
        if (interactive) {
          const md = Math.hypot(s.x - mouse.x, s.y - mouse.y);
          if (md < 140) glow = (1 - md / 140) * 0.9;
        }
        const alpha = Math.min(1, twinkle + glow);
        const rad = s.r + glow * 1.6;
        // halo
        if (alpha > 0.55 || glow > 0) {
          const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, rad * 6);
          halo.addColorStop(0, `rgba(158,197,255,${0.35 * alpha})`);
          halo.addColorStop(1, "rgba(158,197,255,0)");
          ctx.fillStyle = halo;
          ctx.beginPath(); ctx.arc(s.x, s.y, rad * 6, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = `rgba(232,239,255,${alpha})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, rad, 0, Math.PI * 2); ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("pointermove", onMouse, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMouse);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density, interactive]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
