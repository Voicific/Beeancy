import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Megaphone,
  Bot,
  PenTool,
  Briefcase,
  Sparkles,
  BarChart3,
  Layers,
  Globe2,
} from "lucide-react";
import Stats from "../components/Stats";
import PageHero from "../components/PageHero";

const TEAM_AREAS = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaign development and execution across paid, owned, and earned channels. Specialists in performance creative and conversion architecture.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Advanced AI implementation, predictive modeling, and intelligent workflow design. We turn data into decisions and automations into assets.",
  },
  {
    icon: PenTool,
    title: "Elite Graphic Design",
    description:
      "Professional visual content creation, brand systems, and motion design. Pixel-perfect creative that performs as well as it looks.",
  },
  {
    icon: Briefcase,
    title: "Seasoned Sales",
    description:
      "Proven sales strategies, lifecycle marketing, and client relations. We build revenue engines — not just lead lists.",
  },
];

const VALUES = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Every system we build is instrumented, measured, and improved by machine intelligence. We don't bolt AI on — we design for it.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    description:
      "500% average ROI. 4.2x ROAS. 85% retention. We treat performance as the only metric that matters.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    description:
      "One partner for strategy, creative, content, paid media, web, and AI automation. No silos, no handoffs, no excuses.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Operations across 15+ countries, serving 200+ brands. Local nuance, international scale.",
  },
];

function TeamGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="relative bg-bg py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-6 md:mb-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              Our team
            </div>
            <h2 className="font-display text-display text-text text-balance">
              A dynamic team of{" "}
              <span className="font-serif italic text-muted">specialists</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8 flex md:items-end">
            <p className="text-muted text-base leading-relaxed">
              30+ years of combined experience across digital marketing, AI
              automation, graphic design, and sales — working as one
              cross-functional unit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {TEAM_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bento-card p-7 md:p-8"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue mb-6">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-text mb-3">
                  {area.title}
                </h3>
                <p className="text-muted leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValuesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      ref={ref}
      className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-6 md:mb-8">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
              What we value
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Principles that shape{" "}
              <span className="font-serif italic text-muted">every</span>{" "}
              campaign.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-t border-stroke pt-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-text text-bg flex items-center justify-center">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-2xl text-text">
                    {v.title}
                  </h3>
                </div>
                <p className="text-muted leading-relaxed max-w-md">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto">
        <div className="eyebrow-tag mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
          Our story
        </div>
        <h2 className="font-display text-display text-text text-balance mb-8">
          Built for the brands that{" "}
          <span className="font-serif italic text-muted">refuse</span> to stand
          still.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted text-base leading-relaxed">
          <p>
            Beeancy was founded on a simple observation: marketing teams were
            spending too much time on manual execution and not enough on
            strategy. We built an AI-first agency to flip that ratio — automating
            the repeatable, instrumenting the measurable, and freeing our
            strategists to focus on the work that actually moves the needle.
          </p>
          <p>
            Today we partner with ambitious B2B and B2C brands across travel,
            e-commerce, aviation, and hospitality. Our team combines 30+ years
            of marketing craft with proprietary AI workflows — delivering the
            rare combination of premium creative and rigorous performance
            marketing, all under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-6">
          Let's build something{" "}
          <span className="font-serif italic text-gradient-accent">
            remarkable
          </span>
          .
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          Whether you're scaling a category leader or launching a new venture,
          we'd love to hear your story.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <span>Start a project</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
          >
            <span>See our services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Beeancy"
        title={
          <>
            We're <span className="font-serif italic text-gradient-accent">Beeancy</span>.
          </>
        }
        subtitle="An AI-first digital marketing agency helping ambitious brands transform their digital presence, scale revenue, and own their categories."
        primaryCta={{ label: "Get in touch", to: "/contact" }}
        secondaryCta={{ label: "View services", to: "/services" }}
        backgroundImage="/futuristic_background_5.jpg"
      />
      <StorySection />
      <TeamGrid />
      <ValuesGrid />
      <Stats />
      <AboutCTA />
    </>
  );
}
