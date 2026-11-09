import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Sparkles,
  BarChart3,
  Award,
  Globe2,
  Users,
  Layers,
  Compass,
  LineChart,
  Cog,
  Gauge,
  Plane,
  ShoppingBag,
  Building2,
  Briefcase,
  Hotel,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";

const DIFFERENTIATORS = [
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    description:
      "Cutting-edge artificial intelligence built into every workflow — not bolted on as an afterthought.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "500% average ROI, 4.2x ROAS, 65% cost reduction. We don't hide behind vanity metrics.",
  },
  {
    icon: Award,
    title: "30+ Years Combined Experience",
    description:
      "A senior team across marketing, AI, design, and sales — operating as one cross-functional unit.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Operations across 15+ countries, serving 200+ brands. Local nuance, international scale.",
  },
  {
    icon: Users,
    title: "85% Client Retention",
    description:
      "Long-term partnerships built on consistent delivery and compounding returns.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    description:
      "Strategy, creative, content, paid, web, and AI automation — one partner, end to end.",
  },
];

const PROCESS = [
  {
    step: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We start with a deep audit of your brand, channels, audience, and unit economics. No assumptions, no generic playbooks.",
  },
  {
    step: "02",
    icon: LineChart,
    title: "Strategize",
    description:
      "A bespoke plan with clear KPIs, projected ROI, channel mix, and creative direction. You see the math before we move.",
  },
  {
    step: "03",
    icon: Cog,
    title: "Execute",
    description:
      "Our integrated team ships strategy, creative, content, paid media, and AI workflows — coordinated, fast, and accountable.",
  },
  {
    step: "04",
    icon: Gauge,
    title: "Optimize",
    description:
      "Continuous testing, AI-assisted insights, and weekly reporting. Performance compounds, never plateaus.",
  },
];

const INDUSTRIES = [
  {
    icon: Plane,
    title: "Travel & Travel Tech",
    description:
      "Performance marketing for OTAs, tour operators, and travel brands. From awareness to conversion.",
  },
  {
    icon: Plane,
    title: "Airlines",
    description:
      "Direct booking campaigns, loyalty growth, and brand campaigns for airline marketing teams.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Paid social, Google Shopping, lifecycle email, and conversion-rate optimisation for D2C brands.",
  },
  {
    icon: Building2,
    title: "B2B",
    description:
      "Account-based marketing, LinkedIn demand gen, and sales enablement for B2B SaaS and services.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Direct booking strategy, reputation management, and seasonal campaigns for hotels and groups.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Lead generation and thought leadership for consultancies, agencies, and high-trust B2B services.",
  },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "UK / EU / US Compliant",
    description:
      "All campaigns, data handling, and content meet UK GDPR, EU GDPR, and US privacy requirements.",
  },
  {
    icon: Award,
    title: "200+ Brands Served",
    description:
      "A growing roster across travel, e-commerce, B2B, aviation, and hospitality.",
  },
  {
    icon: Globe2,
    title: "15+ Countries",
    description:
      "Proven delivery across North America, Europe, the Middle East, and APAC.",
  },
];

function Different() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="relative bg-bg py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
              Why Beeancy
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Six reasons brands{" "}
              <span className="font-serif italic text-muted">choose</span> us.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DIFFERENTIATORS.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bento-card p-7 md:p-8 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue mb-6">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-text mb-3">
                  {d.title}
                </h3>
                <p className="text-muted leading-relaxed">{d.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              How we work
            </div>
            <h2 className="font-display text-display text-text text-balance">
              A simple,{" "}
              <span className="font-serif italic text-muted">proven</span>{" "}
              four-step process.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-t border-stroke pt-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-beeancy-blue">
                    Step {p.step}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-text text-bg flex items-center justify-center mb-5">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-text mb-3">
                  {p.title}
                </h3>
                <p className="text-muted leading-relaxed text-small">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
              Industries we serve
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Deep expertise across{" "}
              <span className="font-serif italic text-muted">high-stakes</span>{" "}
              sectors.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bento-card p-7 h-full"
              >
                <Icon size={28} strokeWidth={1.4} className="text-beeancy-blue mb-5" />
                <h3 className="font-display text-xl text-text mb-2">
                  {ind.title}
                </h3>
                <p className="text-muted text-small leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto">
        <div className="eyebrow-tag mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
          Trust & compliance
        </div>
        <h2 className="font-display text-display text-text text-balance mb-8">
          Built for{" "}
          <span className="font-serif italic text-muted">enterprise-grade</span>{" "}
          standards.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TRUST.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="border-t border-stroke pt-6"
              >
                <Icon size={20} strokeWidth={1.5} className="text-beeancy-gold mb-3" />
                <h3 className="font-display text-lg text-text mb-2">
                  {t.title}
                </h3>
                <p className="text-muted text-small leading-relaxed">
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-6">
          See the{" "}
          <span className="font-serif italic text-gradient-accent">
            difference
          </span>{" "}
          for yourself.
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          A 30-minute conversation is usually enough to know if we're the right
          partner. No pitch deck, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <span>Book a call</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
          >
            <span>Explore services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function WhyBeeancy() {
  return (
    <>
      <PageHero
        eyebrow="Why Beeancy"
        title={
          <>
            Why ambitious brands{" "}
            <span className="font-serif italic text-gradient-accent">choose</span>{" "}
            us.
          </>
        }
        subtitle="A premium AI marketing partner built on hard numbers, senior expertise, and a relentless focus on outcomes. Here's what makes working with us different."
        primaryCta={{ label: "Get in touch", to: "/contact" }}
        secondaryCta={{ label: "View services", to: "/services" }}
        backgroundImage="/futuristic_background_6.jpg"
      />
      <Different />
      <Process />
      <Industries />
      <Trust />
      <WhyCTA />
    </>
  );
}
