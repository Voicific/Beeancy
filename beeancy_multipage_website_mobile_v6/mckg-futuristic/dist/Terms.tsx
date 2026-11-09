import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PageHero from "../components/PageHero";

const LAST_UPDATED = "30 July 2026";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms & Conditions ("Terms") govern your access to and use of
          the website located at beeancy.com (the "Site") and the services
          offered by Beeancy AI Marketing ("Beeancy", "we", "us", or "our").
          By accessing the Site, engaging our services, or otherwise indicating
          your acceptance, you agree to be bound by these Terms. If you do not
          agree, you must not access or use the Site or our services.
        </p>
      </>
    ),
  },
  {
    title: "2. Services Description",
    body: (
      <>
        <p>
          Beeancy provides AI-powered digital marketing services including, but
          not limited to: social media management, content creation, AI lead
          generation, paid advertising, email marketing, web design and
          development, voice AI solutions, media buying, copywriting, and
          related strategic and creative services. The specific scope, pricing,
          deliverables, and timelines for any engagement will be set out in a
          separate written agreement, statement of work, or proposal between
          Beeancy and the client.
        </p>
      </>
    ),
  },
  {
    title: "3. Eligibility and User Obligations",
    body: (
      <>
        <p>
          You represent and warrant that you are at least 18 years of age and
          have the legal capacity and authority to enter into these Terms. When
          using the Site or our services, you agree not to:
        </p>
        <ul>
          <li>Violate any applicable law, regulation, or third-party right.</li>
          <li>
            Submit content that is unlawful, infringing, defamatory, obscene,
            or otherwise objectionable.
          </li>
          <li>
            Attempt to gain unauthorised access to the Site, related systems,
            or networks.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Site
            or any data contained therein.
          </li>
          <li>
            Use the Site to transmit viruses, malware, or any other harmful
            code.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Intellectual Property",
    body: (
      <>
        <p>
          All content on this Site — including text, graphics, logos, icons,
          images, audio, video, downloads, data compilations, software, and the
          overall look and feel — is the property of Beeancy, our licensors, or
          our partners and is protected by United Kingdom and international
          copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          You may view, download, and print content from the Site for your
          personal, non-commercial use, provided you keep all copyright and
          other proprietary notices intact. Any other use, including
          reproduction, modification, distribution, transmission, republication,
          display, or performance, is strictly prohibited without our prior
          written consent.
        </p>
        <p>
          For client engagements, intellectual property ownership of delivered
          work product is governed by the applicable client agreement. Unless
          expressly stated otherwise, Beeancy retains ownership of all
          pre-existing tools, frameworks, methodologies, and AI models used in
          the delivery of services.
        </p>
      </>
    ),
  },
  {
    title: "5. Third-Party Links and Services",
    body: (
      <>
        <p>
          The Site may contain links to third-party websites, services, or
          resources that are not owned or controlled by Beeancy. These links
          are provided for your convenience only. We do not endorse and are
          not responsible for the availability, accuracy, content, or
          practices of any third-party sites or services. Your use of such
          third-party resources is at your own risk.
        </p>
      </>
    ),
  },
  {
    title: "6. Disclaimers",
    body: (
      <>
        <p>
          The Site and its content are provided on an "as is" and "as
          available" basis, without any warranties of any kind, express or
          implied, including but not limited to warranties of merchantability,
          fitness for a particular purpose, non-infringement, or accuracy.
        </p>
        <p>
          Beeancy does not warrant that the Site will be uninterrupted,
          error-free, secure, or free of viruses or other harmful components,
          or that defects will be corrected.
        </p>
        <p>
          Any marketing results, case studies, statistics, testimonials, or
          performance metrics shown on the Site or in our marketing materials
          are illustrative of past work and are not a guarantee of future
          results. Outcomes vary based on numerous factors, including market
          conditions, budget, industry, and execution.
        </p>
      </>
    ),
  },
  {
    title: "7. Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by applicable law, in no event shall
          Beeancy, its directors, employees, partners, agents, or affiliates be
          liable for any indirect, incidental, special, consequential, or
          punitive damages — including, without limitation, loss of profits,
          data, use, goodwill, or other intangible losses — arising out of or
          in connection with your use of, or inability to use, the Site or our
          services.
        </p>
        <p>
          In jurisdictions that do not allow the exclusion or limitation of
          certain damages, our liability will be limited to the maximum extent
          permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "8. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Beeancy and its
          officers, directors, employees, and agents from and against any and
          all claims, damages, obligations, losses, liabilities, costs, or
          expenses (including reasonable legal fees) arising from your use of
          the Site, your breach of these Terms, or your violation of any
          third-party right.
        </p>
      </>
    ),
  },
  {
    title: "9. Termination",
    body: (
      <>
        <p>
          We may suspend or terminate your access to the Site at any time,
          without notice, for conduct that we believe violates these Terms or
          is otherwise harmful to other users, us, or third parties. Provisions
          of these Terms that by their nature should survive termination —
          including but not limited to ownership provisions, warranty
          disclaimers, indemnification, and limitations of liability — will
          survive any termination.
        </p>
      </>
    ),
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    body: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the
          laws of England and Wales, without regard to its conflict of law
          principles. Any dispute arising out of or in connection with these
          Terms, including any question regarding its existence, validity, or
          termination, shall be referred to and finally resolved by the courts
          of England and Wales.
        </p>
        <p>
          Nothing in this section limits your right to bring proceedings in
          your local jurisdiction where applicable mandatory consumer laws
          apply.
        </p>
      </>
    ),
  },
  {
    title: "11. Changes to These Terms",
    body: (
      <>
        <p>
          We may update these Terms from time to time to reflect changes in
          our practices, services, or applicable law. The latest version will
          always be available on this page, with the "Last updated" date at
          the top. Material changes will be communicated where required by
          law. Your continued use of the Site after any changes constitutes
          your acceptance of the new Terms.
        </p>
      </>
    ),
  },
  {
    title: "12. Contact",
    body: (
      <>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@beeancy.com"
              className="text-text"
            >
              hello@beeancy.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+442039431213" className="text-text">
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

function TermsSection({
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

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms &{" "}
            <span className="font-serif italic text-gradient-accent">conditions</span>.
          </>
        }
        subtitle="The rules of the road for using our website and engaging our services. Plain English, fair, and built to be enforceable."
        backgroundImage="/futuristic_background_8.jpg"
      />
      <section className="relative bg-bg px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-6 border-t border-stroke">
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted">
              Last updated: {LAST_UPDATED}
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted">
              Governed by the laws of England and Wales
            </div>
          </div>
          {SECTIONS.map((s, i) => (
            <TermsSection key={s.title} section={s} index={i} />
          ))}
          <div className="border-t border-stroke pt-8 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-2 text-small text-text hover:text-gradient-accent transition-colors"
            >
              <span>Read our Privacy Policy</span>
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
