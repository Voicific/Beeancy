import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Instagram, Facebook, Youtube } from "lucide-react";

const REPEAT = "AI MARKETING AGENCY • ".repeat(8);

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/beeancy_ai",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61566922267747",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BeeancyAIMarketing",
    icon: Youtube,
  },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Beeancy", to: "/why-beeancy" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const TOP_SERVICES = [
  { label: "AI Lead Generation", to: "/services#ai-lead-generation" },
  { label: "Social Media Management", to: "/services#social-media-management" },
  { label: "Voice AI Support Agent", to: "/services#voice-ai-support-agent" },
  { label: "Paid Ads (Google & Facebook)", to: "/services#paid-ads" },
  { label: "Web Design & Development", to: "/services#web-design" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export default function Footer() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer className="relative bg-bg border-t border-stroke pt-12 md:pt-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-10 pb-10">
          {/* Brand column */}
          <div className="col-span-12 md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Beeancy home">
              <img
                src="/beeancy_logo_v6.png"
                alt="Beeancy"
                width="36"
                height="36"
                className="w-9 h-9 rounded-md object-contain"
              />
              <span className="font-display text-xl text-text">Beeancy</span>
            </Link>
            <p className="text-muted text-base leading-relaxed max-w-sm mb-4">
              A premier AI-powered digital marketing agency transforming brands
              across 15+ countries. We blend creativity with cutting-edge AI
              technology to deliver measurable, scalable growth.
            </p>
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              <span className="avail-dot" />
              <span>Available for new projects</span>
            </div>

            {/* Social media */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Beeancy on ${s.name}`}
                    className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-beeancy-blue/60 transition-colors"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-6 md:col-span-2">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              Quick Links
            </div>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-small text-text hover:text-gradient-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-6 md:col-span-2">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              Services
            </div>
            <ul className="flex flex-col gap-3">
              {TOP_SERVICES.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-small text-text hover:text-gradient-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              Legal
            </div>
            <ul className="flex flex-col gap-3 mb-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-small text-text hover:text-gradient-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
              Contact
            </div>
            <ul className="flex flex-col gap-2 text-small">
              <li>
                <a
                  href="mailto:hello@beeancy.com"
                  className="text-text hover:text-gradient-accent transition-colors"
                >
                  hello@beeancy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+442039431213"
                  className="text-text hover:text-gradient-accent transition-colors"
                >
                  020 3943 1213
                </a>
              </li>
              <li className="text-muted">
                London, UK
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-4 border-y border-stroke py-6 md:py-8 overflow-hidden">
        <div ref={trackRef} className="flex whitespace-nowrap">
          <span className="font-display text-[clamp(3rem,8vw,7rem)] font-light tracking-[-0.04em] text-text/90 pr-8">
            {REPEAT}
          </span>
          <span className="font-display text-[clamp(3rem,8vw,7rem)] font-light tracking-[-0.04em] text-text/90 pr-8">
            {REPEAT}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-muted">
          <div>
            © {new Date().getFullYear()} Beeancy AI Marketing — All rights reserved
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-text transition-colors"
            >
              Privacy
            </Link>
            <span className="w-4 h-px bg-stroke" aria-hidden="true" />
            <Link
              to="/terms"
              className="hover:text-text transition-colors"
            >
              Terms
            </Link>
            <span className="w-4 h-px bg-stroke" aria-hidden="true" />
            <span>v2.0 / 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
