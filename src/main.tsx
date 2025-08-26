// src/lib/motion.ts

// Fade + slide-in for .reveal
export function mountReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");   // CSS we added in index.css
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll<HTMLElement>(".reveal").forEach(el => io.observe(el));
}

// Gentle 3D tilt for elements with [data-tilt]
export function mountTilt(maxAngle = 6) {
  if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const els = document.querySelectorAll<HTMLElement>("[data-tilt]");
  const clamp = (v:number, a:number) => Math.max(Math.min(v, a), -a);

  els.forEach(el => {
    el.classList.add("tilt");
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      const dx = (e.clientX - cx) / (r.width/2);
      const dy = (e.clientY - cy) / (r.height/2);
      const rx = clamp(-dy * maxAngle, maxAngle);
      const ry = clamp(dx * maxAngle, maxAngle);
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = "none"; });
  });
}
 { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
