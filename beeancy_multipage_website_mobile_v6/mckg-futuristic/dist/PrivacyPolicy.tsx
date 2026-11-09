import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PageHero from "../components/PageHero";

const LAST_UPDATED = "30 July 2026";

const SECTIONS = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p>
          Beeancy AI Marketing ("we", "our", "us") is committed to protecting
          the privacy of individuals whose personal data we handle in the
          course of our business. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website, engage our services, or otherwise interact with us.
        </p>
        <p>
          We are headquartered in London, United Kingdom, and we operate in
          compliance with the UK General Data Protection Regulation (UK GDPR),
          the EU General Data Protection Regulation (EU GDPR) where applicable,
          and applicable US federal and state privacy laws including the
          California Consumer Privacy Act (CCPA/CPRA).
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>
          We collect personal data that you voluntarily provide to us, as well
          as limited technical data that is generated automatically when you
          visit our website. The categories of personal data we collect
          include:
        </p>
        <ul>
          <li>
            <strong>Identity & contact data</strong> — name, email address,
            phone number, company, job title, and country.
          </li>
          <li>
            <strong>Enquiry data</strong> — the contents of any message you
            send us through our contact form, email, or other channels,
            including service interest and project context.
          </li>
          <li>
            <strong>Marketing data</strong> — your preferences for receiving
            marketing communications from us and your communication history
            with our team.
          </li>
          <li>
            <strong>Technical data</strong> — IP address, browser type and
            version, time-zone setting, device information, operating system,
            referrer URL, and pages visited on our website.
          </li>
          <li>
            <strong>Cookies & usage data</strong> — see the Cookies section
            below.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>
          We use your personal data for the following purposes, relying on the
          legal bases indicated:
        </p>
        <ul>
          <li>
            <strong>To respond to enquiries and provide our services</strong>{" "}
            (legal basis: performance of a contract; legitimate interest).
          </li>
          <li>
            <strong>To manage and administer client accounts</strong> (legal
            basis: performance of a contract).
          </li>
          <li>
            <strong>To send marketing communications about our services</strong>{" "}
            (legal basis: consent; you may withdraw consent at any time).
          </li>
          <li>
            <strong>To improve our website, content, and services</strong>{" "}
            (legal basis: legitimate interest).
          </li>
          <li>
            <strong>To comply with our legal and regulatory obligations</strong>{" "}
            (legal basis: legal obligation).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Cookies and Similar Technologies",
    body: (
      <>
        <p>
          Our website uses cookies and similar technologies to distinguish you
          from other users. This helps us provide you with a good experience
          when you browse our website and also allows us to improve our site.
        </p>
        <p>
          We use strictly necessary cookies (required for the site to function)
          and, where you have given consent, analytics cookies that help us
          understand how visitors interact with our content. You can manage
          your cookie preferences through your browser settings at any time.
        </p>
      </>
    ),
  },
  {
    title: "5. Data Sharing",
    body: (
      <>
        <p>
          We do not sell your personal data. We may share your data with the
          following categories of recipients where necessary:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> — trusted third parties that
            help us operate our website, deliver our services, and run our
            business (for example, hosting, email delivery, and analytics
            providers). All such providers are bound by confidentiality and
            data-processing obligations.
          </li>
          <li>
            <strong>Professional advisers</strong> — including our lawyers,
            accountants, and insurers, where required.
          </li>
          <li>
            <strong>Regulators and authorities</strong> — where we are legally
            required to do so.
          </li>
          <li>
            <strong>Successors in business</strong> — in the event of a
            merger, acquisition, or sale of assets, your data may be
            transferred to a successor entity.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. International Transfers",
    body: (
      <>
        <p>
          Some of our service providers may be located outside the UK or EEA.
          Where personal data is transferred internationally, we ensure that
          appropriate safeguards are in place, such as Standard Contractual
          Clauses approved by the European Commission and the UK ICO, or
          transfers to jurisdictions that have been deemed adequate.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    body: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes for which we collected it, including to satisfy any legal,
          accounting, or reporting requirements. Enquiry data is typically
          retained for up to 24 months. Client engagement data is retained for
          the duration of the engagement plus a statutory minimum period for
          accounting and tax purposes.
        </p>
      </>
    ),
  },
  {
    title: "8. Your Rights",
    body: (
      <>
        <p>
          Depending on your jurisdiction, you have a number of rights in
          relation to your personal data, including the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request erasure of your data in certain circumstances.</li>
          <li>Object to or restrict processing of your data.</li>
          <li>Request portability of your data.</li>
          <li>Withdraw consent at any time where processing is based on consent.</li>
          <li>
            Lodge a complaint with a supervisory authority (for example, the
            UK Information Commissioner's Office at ico.org.uk).
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:hello@beeancy.com"
            className="text-gradient-accent"
          >
            hello@beeancy.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "9. Security",
    body: (
      <>
        <p>
          We take the security of your personal data seriously. We have put in
          place appropriate technical and organisational measures designed to
          protect your data against unauthorised or unlawful processing,
          accidental loss, destruction, or damage. These include encryption in
          transit, access controls, regular backups, and ongoing staff
          training.
        </p>
      </>
    ),
  },
  {
    title: "10. Children",
    body: (
      <>
        <p>
          Our website and services are not directed to individuals under the age
          of 16, and we do not knowingly collect personal data from children.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to This Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or applicable law. The latest version will
          always be available on this page, with the "Last updated" date at the
          top. Material changes will be communicated where required by law.
        </p>
      </>
    ),
  },
  {
    title: "12. Contact Us",
    body: (
      <>
        <p>
          If you have any questions about this Privacy Policy or our handling
          of your personal data, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@beeancy.com"
              className="text-gradient-accent"
            >
              hello@beeancy.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+442039431213" className="text-gradient-accent">
              020 3943 1213
            </a>
          </li>
          <li>
            <strong>Post:</strong> London, United Kingdom
          </li>
        </ul>
      </>
    ),
  },
];

function PolicySection({
  section,
  index,
}: {
  section: (typeof SECTIONS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-12 gap-6 py-7 md:py-9 border-t border-stroke"
    >
      <div className="col-span-12 md:col-span-3">
        <h2 className="font-display text-2xl text-text leading-tight tracking-tight">
          {section.title}
        </h2>
      </div>
      <div className="col-span-12 md:col-span-9 text-muted text-base leading-relaxed [&_p+p]:mt-4 [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-6 [&_strong]:text-text [&_a]:text-text">
        {section.body}
      </div>
    </motion.section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy{" "}
            <span className="font-serif italic text-gradient-accent">policy</span>.
          </>
        }
        subtitle="How Beeancy AI Marketing collects, uses, and protects your personal data — written in plain English and in line with UK, EU, and US privacy requirements."
        backgroundImage="/futuristic_background_5.jpg"
      />
      <section className="relative bg-bg px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-6 border-t border-stroke">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted">
              Last updated: {LAST_UPDATED}
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted">
              UK · EU · US Compliant
            </div>
          </div>
          {SECTIONS.map((s, i) => (
            <PolicySection key={s.title} section={s} index={i} />
          ))}
          <div className="border-t border-stroke pt-8 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 text-small text-text hover:text-gradient-accent transition-colors"
            >
              <span>Read our Terms & Conditions</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 9L9 3M9 3H4M9 3V8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-bg text-small font-medium hover:bg-beeancy-blue hover:text-bg transition-colors"
            >
              <span>Ask a question</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
