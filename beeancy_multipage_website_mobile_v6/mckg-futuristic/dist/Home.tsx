import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import {
  Sparkles,
  Users,
  MessageSquare,
  TrendingUp,
  Bot,
  Globe2,
  Award,
  Shield,
  Code2,
  Instagram,
  Facebook,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

const FEATURED_SERVICES = [
  {
    icon: Bot,
    title: "AI Lead Generation",
    description:
      "Predictive pipelines that identify, qualify, and nurture prospects with always-on automation — built around your ideal customer profile.",
    href: "/services#ai-lead-generation",
  },
  {
    icon: MessageSquare,
    title: "Social Media & Content",
    description:
      "Always-on publishing, AI-assisted creative, and editorial direction across every channel that matters to your audience.",
    href: "/services#social-media-management",
  },
  {
    icon: Sparkles,
    title: "Voice AI Support",
    description:
      "24/7 conversational agents that qualify, support, and convert across web, phone, and social — in your brand voice.",
    href: "/services#voice-ai-support-agent",
  },
  {
    icon: TrendingUp,
    title: "Paid Ads (Google & Facebook)",
    description:
      "Cross-platform Google, Meta, and LinkedIn campaigns optimised for ROAS with full-funnel attribution and creative testing.",
    href: "/services#paid-ads",
  },
  {
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Modern, responsive websites engineered for performance, SEO, and conversion — built to look premium and load instantly.",
    href: "/services#web-design",
  },
];

const PROJECTS = [
  {
    title: "AI Lead Generation System",
    category: "AI Marketing",
    year: "2026",
    image: "/case_study_dashboard_5.png",
  },
  {
    title: "E-commerce Social Campaign",
    category: "Social Media",
    year: "2026",
    image: "/service_social_media_7.jpg",
  },
  {
    title: "TravelIQ Voice AI Launch",
    category: "Travel & Voice Tech",
    year: "2026",
    image: "/case_study_traveliq_voice_ai_v2.png",
  },
  {
    title: "Travel Agency Growth Program",
    category: "Travel & Hospitality",
    year: "2026",
    image: "/case_study_travel_agency.png",
  },
];

function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow-tag mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
            Client voice
          </div>
          <blockquote className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-text text-balance">
            <span className="font-serif italic text-muted">"</span>Their AI lead
            generation system is a game-changer. We generated 250% more qualified
            leads while reducing our costs by 65%.
            <span className="font-serif italic text-muted">"</span>
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-beeancy-blue to-beeancy-gold flex items-center justify-center text-bg font-display text-lg">
              GM
            </div>
            <div>
              <div className="text-text font-medium">Growth Marketing Lead</div>
              <div className="text-muted text-small">
                D2C e-commerce brand, 8-figure revenue
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-6 md:mb-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              What we do
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Marketing systems that{" "}
              <span className="font-serif italic text-muted">learn</span> and{" "}
              <span className="font-serif italic text-muted">scale</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <p className="text-muted text-base leading-relaxed mb-4">
              Beeancy is a full-service AI marketing partner. We combine
              data-driven strategy, premium creative, and proprietary automation
              to move your audience from awareness to advocacy — with the numbers
              to prove it.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-small text-text hover:text-gradient-accent transition-colors"
            >
              <span>Explore all services</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6">
          {FEATURED_SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isLastOdd = i === FEATURED_SERVICES.length - 1 && FEATURED_SERVICES.length % 2 === 1;
            return (
              <motion.div
                key={s.title}
                className={isLastOdd ? "md:col-span-6" : "md:col-span-3"}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  to={s.href}
                  className="bento-card group block p-7 md:p-8 h-full"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue group-hover:border-beeancy-blue/60 transition-colors">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-text leading-tight mb-3 group-hover:text-gradient-accent transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-muted text-small leading-relaxed max-w-md">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-small text-text group-hover:text-gradient-accent transition-colors">
                    <span>Learn more</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % PROJECTS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const goPrev = () => setActive((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const goNext = () => setActive((i) => (i + 1) % PROJECTS.length);

  const activeProject = PROJECTS[active];

  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-6 md:mb-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
              Selected works
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Real campaigns.{" "}
              <span className="font-serif italic text-muted">Measurable</span>{" "}
              outcomes.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <p className="text-muted text-base leading-relaxed">
              A focused selection of AI-driven programs engineered for
              performance, automation, and brand lift across B2B and B2C clients.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Featured card */}
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-8"
            >
              <div className="bento-card group overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface via-bg to-surface" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-text/80">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
                      {activeProject.category}
                    </span>
                    <span>{activeProject.year}</span>
                  </div>
                </div>
                <div className="p-6 md:p-7 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-text leading-tight mb-2">
                      {activeProject.title}
                    </h3>
                    <div className="text-small text-muted">
                      Full case study available on request
                    </div>
                  </div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted pt-1">
                    {String(active + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="col-span-12 md:col-span-4 flex md:flex-col gap-3 md:gap-4">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${p.title}`}
                  className={`group relative w-full text-left rounded-xl overflow-hidden border transition-all duration-300 ${
                    i === active
                      ? "border-beeancy-blue/60 ring-1 ring-beeancy-blue/30"
                      : "border-stroke hover:border-beeancy-blue/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex md:flex-row flex-row items-center gap-3 p-2.5 bg-surface">
                    <div className="relative w-20 h-14 md:w-24 md:h-16 shrink-0 overflow-hidden rounded-md">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg to-surface" />
                    </div>
                    <div className="min-w-0 flex-1 pr-1">
                      <div className="text-[9px] tracking-[0.2em] uppercase text-muted mb-1">
                        {p.category}
                      </div>
                      <div className="font-display text-sm text-text leading-tight line-clamp-2">
                        {p.title}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous case study"
                className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-beeancy-blue/60 transition-colors"
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next case study"
                className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-beeancy-blue/60 transition-colors"
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-beeancy-blue"
                      : "w-1.5 bg-stroke hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social() {
  const channels = [
    {
      name: "Instagram",
      handle: "@beeancy_ai",
      href: "https://www.instagram.com/beeancy_ai",
      icon: Instagram,
      description: "Daily AI marketing insights, behind-the-scenes, and case study highlights.",
    },
    {
      name: "Facebook",
      handle: "Beeancy AI",
      href: "https://www.facebook.com/profile.php?id=61566922267747",
      icon: Facebook,
      description: "Long-form updates, campaign launches, and industry commentary.",
    },
    {
      name: "YouTube",
      handle: "@BeeancyAIMarketing",
      href: "https://www.youtube.com/@BeeancyAIMarketing",
      icon: Youtube,
      description: "Deep dives, walkthroughs, and conversations on AI-driven growth.",
    },
  ];
  return (
    <section className="relative bg-bg py-14 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-8 md:mb-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              Follow us
            </div>
            <h2 className="font-display text-display text-text text-balance">
              See the work in{" "}
              <span className="font-serif italic text-muted">real time</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <p className="text-muted text-base leading-relaxed">
              We share campaigns, experiments, and AI marketing insights across our social channels. Pick a platform and follow along.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bento-card group p-7 md:p-8 flex flex-col h-full"
                aria-label={`Follow Beeancy on ${c.name}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue group-hover:border-beeancy-blue/60 transition-colors">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-muted group-hover:text-beeancy-blue transition-colors">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                  {c.name}
                </div>
                <div className="font-display text-2xl text-text mb-3">
                  {c.handle}
                </div>
                <p className="text-muted text-small leading-relaxed">
                  {c.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke overflow-hidden">
      <div className="absolute inset-0 gradient-radial-glow pointer-events-none" />
      <div className="max-w-[1100px] mx-auto relative z-10 text-center">
        <div className="eyebrow-tag mx-auto mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
          Ready to grow?
        </div>
        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-8">
          Ready to grow with{" "}
          <span className="font-serif italic text-gradient-accent">AI</span>?
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Tell us about your goals. We'll come back within 24 hours with a
          tailored plan, projected ROI, and a clear path to scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <span>Get in touch</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="mailto:hello@beeancy.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
          >
            <span>hello@beeancy.com</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.25em] uppercase text-muted">
          <span className="flex items-center gap-2">
            <Shield size={12} className="text-beeancy-blue" />
            UK/EU/US Compliant
          </span>
          <span className="w-6 h-px bg-stroke" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <Award size={12} className="text-beeancy-gold" />
            200+ Brands
          </span>
          <span className="w-6 h-px bg-stroke" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <Globe2 size={12} className="text-beeancy-blue" />
            15+ Countries
          </span>
          <span className="w-6 h-px bg-stroke" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <Users size={12} className="text-beeancy-gold" />
            30+ Years Combined
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Stats />
      <Testimonial />
      <CaseStudiesPreview />
      <Social />
      <FinalCTA />
    </>
  );
}
