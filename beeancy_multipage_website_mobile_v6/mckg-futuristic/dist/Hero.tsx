import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Hls from "hls.js";

const ROLES = ["AI Marketing", "Growth", "Strategy", "Innovation"];
const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // HLS video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          /* autoplay may be blocked */
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
      video.play().catch(() => {});
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  // GSAP entrance animations
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
    <section
      id="hero"
      className="relative min-h-[80svh] md:min-h-[85svh] w-full flex flex-col justify-between overflow-hidden bg-bg"
    >
      {/* HLS Video background */}
      <div className="absolute inset-0 z-0 hero-video-mask">
        {/* Static poster fallback (always rendered behind the video) */}
        <img
          src="/futuristic_background_6.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
        />
        {/* Gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/60 pointer-events-none" />
      </div>

      {/* Soft radial glow */}
      <div className="absolute inset-0 z-0 gradient-radial-glow pointer-events-none" />

      {/* Top eyebrow row */}
      <div className="relative z-10 pt-16 md:pt-20 px-6 md:px-12">
        <div ref={metaRef} className="flex items-center justify-between max-w-[1400px] mx-auto">
          <div className="eyebrow-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
            AI Solutions 2026
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted">
            <span>Portfolio</span>
            <span className="w-6 h-px bg-stroke" />
            <span>Agency</span>
          </div>
        </div>
      </div>

      {/* Center heading */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto w-full">
          <h1
            ref={headingRef}
            className="font-display tracking-[-0.04em] text-balance leading-[0.95]"
          >
            <span className="block text-[clamp(3rem,9vw,8rem)] font-light text-text">
              Beeancy
            </span>
            <span className="flex items-baseline gap-4 flex-wrap text-[clamp(3rem,9vw,8rem)] font-light text-muted">
              <span className="font-serif italic font-normal">drives</span>
              <span className="relative inline-block min-w-[280px] md:min-w-[420px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 text-gradient-accent font-serif italic font-normal whitespace-nowrap"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible whitespace-nowrap font-serif italic font-normal">
                  Innovation
                </span>
              </span>
            </span>
            <span className="block text-[clamp(3rem,9vw,8rem)] font-light text-text">
              at scale.
            </span>
          </h1>

          <p
            ref={subRef}
            className="mt-6 md:mt-8 max-w-xl text-muted text-base md:text-lg leading-relaxed text-balance"
          >
            Delivering measurable results through AI-powered marketing strategies
            that transform brands and drive business growth.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 px-6 md:px-12 pb-6 md:pb-8">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between gap-8 flex-wrap">
          <div className="flex items-center gap-3 text-muted">
            <span className="scroll-line" aria-hidden="true" />
            <span className="text-[10px] tracking-[0.3em] uppercase">
              Scroll
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-muted">
            <span>00 — Hero</span>
            <span className="w-8 h-px bg-stroke" />
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}