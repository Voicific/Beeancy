import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Beeancy", to: "/why-beeancy" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`pill-nav flex items-center gap-1 rounded-full px-2 py-2 transition-shadow ${
            scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : ""
          }`}
          aria-label="Primary"
        >
          {/* Brand mark */}
          <Link
            to="/"
            className="flex items-center gap-2 pl-3 pr-3 text-text hover:opacity-80 transition-opacity"
            aria-label="Beeancy home"
          >
            <img
              src="/beeancy_logo_v6.png"
              alt="Beeancy"
              width="32"
              height="32"
              className="w-8 h-8 rounded-md object-contain"
            />
            <span className="text-small font-medium tracking-wide hidden sm:inline">
              Beeancy
            </span>
          </Link>

          <span className="mx-1 h-5 w-px bg-stroke" aria-hidden="true" />

          {/* Nav links (desktop) */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-small rounded-full transition-colors ${
                      isActive
                        ? "text-bg bg-text"
                        : "text-muted hover:text-text"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <span className="mx-1 h-5 w-px bg-stroke hidden md:block" aria-hidden="true" />

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-small bg-text text-bg hover:bg-beeancy-blue hover:text-bg transition-colors"
          >
            <span>Get in touch</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-text"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-bg/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="h-full flex flex-col pt-24 pb-10 px-6"
            >
              <ul className="flex flex-col gap-1 mt-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-4 border-t border-stroke text-2xl font-display tracking-tight ${
                          isActive ? "text-gradient-accent" : "text-text"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          <span
                            className={`text-[10px] tracking-[0.25em] uppercase ${
                              isActive ? "text-beeancy-blue" : "text-muted"
                            }`}
                          >
                            {isActive ? "Active" : `${String(i + 1).padStart(2, "0")}`}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
                <li className="border-t border-stroke" />
              </ul>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
                >
                  <span>Get in touch</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="mailto:hello@beeancy.com"
                  className="text-center text-small text-muted hover:text-text transition-colors"
                >
                  hello@beeancy.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
