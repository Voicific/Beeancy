export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date
  monthLabel: string;
  year: number;
  category: string;
  readTime: number; // minutes
  author: string;
  authorRole: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  content: BlogSection[];
}

export const BLOG_POSTS_CHRONOLOGICAL: BlogPost[] = [
  // ============================================================
  // JANUARY 2026
  // ============================================================
  {
    slug: "ai-marketing-2026-uk-small-business-playbook",
    title:
      "AI Marketing in 2026: What UK Small Businesses Must Do to Stay Competitive",
    date: "2026-01-15",
    monthLabel: "January",
    year: 2026,
    category: "AI & Automation",
    readTime: 8,
    author: "Beeancy Strategy Team",
    authorRole: "AI Marketing Specialists",
    excerpt:
      "The AI marketing shift is no longer coming — it's here. Here's the practical 2026 playbook UK small businesses are using to out-market larger competitors without growing their headcount.",
    coverImage: "/blog-jan-2026.jpg",
    tags: ["AI Marketing", "Small Business", "UK", "Strategy"],
    content: [
      {
        type: "paragraph",
        text: "If 2024 was the year UK businesses experimented with AI and 2025 was the year they piloted it, 2026 is the year the experiment is over. AI is now the default layer underneath every efficient marketing operation in the UK — and the gap between businesses that have operationalised it and those that haven't is widening every quarter.",
      },
      {
        type: "paragraph",
        text: "For small businesses in particular, the 2026 reality is uncomfortable: your larger competitors are now producing 5x more content, personalising 10x more journeys, and answering customer enquiries 24/7 — all with the same headcount they had in 2023. The difference is the AI stack they've quietly built underneath.",
      },
      {
        type: "heading",
        text: "The three shifts redefining small business marketing in 2026",
      },
      {
        type: "list",
        items: [
          "From campaigns to always-on AI workflows — campaigns are out, continuous AI-optimised journeys are in.",
          "From content calendars to content systems — one good brief now produces a month's worth of on-brand assets.",
          "From analytics dashboards to predictive decisions — AI tells you what to do next, not just what happened.",
        ],
      },
      {
        type: "heading",
        text: "What this looks like in practice",
      },
      {
        type: "paragraph",
        text: "A typical UK service business we work with in 2026 has replaced roughly 60% of repetitive marketing work with AI — but kept 100% of strategic, creative, and customer-facing decisions human. The result: the same team of three marketers is now running the output of what used to require nine.",
      },
      {
        type: "callout",
        title: "Beeancy's approach",
        text: "We don't sell 'AI marketing' as a buzzword. We build lean, AI-augmented marketing systems for UK and European small businesses — so you get enterprise-grade output at SME budgets, with humans making every strategic call.",
      },
      {
        type: "heading",
        text: "The three things to put in place this quarter",
      },
      {
        type: "list",
        items: [
          "One AI content engine (for blogs, social, email) — wired into your brand voice, not a generic chatbot.",
          "One AI customer-conversation layer (live chat, voice, or both) — handling 70%+ of routine enquiries.",
          "One predictive analytics layer — turning your CRM and ad data into next-best-action recommendations.",
        ],
      },
      {
        type: "paragraph",
        text: "You don't need a six-figure budget. You need a partner who knows what to build, in what order, and how to measure it. That's where Beeancy comes in — and why our SME clients consistently outperform competitors three times their size.",
      },
    ],
  },

  // ============================================================
  // FEBRUARY 2026
  // ============================================================
  {
    slug: "death-of-traditional-seo-ai-search-travel-marketing",
    title:
      "The Death of Traditional SEO: How AI Search Is Reshaping Travel Marketing in Europe",
    date: "2026-02-12",
    monthLabel: "February",
    year: 2026,
    category: "AI & Travel",
    readTime: 9,
    author: "Beeancy Travel Practice",
    authorRole: "Travel Marketing Specialists",
    excerpt:
      "Google SGE, ChatGPT, Perplexity and Claude now answer more travel queries than traditional search results. If your travel brand isn't optimised for AI search, you're already invisible to a growing share of European travellers.",
    coverImage: "/blog-feb-2026.jpg",
    tags: ["SEO", "AI Search", "Travel", "Europe"],
    content: [
      {
        type: "paragraph",
        text: "Walk into any European travel supplier's marketing meeting in early 2026 and you'll hear the same worried question: 'Where has our organic traffic gone?' The honest answer is that the traffic hasn't disappeared — it's been intercepted. AI assistants are now answering travel queries before the user ever clicks a blue link.",
      },
      {
        type: "paragraph",
        text: "For tour operators, OTAs, hotel groups, DMCs, and travel suppliers across the UK and Europe, this is the most disruptive shift since the move from print to search. The businesses that treat AI search as a 2026 priority will dominate their category for the next five years. The ones that don't will quietly lose share to competitors they've never even heard of.",
      },
      {
        type: "heading",
        text: "What changed: the rise of the AI travel concierge",
      },
      {
        type: "paragraph",
        text: "In 2025, European travellers began defaulting to ChatGPT, Perplexity, Claude, and Google SGE for trip inspiration. By early 2026, that behaviour is mainstream. A traveller planning a two-week trip to Italy doesn't Google 'best tour operator Italy' anymore — they ask an AI assistant, which synthesises an answer from dozens of sources and recommends two or three suppliers by name.",
      },
      {
        type: "list",
        items: [
          "If your brand isn't mentioned in those AI answers, you're invisible.",
          "If your content isn't structured for AI to read, you're invisible.",
          "If your authority signals (reviews, mentions, structured data) aren't strong, you're invisible.",
        ],
      },
      {
        type: "heading",
        text: "The four pillars of AI-search optimisation for travel",
      },
      {
        type: "list",
        items: [
          "Authoritative, citable content — AI assistants quote sources they trust.",
          "Structured data and entity clarity — so AI can confidently say who you are and what you offer.",
          "Off-site authority — mentions, reviews, awards, and PR that AI reads as third-party validation.",
          "Conversational content — written the way real travellers ask, not the way marketers brief.",
        ],
      },
      {
        type: "callout",
        title: "How Beeancy is different from a traditional travel agency",
        text: "Most travel marketing agencies are still optimising for 2018 Google. We build AI-first visibility systems for European travel suppliers — content, schema, authority, and conversational search presence — so your brand is the one AI assistants recommend.",
      },
      {
        type: "heading",
        text: "What to do this month",
      },
      {
        type: "paragraph",
        text: "Audit your brand in five AI assistants using your ten most important travel queries. The brands that show up, and the brands that don't, tell you everything you need to know about your 2026 visibility gap. Then close it — quickly, before the summer booking season locks in.",
      },
    ],
  },

  // ============================================================
  // MARCH 2026
  // ============================================================
  {
    slug: "five-ai-tools-every-uk-small-business-2026",
    title:
      "5 AI Tools Every UK Small Business Should Adopt This Quarter (And How to Use Them)",
    date: "2026-03-10",
    monthLabel: "March",
    year: 2026,
    category: "Tools & Stack",
    readTime: 7,
    author: "Beeancy Strategy Team",
    authorRole: "AI Marketing Specialists",
    excerpt:
      "A no-fluff shortlist of the five AI tools delivering the highest ROI for UK small businesses in Q1 2026 — and the practical workflow each one slots into.",
    coverImage: "/blog-mar-2026.jpg",
    tags: ["AI Tools", "Small Business", "Productivity", "UK"],
    content: [
      {
        type: "paragraph",
        text: "There are now more AI marketing tools on the market than a small business can realistically evaluate. The good news: you don't need to. After testing dozens with our UK and European clients, five tools consistently deliver the highest return for the lowest complexity. Here they are.",
      },
      {
        type: "heading",
        text: "1. A brand-trained AI content engine",
      },
      {
        type: "paragraph",
        text: "Generic ChatGPT won't write like your brand. A properly configured content engine — trained on your tone, your examples, your customers — will. For most UK SMEs, this is the single highest-ROI AI investment in 2026: a content engine that produces on-brand blogs, social posts, emails, and ad copy in minutes instead of days.",
      },
      {
        type: "heading",
        text: "2. An AI customer-conversation layer",
      },
      {
        type: "paragraph",
        text: "Live chat and voice assistants powered by AI now handle 70%+ of routine enquiries for our SME clients — booking questions, FAQs, order status, lead qualification — 24/7, in your brand voice. The result isn't a colder experience. It's a faster one, with humans jumping in only when it matters.",
      },
      {
        type: "heading",
        text: "3. Predictive ad-bidding",
      },
      {
        type: "paragraph",
        text: "Manual bid management is over. AI bidding in 2026 analyses thousands of signals per impression — time of day, device, user history, competitor activity — and adjusts your spend in real time. For UK SMEs running Google or Meta ads, this typically reduces cost-per-lead by 30–50% within the first month.",
      },
      {
        type: "heading",
        text: "4. AI-powered CRM with next-best-action",
      },
      {
        type: "paragraph",
        text: "A modern AI CRM doesn't just store contacts — it tells you which lead to call next, what to say, and when. For service businesses across the UK, this single tool routinely doubles sales-team productivity without adding headcount.",
      },
      {
        type: "heading",
        text: "5. AI analytics and reporting",
      },
      {
        type: "paragraph",
        text: "Stop building dashboards. Modern AI analytics tools read your data, surface the insights that matter, and write a weekly plain-English summary of what's working, what isn't, and what to do next. Your marketing decisions get faster and your meetings get shorter.",
      },
      {
        type: "callout",
        title: "Why this list isn't enough on its own",
        text: "Tools without strategy are just expensive subscriptions. Beeancy's role is to design the right AI stack for your business, integrate it properly, and make sure every tool is pulling in the same direction. That's what separates AI marketing that works from AI marketing that just looks good in a demo.",
      },
    ],
  },

  // ============================================================
  // APRIL 2026
  // ============================================================
  {
    slug: "ai-voice-assistants-european-travel-bookings",
    title:
      "How AI Voice Assistants Are Quietly Reshaping European Travel Bookings",
    date: "2026-04-08",
    monthLabel: "April",
    year: 2026,
    category: "AI & Travel",
    readTime: 8,
    author: "Beeancy Travel Practice",
    authorRole: "Voice AI Specialists",
    excerpt:
      "Across the UK, Germany, France, Spain and the Nordics, travellers are increasingly booking trips by talking to AI. Here's what that means for hotels, tour operators, and DMCs — and how to be the brand they hear.",
    coverImage: "/blog-apr-2026.jpg",
    tags: ["Voice AI", "Travel Bookings", "Europe", "Hospitality"],
    content: [
      {
        type: "paragraph",
        text: "A quiet revolution is happening in European travel. While most travel suppliers are still optimising for the website click, a growing share of European travellers — particularly in the UK, Germany, France, the Nordics, and the Benelux — are skipping the website entirely. They are booking trips by talking to AI.",
      },
      {
        type: "paragraph",
        text: "Not a phone call to a human call centre. A real-time conversation with an AI voice assistant that knows their preferences, can recommend the right itinerary, check availability, and complete the booking in their language. This isn't a 2028 forecast. It's happening now, in April 2026, and it's growing quarter on quarter.",
      },
      {
        type: "heading",
        text: "Why European travellers adopted voice-first booking first",
      },
      {
        type: "list",
        items: [
          "Multilingual expectation — Europeans travel and book across language borders; voice AI handles this natively.",
          "Mobile-first behaviour — voice is faster than typing on a phone for complex itineraries.",
          "Trust in voice AI — quality has crossed the threshold where it feels natural, not robotic.",
          "Fatigue with forms — European travellers in 2026 will not fill out a 12-field booking form if they don't have to.",
        ],
      },
      {
        type: "heading",
        text: "What 'AI voice booking' actually looks like in production",
      },
      {
        type: "paragraph",
        text: "Imagine a luxury Tuscany tour operator. A traveller in London says to their AI assistant, 'I want a food and wine week in Tuscany for two in September, around five thousand pounds.' The assistant checks the operator's live availability, recommends a matching itinerary, reads the itinerary back conversationally, and offers to confirm. The whole thing takes two minutes. The traveller never visits a website.",
      },
      {
        type: "paragraph",
        text: "The supplier in that scenario had invested in three things: a live availability feed, a brand-trained voice assistant, and a deep integration with their booking engine. That's it. The result is a new, high-intent direct-booking channel that didn't exist 18 months ago.",
      },
      {
        type: "quote",
        text: "Voice is the new front door of European travel. If your booking experience still starts with a form, you're optimising for a channel that's quietly being replaced.",
        attribution: "Beeancy Travel Practice",
      },
      {
        type: "callout",
        title: "Beeancy's edge in AI voice for travel",
        text: "Most travel agencies can't build or deploy a production-grade AI voice booking flow. We can — and we do, for European tour operators, hotel groups, and DMCs ready to be the brand travellers hear, not just the brand they read.",
      },
    ],
  },

  // ============================================================
  // MAY 2026
  // ============================================================
  {
    slug: "european-smes-outpacing-corporate-marketing-ai",
    title:
      "Why European SMEs Are Quietly Outpacing Corporate Marketing Budgets with AI",
    date: "2026-05-14",
    monthLabel: "May",
    year: 2026,
    category: "Strategy",
    readTime: 7,
    author: "Beeancy Strategy Team",
    authorRole: "Growth Strategists",
    excerpt:
      "Across the UK and Europe, small and mid-sized businesses are using AI to outperform corporate marketing teams many times their size. Here's how — and the mistakes the corporates are still making.",
    coverImage: "/blog-may-2026.jpg",
    tags: ["SME", "AI Strategy", "Europe", "Competitive Advantage"],
    content: [
      {
        type: "paragraph",
        text: "There's a quiet but significant inversion happening in European marketing. The SMEs that used to envy the marketing budgets of large corporates are now — in many categories — outperforming them. The lever isn't budget. It's AI-driven leverage applied with the speed and clarity that only a small team can move with.",
      },
      {
        type: "heading",
        text: "The leverage equation has changed",
      },
      {
        type: "paragraph",
        text: "In 2023, a corporate marketing team of fifty could outperform a small business team of three by spending more, hiring more specialists, and buying more media. In 2026, that math no longer holds. A small team of three with the right AI stack can produce the output, the personalisation, and the responsiveness of a corporate team of fifteen — and move ten times faster.",
      },
      {
        type: "heading",
        text: "What SMEs are doing differently",
      },
      {
        type: "list",
        items: [
          "Adopting AI tools in weeks, not 18-month transformation programmes.",
          "Keeping strategy human and execution AI-augmented — no committee approvals, no over-process.",
          "Picking narrow categories and dominating them, instead of spreading thin.",
          "Treating AI as a default layer, not a side project — the same way they treat email.",
        ],
      },
      {
        type: "heading",
        text: "The mistake corporates are still making",
      },
      {
        type: "paragraph",
        text: "Most large European marketing teams are still trying to 'do AI' as a separate workstream — pilots, innovation labs, and sandbox projects that never touch the core P&L. While they deliberate, the SME down the road has already embedded AI into every customer touchpoint. By the time the corporate has governance in place, the SME has the market.",
      },
      {
        type: "callout",
        title: "Beeancy exists to widen this gap",
        text: "We're the AI marketing partner for ambitious UK and European SMEs. We bring the AI stack, the strategy, and the senior expertise that small teams need but can't hire full-time — so you compete on outcomes, not headcount.",
      },
    ],
  },

  // ============================================================
  // JUNE 2026
  // ============================================================
  {
    slug: "predictive-analytics-travel-suppliers-uk-europe",
    title:
      "Predictive Analytics for Travel Suppliers: Turning Data Into Direct Bookings",
    date: "2026-06-11",
    monthLabel: "June",
    year: 2026,
    category: "AI & Travel",
    readTime: 8,
    author: "Beeancy Travel Practice",
    authorRole: "Travel Data Strategists",
    excerpt:
      "UK and European travel suppliers are sitting on a goldmine of booking data. Predictive analytics is the engine that turns it into higher direct revenue, smarter pricing, and more personal customer journeys.",
    coverImage: "/blog-jun-2026.jpg",
    tags: ["Predictive Analytics", "Travel Suppliers", "Direct Bookings", "UK & EU"],
    content: [
      {
        type: "paragraph",
        text: "Every UK and European travel supplier we've worked with over the last decade has had the same problem: reams of historical booking data, very little actionable insight. In 2026, that problem is finally solvable — not with a bigger analytics team, but with AI-driven predictive analytics built into the marketing stack itself.",
      },
      {
        type: "heading",
        text: "What predictive analytics actually does for travel suppliers",
      },
      {
        type: "list",
        items: [
          "Demand forecasting — when, where, and from whom next quarter's bookings will come.",
          "Dynamic pricing recommendations — the right price, to the right customer, at the right moment.",
          "Churn prediction — which past bookers are about to lapse, and what offer will win them back.",
          "Next-best-offer — what each visitor should see on your site to convert at the highest rate.",
          "Channel attribution — which marketing touchpoints actually drive direct bookings, not assisted clicks.",
        ],
      },
      {
        type: "heading",
        text: "Why this matters more for travel than for almost any other category",
      },
      {
        type: "paragraph",
        text: "Travel is high-consideration, long-cycle, and seasonally lumpy. A one-percentage-point improvement in conversion or pricing can mean millions for a mid-sized European tour operator. That's why AI-driven predictions aren't a nice-to-have in 2026 — they're the difference between operators growing direct share and operators surrendering it to OTAs forever.",
      },
      {
        type: "quote",
        text: "The travel suppliers winning in 2026 are the ones who treat their data as a strategic asset, not a compliance by-product.",
        attribution: "Beeancy Travel Practice",
      },
      {
        type: "callout",
        title: "Where Beeancy comes in",
        text: "We build the predictive layer most travel marketing agencies can't — wired into your booking engine, your CRM, and your paid media. The result is a marketing operation that learns from every booking and improves every week. That's what separates a modern travel supplier from one that's still guessing.",
      },
    ],
  },

  // ============================================================
  // JULY 2026
  // ============================================================
  {
    slug: "beyond-chatgpt-emerging-ai-marketing-tools-smes-2026",
    title:
      "Beyond ChatGPT: 7 Emerging AI Marketing Tools SMEs Are Using to Win in 2026",
    date: "2026-07-09",
    monthLabel: "July",
    year: 2026,
    category: "Tools & Stack",
    readTime: 9,
    author: "Beeancy Strategy Team",
    authorRole: "AI Marketing Specialists",
    excerpt:
      "ChatGPT is now table stakes. The SMEs pulling ahead in 2026 are using a new generation of agentic, video, voice, and design AI tools that most marketers haven't heard of yet.",
    coverImage: "/blog-jul-2026.jpg",
    tags: ["AI Tools", "Emerging Tech", "SME", "2026"],
    content: [
      {
        type: "paragraph",
        text: "If your AI marketing stack in 2026 is still 'ChatGPT and a scheduling tool,' you are working with a 2023 toolkit in a 2026 market. The SMEs pulling ahead this year are quietly deploying a new generation of AI tools that are agentic, video-native, voice-first, and design-aware. Here are the seven we recommend most often.",
      },
      {
        type: "heading",
        text: "1. Agentic AI marketing assistants",
      },
      {
        type: "paragraph",
        text: "Unlike a chatbot that responds to a prompt, agentic AI tools can plan a multi-step marketing task, execute it, learn from the result, and iterate. For SMEs, this means campaigns that used to take a week to brief, build, launch, and optimise can now happen autonomously in 48 hours.",
      },
      {
        type: "heading",
        text: "2. AI video generation and editing",
      },
      {
        type: "paragraph",
        text: "In 2026, AI can produce a polished, on-brand short-form video from a single brief — complete with motion graphics, voiceover, captions, and platform-specific cuts. For SMEs that couldn't afford a video team, this is the single biggest unlock of the year.",
      },
      {
        type: "heading",
        text: "3. AI voice cloning and brand voice",
      },
      {
        type: "paragraph",
        text: "Your brand voice, replicated in any language, on demand. AI voice tools now let a UK SME sound like a polished international brand across 20 languages, with consistent tone and pronunciation. Particularly powerful for European travel suppliers selling across multiple markets.",
      },
      {
        type: "heading",
        text: "4. AI design systems",
      },
      {
        type: "paragraph",
        text: "Forget generic Canva templates. Modern AI design systems generate on-brand visual assets at scale — from social posts to display ads to landing page hero variations — while respecting your colours, typography, and design language.",
      },
      {
        type: "heading",
        text: "5. AI SEO and content clustering",
      },
      {
        type: "paragraph",
        text: "AI-driven content tools now map topical authority across an entire site, identify content gaps, and produce interlinked, search-optimised articles — written the way humans actually ask questions in 2026.",
      },
      {
        type: "heading",
        text: "6. AI customer research and insight",
      },
      {
        type: "paragraph",
        text: "Modern AI research tools analyse thousands of customer reviews, survey responses, and support transcripts in minutes — surfacing insights that used to require a dedicated research function. The output is sharper positioning, sharper messaging, sharper offers.",
      },
      {
        type: "heading",
        text: "7. AI ad creative generation and testing",
      },
      {
        type: "paragraph",
        text: "AI now generates hundreds of ad creative variations, tests them in real time, and reallocates spend to the winners. The result: paid media that gets smarter every week, without manual creative iteration.",
      },
      {
        type: "callout",
        title: "Tools are easy. Integration is the real advantage.",
        text: "Most SMEs can buy AI tools. Few can integrate them into a single, coherent marketing system that compounds over time. That's exactly what Beeancy does — design, build, and run the AI marketing stack that turns these seven tools into a competitive moat.",
      },
    ],
  },

  // ============================================================
  // AUGUST 2026
  // ============================================================
  {
    slug: "gdpr-ai-compliance-guide-uk-eu-marketers-2026",
    title:
      "GDPR & AI in 2026: A Practical Compliance Guide for UK and EU Marketers",
    date: "2026-08-13",
    monthLabel: "August",
    year: 2026,
    category: "Compliance & Privacy",
    readTime: 8,
    author: "Beeancy Compliance Team",
    authorRole: "Privacy & AI Governance",
    excerpt:
      "With the EU AI Act fully in force and UK GDPR enforcement intensifying, 2026 is the year 'AI marketing' and 'compliant AI marketing' finally diverge. Here's how to stay on the right side of the line.",
    coverImage: "/blog-aug-2026.jpg",
    tags: ["GDPR", "EU AI Act", "Compliance", "UK & EU"],
    content: [
      {
        type: "paragraph",
        text: "If you're a UK or EU marketer using AI in 2026, the regulatory landscape is no longer something you can defer to legal 'later.' The EU AI Act is now fully enforceable, UK GDPR enforcement is meaningfully stronger than 2024, and the ICO has been clear that AI-powered marketing is a priority area. The good news: compliant AI marketing isn't harder — it just needs to be designed that way from day one.",
      },
      {
        type: "heading",
        text: "What changed in 2026",
      },
      {
        type: "list",
        items: [
          "EU AI Act: high-risk AI use cases (including certain marketing applications) require documented risk assessments and human oversight.",
          "UK GDPR updates: stricter rules on AI-based profiling, automated decisioning, and consent for personalisation.",
          "Cookie and tracking enforcement: regulators are actively pursuing sites using AI-driven personalisation without compliant consent flows.",
          "Transparency obligations: customers must be told when they are interacting with AI, and when AI is shaping what they see.",
        ],
      },
      {
        type: "heading",
        text: "The four pillars of compliant AI marketing in 2026",
      },
      {
        type: "list",
        items: [
          "Lawful basis — every AI-driven personalisation or profiling activity needs a clear, documented lawful basis under UK/EU GDPR.",
          "Transparency — users must be able to tell when AI is in the loop, and how to opt out.",
          "Human oversight — high-impact AI decisions (pricing, eligibility, content moderation) must have a human-in-the-loop.",
          "Data minimisation — only the data you actually need, retained only as long as you actually need it.",
        ],
      },
      {
        type: "heading",
        text: "What 'good' looks like in practice",
      },
      {
        type: "paragraph",
        text: "A compliant AI marketing operation in 2026 documents its data flows, trains its team on what AI can and cannot do with personal data, runs a lightweight DPIA for any new AI deployment, and builds clear opt-out and human-review paths into every customer touchpoint. None of this is technically hard. All of it is operationally essential.",
      },
      {
        type: "callout",
        title: "How Beeancy approaches AI compliance",
        text: "Every AI system we build for UK and European clients is compliant by design — documented data flows, lawful bases baked in, transparent AI disclosures, and human oversight where it matters. The result: marketing that performs AND marketing you can defend.",
      },
      {
        type: "quote",
        text: "The brands that win the next five years of AI marketing in Europe will be the ones who treat compliance as a feature, not a tax.",
        attribution: "Beeancy Compliance Team",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  return BLOG_POSTS.filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.tags.some((t) => current.tags.includes(t)) ? 1 : 0;
      const bMatch = b.tags.some((t) => current.tags.includes(t)) ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function formatBlogDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Exported list: most recent posts first (newest → oldest).
// Source array is kept in chronological order (Jan → Aug 2026) for easier maintenance.
export const BLOG_POSTS: BlogPost[] = [...BLOG_POSTS_CHRONOLOGICAL].sort(
  (a, b) => b.date.localeCompare(a.date)
);
