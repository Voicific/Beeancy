import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock, Calendar, Sparkles, Filter } from "lucide-react";
import PageHero from "../components/PageHero";
import { BLOG_POSTS, formatBlogDate } from "../data/blogPosts";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            The Beeancy{" "}
            <span className="font-serif italic text-gradient-accent">Journal</span>
          </>
        }
        subtitle="Practical, opinionated intelligence on AI marketing, travel, and the technology reshaping how UK and European small businesses grow in 2026."
        primaryCta={{ label: "Get in touch", to: "/contact" }}
        secondaryCta={{ label: "Our services", to: "/services" }}
        backgroundImage="/futuristic_background_5.jpg"
      />

      <FeaturedPost />
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        query={query}
        onQueryChange={setQuery}
        resultCount={filtered.length}
      />
      <PostGrid posts={filtered} />
      <BlogCTA />
    </>
  );
}

function FeaturedPost() {
  const featured = BLOG_POSTS[0];
  return (
    <section className="relative bg-bg py-10 md:py-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end mb-6">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow-tag">
              <Sparkles size={12} className="text-beeancy-gold" />
              Latest insight
            </div>
          </div>
        </div>

        <Link
          to={`/blog/${featured.slug}`}
          className="group block bento-card overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-7 relative h-64 md:h-[420px] overflow-hidden">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover bento-image"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase bg-bg/70 backdrop-blur-md border border-stroke text-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="md:col-span-5 p-7 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-muted mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {formatBlogDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} />
                    {featured.readTime} min read
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl text-text leading-[1.05] tracking-[-0.02em] mb-4 group-hover:text-gradient-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 text-text group-hover:text-beeancy-blue transition-colors">
                <span className="text-small font-medium">Read article</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function FilterBar({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  resultCount,
}: {
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  resultCount: number;
}) {
  return (
    <section className="bg-bg px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1400px] mx-auto py-8 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted mr-2">
              <Filter size={12} />
              Filter
            </div>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onCategoryChange(c)}
                className={`px-4 py-1.5 rounded-full text-small transition-colors border ${
                  activeCategory === c
                    ? "bg-text text-bg border-text"
                    : "border-stroke text-muted hover:text-text hover:border-text"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-muted">
              {resultCount} {resultCount === 1 ? "article" : "articles"}
            </div>
            <label className="relative block">
              <input
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search insights…"
                className="w-full md:w-72 bg-surface border border-stroke rounded-full pl-10 pr-4 py-2 text-small text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors"
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              >
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

function PostGrid({ posts }: { posts: typeof BLOG_POSTS }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (posts.length === 0) {
    return (
      <section className="bg-bg px-6 md:px-12 border-t border-stroke">
        <div className="max-w-[1400px] mx-auto py-16 text-center">
          <p className="text-muted text-lg">
            No articles match your search. Try a different keyword or filter.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="bg-bg px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group bento-card h-full flex flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover bento-image"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] tracking-[0.18em] uppercase bg-bg/70 backdrop-blur-md border border-stroke text-text">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-muted mb-3">
                    <span>{formatBlogDate(post.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/50" />
                    <span>{post.readTime} min</span>
                  </div>
                  <h3 className="font-display text-lg text-text leading-[1.2] tracking-[-0.01em] mb-3 group-hover:text-gradient-accent transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-muted text-small leading-relaxed line-clamp-3 mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-text text-small font-medium group-hover:text-beeancy-blue transition-colors">
                    <span>Read</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="eyebrow-tag mb-6 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
          Want this intelligence working for your business?
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-6">
          Skip the theory.{" "}
          <span className="font-serif italic text-gradient-accent">Apply it.</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          Book a 30-minute call. We'll show you which of these insights will move the needle for your business in the next 90 days.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <span>Book a call</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            to="/why-beeancy"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke text-text text-base hover:border-text transition-colors"
          >
            <span>Why Beeancy</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
