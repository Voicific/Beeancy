import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  backgroundImage?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: PageHeroProps) {
  const metaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (metaRef.current) {
      gsap.set(metaRef.current, { opacity: 0, y: 12 });
      tl.to(metaRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.1);
    }
    if (headingRef.current) {
      gsap.set(headingRef.current, { opacity: 0, y: 40 });
      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 1 }, 0.25);
    }
    if (subRef.current) {
      gsap.set(subRef.current, { opacity: 0, y: 20 });
      tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.55);
    }
  }, []);

  return (
    <section className="relative min-h-[45svh] md:min-h-[50svh] w-full flex flex-col justify-center overflow-hidden bg-bg">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/60 to-bg pointer-events-none" />
        </div>
      )}
      <div className="absolute inset-0 z-0 gradient-radial-glow pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20 w-full">
        <div ref={metaRef} className="eyebrow-tag mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
          {eyebrow}
        </div>
        <h1
          ref={headingRef}
          className="font-display tracking-[-0.04em] text-balance leading-[0.98] text-[clamp(2.5rem,7vw,5.5rem)] text-text max-w-5xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subRef}
            className="mt-6 max-w-2xl text-muted text-base md:text-lg leading-relaxed text-balance"
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
              >
                <span>{primaryCta.label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
