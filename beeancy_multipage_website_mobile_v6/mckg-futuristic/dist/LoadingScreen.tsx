import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADING_WORDS = [
  "AI MARKETING",
  "GROWTH",
  "STRATEGY",
  "INNOVATION",
  "BEEANCY",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [counter, setCounter] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const TOTAL_MS = 2700;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / TOTAL_MS);
      const value = Math.floor(progress * 100);
      setCounter(value);

      // Word rotation
      const wordStep = Math.floor(progress * LOADING_WORDS.length);
      setWordIndex(Math.min(LOADING_WORDS.length - 1, wordStep));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCounter(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 250);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center px-6"
        >
          {/* Top bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-muted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue animate-pulse" />
              <span>Beeancy / Loading</span>
            </div>
            <span>v2 — 2026</span>
          </div>

          {/* Big counter */}
          <div className="flex items-start">
            <span className="counter-num text-[clamp(7rem,22vw,16rem)] font-light leading-[0.85] text-text tracking-[-0.06em]">
              {String(counter).padStart(3, "0")}
            </span>
          </div>

          {/* Rotating word */}
          <div className="h-7 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-small tracking-[0.3em] uppercase text-muted"
              >
                {LOADING_WORDS[wordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[min(560px,80vw)]">
            <div className="h-px w-full bg-stroke relative overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${counter}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="absolute top-0 left-0 h-full progress-bar"
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-[10px] tracking-[0.25em] uppercase text-muted">
              <span>Initializing</span>
              <span className="counter-num text-text">{counter}%</span>
              <span>Ready</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}