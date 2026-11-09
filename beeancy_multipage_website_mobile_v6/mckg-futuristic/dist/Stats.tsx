import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  {
    value: 500,
    suffix: "%",
    label: "Average ROI",
    description: "Across AI-powered campaigns delivered in the last 24 months.",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Leads Generated",
    description: "Qualified, sales-ready leads produced through our systems.",
  },
  {
    value: 85,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term partnerships built on measurable, sustained growth.",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // ease out expo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="counter-num">
      {value.toLocaleString()}
      <span className="text-gradient-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-6 md:mb-8">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
              By the numbers
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Performance is the{" "}
              <span className="font-serif italic text-muted">only</span> metric
              that matters.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="stat-block pt-8"
            >
              <div className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em] text-text font-light">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
                <span className="text-small tracking-[0.15em] uppercase text-text">
                  {s.label}
                </span>
              </div>
              <p className="mt-3 text-muted text-small leading-relaxed max-w-xs">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}