export function mountReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

  document.querySelectorAll<HTMLElement>(".reveal").forEach(el => io.observe(el));
}

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