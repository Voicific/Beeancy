import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Sparkles,
  Share2,
  Phone,
  Target,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import PageHero from "../components/PageHero";

const SERVICES = [
  {
    id: "ai-lead-generation",
    icon: Sparkles,
    title: "AI Lead Generation",
    description:
      "Automated lead generation systems that identify, qualify, and nurture prospects using artificial intelligence.",
    features: [
      "Predictive scoring and ICP-driven targeting",
      "Automated multi-step nurture sequences",
      "Higher conversion rates with sales-ready handoff",
    ],
  },
  {
    id: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic social media presence across all platforms with AI-powered content creation and audience engagement.",
    features: [
      "Multi-platform publishing (Instagram, LinkedIn, TikTok, X, Facebook)",
      "AI-assisted content creation and creative testing",
      "Always-on engagement, moderation, and community growth",
    ],
  },
  {
    id: "voice-ai-support-agent",
    icon: Phone,
    title: "Voice AI Support Agent",
    description:
      "24/7 intelligent voice support for websites and phone systems with natural conversation capabilities.",
    features: [
      "24/7 availability across voice, web, and social",
      "Instant responses with sub-second latency",
      "Natural conversations in your brand voice",
    ],
  },
  {
    id: "paid-ads",
    icon: Target,
    title: "Paid Ads (Google & Facebook)",
    description:
      "Data-driven advertising campaigns optimized for maximum ROI across Google Ads and Facebook/Meta platforms.",
    features: [
      "Cross-platform reach and unified measurement",
      "Continuously optimised campaigns and creative",
      "Maximum ROI with disciplined budget pacing",
    ],
  },
  {
    id: "web-design",
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Modern, responsive websites optimized for performance, SEO, and conversion with cutting-edge design principles.",
    features: [
      "Responsive design and accessible UX",
      "SEO optimised technical foundations",
      "Fast loading with Core Web Vitals excellence",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bento-card p-7 md:p-8 scroll-mt-32 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display text-2xl md:text-[1.65rem] text-text leading-tight mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-small leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="flex flex-col gap-2.5 mt-auto">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-small text-text"
          >
            <span className="mt-1.5 w-1 h-1 rounded-full bg-beeancy-blue shrink-0" aria-hidden="true" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function ServicesGrid() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-8 md:mb-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              Full service catalog
            </div>
            <h2 className="font-display text-display text-text text-balance">
              Five services.{" "}
              <span className="font-serif italic text-muted">One</span>{" "}
              integrated team.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8">
            <p className="text-muted text-base leading-relaxed">
              Every engagement is tailored, but the toolkit is consistent.
              Click any service to learn more about how we deliver it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="eyebrow-tag mx-auto mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
          Let's talk
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-6">
          Not sure where to{" "}
          <span className="font-serif italic text-gradient-accent">start</span>?
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-6">
          Tell us about your goals and we'll recommend the right combination of
          services — with a clear plan, timeline, and projected ROI.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
        >
          <span>Request a proposal</span>
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Full-stack{" "}
            <span className="font-serif italic text-gradient-accent">AI marketing</span>{" "}
            for ambitious brands.
          </>
        }
        subtitle="From lead generation and social media to voice AI, paid media, and full-stack web — every service we offer is built around measurable outcomes and the systems to sustain them."
        primaryCta={{ label: "Get in touch", to: "/contact" }}
        secondaryCta={{ label: "Why Beeancy", to: "/why-beeancy" }}
        backgroundImage="/futuristic_background_8.jpg"
      />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}
