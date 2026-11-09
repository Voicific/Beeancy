import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Share2, Tag, Twitter, Linkedin } from "lucide-react";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  formatBlogDate,
  BLOG_POSTS,
  type BlogSection,
} from "../data/blogPosts";
import NotFound from "./NotFound";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Beeancy Journal`;
    }
    return () => {
      document.title = "Beeancy AI Marketing - AI-Powered Digital Marketing Agency";
    };
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <article>
        <PostHero post={post} />
        <PostContent post={post} />
        <PostFooter post={post} />
      </article>
      {related.length > 0 && <RelatedPosts posts={related} />}
      <PostCTA />
    </>
  );
}

function PostHero({
  post,
}: {
  post: ReturnType<typeof getBlogPostBySlug> & object;
}) {
  const metaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements: { el: HTMLElement | null; y: number; duration: number; delay: number }[] = [
      { el: metaRef.current, y: 12, duration: 0.7, delay: 0.1 },
      { el: headingRef.current, y: 40, duration: 1, delay: 0.25 },
      { el: subRef.current, y: 20, duration: 0.9, delay: 0.55 },
    ];
    const cleanups: (() => void)[] = [];
    elements.forEach(({ el, y, duration, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateY(${y}px)`;
      el.style.transition = `opacity ${duration}s ease-out, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
      const t = window.setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay * 1000);
      cleanups.push(() => window.clearTimeout(t));
    });
    return () => cleanups.forEach((fn) => fn());
  }, [post.slug]);

  return (
    <section className="relative bg-bg overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-10 md:pb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-small text-muted hover:text-text transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>All insights</span>
        </Link>

        <div ref={metaRef} className="flex flex-wrap items-center gap-3 mb-6">
          <span className="eyebrow-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-muted">
            <Calendar size={12} />
            {formatBlogDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-muted">
            <Clock size={12} />
            {post.readTime} min read
          </span>
        </div>

        <h1
          ref={headingRef}
          className="font-display text-text leading-[1.02] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)] max-w-4xl text-balance"
        >
          {post.title}
        </h1>
        <p
          ref={subRef}
          className="mt-6 text-muted text-lg max-w-2xl leading-relaxed text-balance"
        >
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-beeancy-blue to-beeancy-gold flex items-center justify-center text-bg text-sm font-semibold">
            {post.author
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <div className="text-text text-small font-medium">{post.author}</div>
            <div className="text-muted text-[11px] tracking-[0.12em] uppercase">
              {post.authorRole}
            </div>
          </div>
        </div>
      </div>

      <div ref={coverRef} className="relative max-w-[1400px] mx-auto px-6 md:px-12 pb-12">
        <div className="relative h-64 md:h-[480px] rounded-2xl overflow-hidden border border-stroke">
          <img
            src={post.coverImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

function PostContent({
  post,
}: {
  post: ReturnType<typeof getBlogPostBySlug> & object;
}) {
  return (
    <section className="bg-bg px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto py-12 md:py-14">
        <div className="grid grid-cols-12 gap-8">
          {/* Sticky share rail */}
          <aside className="hidden md:block col-span-2">
            <div className="sticky top-28 flex flex-col items-start gap-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted">
                Share
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-text transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-text transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <button
                type="button"
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center text-muted hover:text-text hover:border-text transition-colors"
                aria-label="Copy link"
              >
                <Share2 size={14} />
              </button>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-10 max-w-[720px]">
            {post.content.map((section, i) => (
              <ContentBlock key={i} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentBlock({ section }: { section: BlogSection }) {
  if (section.type === "heading") {
    return (
      <h2 className="font-display text-2xl md:text-3xl text-text tracking-[-0.02em] mt-12 mb-4 first:mt-0">
        {section.text}
      </h2>
    );
  }
  if (section.type === "paragraph") {
    return (
      <p className="text-text/90 text-base md:text-lg leading-[1.75] mb-5">
        {section.text}
      </p>
    );
  }
  if (section.type === "list") {
    return (
      <ul className="my-6 space-y-3">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-text/90 text-base md:text-lg leading-[1.6]">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-beeancy-blue flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (section.type === "quote") {
    return (
      <blockquote className="my-8 pl-6 border-l-2 border-beeancy-blue">
        <p className="font-serif italic text-xl md:text-2xl text-text leading-[1.4] mb-2">
          "{section.text}"
        </p>
        {section.attribution && (
          <footer className="text-[11px] tracking-[0.2em] uppercase text-muted">
            — {section.attribution}
          </footer>
        )}
      </blockquote>
    );
  }
  if (section.type === "callout") {
    return (
      <div className="my-8 bento-card p-6 md:p-8 border-beeancy-blue/30 bg-gradient-to-br from-beeancy-blue/5 to-beeancy-gold/5">
        <div className="text-[11px] tracking-[0.2em] uppercase text-beeancy-blue mb-2">
          {section.title}
        </div>
        <p className="text-text text-base md:text-lg leading-[1.6]">
          {section.text}
        </p>
      </div>
    );
  }
  return null;
}

function PostFooter({
  post,
}: {
  post: ReturnType<typeof getBlogPostBySlug> & object;
}) {
  return (
    <section className="bg-bg px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto py-10">
        <div className="flex flex-wrap items-center gap-3">
          <Tag size={14} className="text-muted" />
          {post.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-[11px] tracking-[0.12em] uppercase border border-stroke text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPosts({
  posts,
}: {
  posts: ReturnType<typeof getRelatedPosts>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-bg px-6 md:px-12 border-t border-stroke"
    >
      <div className="max-w-[1400px] mx-auto py-12 md:py-14">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <div className="eyebrow-tag mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
              Keep reading
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-text tracking-[-0.02em]">
              More from the journal.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-small text-text hover:text-beeancy-blue transition-colors"
          >
            <span>All articles</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group bento-card h-full flex flex-col overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
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
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                    {formatBlogDate(post.date)} · {post.readTime} min
                  </div>
                  <h3 className="font-display text-base text-text leading-[1.25] mb-3 group-hover:text-gradient-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted text-small leading-relaxed line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-text text-small font-medium group-hover:text-beeancy-blue transition-colors">
                    <span>Read</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Cross-link to other months */}
        <div className="mt-12 pt-8 border-t border-stroke">
          <div className="text-[11px] tracking-[0.2em] uppercase text-muted mb-4">
            Browse by month
          </div>
          <div className="flex flex-wrap gap-2">
            {BLOG_POSTS.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.12em] uppercase border border-stroke text-muted hover:text-text hover:border-text transition-colors"
              >
                {p.monthLabel} 2026
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PostCTA() {
  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12 border-t border-stroke">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-text text-balance mb-6">
          Ready to put this into{" "}
          <span className="font-serif italic text-gradient-accent">practice?</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          We work with a small number of UK and European clients each quarter. Let's talk about what AI marketing could do for your business.
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
