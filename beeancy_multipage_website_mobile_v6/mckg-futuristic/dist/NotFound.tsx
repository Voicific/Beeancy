import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[90svh] w-full flex items-center justify-center overflow-hidden bg-bg">
      <div className="absolute inset-0 gradient-radial-glow pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12 text-center py-16 md:py-20"
      >
        <div className="eyebrow-tag mx-auto mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
          Error 404
        </div>
        <h1 className="font-display text-[clamp(3rem,9vw,7rem)] text-text leading-[0.95] tracking-[-0.04em] mb-6">
          Page not{" "}
          <span className="font-serif italic text-gradient-accent">found</span>.
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10">
          The page you're looking for has either moved or never existed. Let's
          get you back to something useful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span>Back to home</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
          >
            <span>Contact us</span>
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-stroke">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
            Or explore
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-small">
            <Link to="/about" className="text-text hover:text-gradient-accent transition-colors">
              About
            </Link>
            <span className="w-4 h-px bg-stroke" aria-hidden="true" />
            <Link to="/services" className="text-text hover:text-gradient-accent transition-colors">
              Services
            </Link>
            <span className="w-4 h-px bg-stroke" aria-hidden="true" />
            <Link to="/why-beeancy" className="text-text hover:text-gradient-accent transition-colors">
              Why Beeancy
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
