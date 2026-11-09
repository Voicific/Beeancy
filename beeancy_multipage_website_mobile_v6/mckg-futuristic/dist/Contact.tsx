import { useEffect, useState, FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import PageHero from "../components/PageHero";

const SERVICES = [
  "AI Lead Generation",
  "Social Media Management",
  "Voice AI Support Agent",
  "Paid Ads (Google & Facebook)",
  "Web Design & Development",
  "Other / Not sure yet",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (state: FormState) => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) next.name = "Please tell us your name.";
    if (!state.email.trim()) {
      next.email = "We need an email to reply to.";
    } else if (!EMAIL_REGEX.test(state.email.trim())) {
      next.email = "That doesn't look like a valid email.";
    }
    if (!state.message.trim()) {
      next.message = "A short message helps us route you to the right team.";
    } else if (state.message.trim().length < 10) {
      next.message = "Just a little more detail, please (10+ characters).";
    }
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    const next = validate(form);
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSubmitting(true);
    // FormSubmit.co handles the form submission natively. We submit the form
    // programmatically to honor the loading state and pre-validation, then let
    // the browser handle the navigation to the configured _next URL.
    const formEl = e.currentTarget;
    try {
      formEl.submit();
    } catch (err) {
      setSubmitting(false);
      setServerError(
        "Something went wrong sending your message. Please email hello@beeancy.com directly."
      );
    }
  };

  return (
    <form
      action="https://formsubmit.co/hello@beeancy.com"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* FormSubmit hidden config */}
      <input type="hidden" name="_subject" value="New Lead from Beeancy Website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value={typeof window !== "undefined" ? `${window.location.origin}/contact?success=true` : "/contact?success=true"}
      />
      {/* Honeypot */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-small text-muted mb-2">
            Name <span className="text-beeancy-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full bg-surface border rounded-full px-5 py-3 text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors ${
              errors.name ? "border-red-500/60" : "border-stroke"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-small text-muted mb-2">
            Email <span className="text-beeancy-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full bg-surface border rounded-full px-5 py-3 text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors ${
              errors.email ? "border-red-500/60" : "border-stroke"
            }`}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-small text-muted mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
            className="w-full bg-surface border border-stroke rounded-full px-5 py-3 text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors"
            placeholder="Company or brand"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-small text-muted mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full bg-surface border border-stroke rounded-full px-5 py-3 text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors"
            placeholder="+44 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-small text-muted mb-2">
          Service interest
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-surface border border-stroke rounded-full px-5 py-3 text-text focus:outline-none focus:border-beeancy-blue transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%23A0A0A0%22%3E%3Cpath%20d%3D%22M2%204l4%204%204-4%22%20stroke%3D%22%23A0A0A0%22%20stroke-width%3D%221.4%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1.25rem center",
            backgroundSize: "12px 12px",
            paddingRight: "2.75rem",
          }}
        >
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-small text-muted mb-2">
          Message <span className="text-beeancy-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full bg-surface border rounded-2xl px-5 py-3 text-text placeholder:text-muted focus:outline-none focus:border-beeancy-blue transition-colors resize-none ${
            errors.message ? "border-red-500/60" : "border-stroke"
          }`}
          placeholder="Tell us a little about your goals, timeline, and any context that would help us prepare for our reply."
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      {serverError && (
        <div className="border border-red-500/30 bg-red-500/10 text-red-300 rounded-2xl px-4 py-3 text-small">
          {serverError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text text-bg text-base font-medium hover:bg-beeancy-blue hover:text-bg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <span
                className="inline-block w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin"
                aria-hidden="true"
              />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </>
          )}
        </button>
        <p className="text-xs text-muted max-w-md">
          We typically respond within 24 hours, Monday to Friday. By submitting
          you agree to our{" "}
          <Link
            to="/privacy-policy"
            className="text-text underline underline-offset-2 hover:text-gradient-accent"
          >
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="bento-card p-7 md:p-8">
        <h2 className="font-display text-2xl text-text mb-2">
          Direct contact
        </h2>
        <p className="text-muted text-small leading-relaxed mb-6">
          Prefer email or a quick call? Reach the right team directly.
        </p>
        <ul className="flex flex-col gap-5">
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue shrink-0">
              <Mail size={16} strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                Email
              </div>
              <a
                href="mailto:hello@beeancy.com"
                className="text-text hover:text-gradient-accent transition-colors"
              >
                hello@beeancy.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-gold shrink-0">
              <Phone size={16} strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                Phone
              </div>
              <a
                href="tel:+442039431213"
                className="text-text hover:text-gradient-accent transition-colors"
              >
                020 3943 1213
              </a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-blue shrink-0">
              <MapPin size={16} strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                Address
              </div>
              <div className="text-text">
                London, United Kingdom
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-beeancy-gold shrink-0">
              <Clock size={16} strokeWidth={1.5} />
            </span>
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                Hours
              </div>
              <div className="text-text">
                Monday – Friday, 9:00 – 18:00 GMT
                <br />
                <span className="text-muted text-small">
                  Email support: 24-hour response
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="bento-card p-7 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial-glow opacity-50 pointer-events-none" />
        <div className="relative z-10">
          <div className="eyebrow-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-beeancy-gold" />
            London HQ
          </div>
          <h3 className="font-display text-2xl text-text mb-3">
            Visit our studio
          </h3>
          <p className="text-muted text-small leading-relaxed mb-5">
            We're based in the heart of East London. Schedule an appointment
            before visiting — we'd love to host you properly.
          </p>
          <div className="aspect-[4/3] w-full rounded-2xl border border-stroke bg-surface/40 overflow-hidden relative">
            {/* Stylized address card instead of embedded map */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface/60 to-bg" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-muted">
                <MapPin size={12} className="text-beeancy-blue" />
                <span>London HQ</span>
              </div>
              <div>
                <div className="font-display text-2xl text-text mb-1">
                  London
                </div>
                <div className="text-small text-muted">
                  United Kingdom
                </div>
                <div className="mt-4 text-xs text-muted">
                  By appointment only
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ThankYou() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bento-card p-10 md:p-14 text-center max-w-2xl mx-auto"
    >
      <div className="w-16 h-16 rounded-full bg-beeancy-blue/15 border border-beeancy-blue/40 flex items-center justify-center text-beeancy-blue mx-auto mb-6">
        <CheckCircle2 size={28} strokeWidth={1.5} />
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-text mb-4 text-balance">
        Thanks — your message is{" "}
        <span className="font-serif italic text-gradient-accent">on its way</span>.
      </h2>
      <p className="text-muted leading-relaxed mb-6 max-w-lg mx-auto">
        We typically respond within 24 hours, Monday to Friday. If your request
        is urgent, you can reach us directly at{" "}
        <a
          href="mailto:hello@beeancy.com"
          className="text-text underline underline-offset-2 hover:text-gradient-accent"
        >
          hello@beeancy.com
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-text text-bg text-small font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
        >
          <span>Back to home</span>
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-stroke text-text text-small hover:border-text transition-colors"
        >
          <span>Explore services</span>
        </Link>
      </div>
    </motion.div>
  );
}

function ContactBody() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  useEffect(() => {
    if (isSuccess) {
      // Keep the success query in place so a reload still shows the message.
      // No-op beyond reading the param.
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12">
        <ThankYou />
      </section>
    );
  }

  return (
    <section className="relative bg-bg py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-6">
              <div className="eyebrow-tag mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-beeancy-blue" />
                Get in touch
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-[1.1] tracking-[-0.02em] mb-3">
                Tell us about your goals.
              </h2>
              <p className="text-muted leading-relaxed max-w-xl">
                Fill in the form and we'll come back within 24 hours with next
                steps, projected ROI, and a tailored proposal.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's start a{" "}
            <span className="font-serif italic text-gradient-accent">conversation</span>.
          </>
        }
        subtitle="Tell us about your brand and your goals. We respond to every qualified enquiry within 24 hours, Monday to Friday."
        backgroundImage="/hero_business_agency_6.jpg"
      />
      <ContactBody />
    </>
  );
}
