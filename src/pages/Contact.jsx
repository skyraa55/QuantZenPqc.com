import { useState } from "react";
import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const contactItems = [
  {
    title: "Product demonstrations",
    body: "See interception, post quantum protection, verification, and audit on a live request.",
  },
  {
    title: "Partnership inquiries",
    body: "Integrate QuantZen with gateways, platforms, and security ecosystems.",
  },
  {
    title: "Pilot programs",
    body: "Run a ring fenced proof of concept against your own traffic and SLAs.",
  },
  {
    title: "Technical workshops",
    body: "Deep dive sessions on post quantum migration and cryptographic agility with your engineers.",
  },
  {
    title: "Enterprise deployments",
    body: "Plan a phased rollout across on premise, cloud, and hybrid environments.",
  },
];

const fieldInputClass =
  "w-full rounded-[9px] border border-slate-200 bg-white px-[13px] py-2.75 font-body text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]";

// Same faint lattice-point field used on the About page, so the two pages
// read as one system rather than two different themes.
function LatticeFieldLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(79,70,229,0.14) 1px, transparent 0)",
        backgroundSize: "28px 28px",
        WebkitMaskImage:
          "radial-gradient(55% 55% at 30% 10%, black 0%, transparent 75%)",
        maskImage:
          "radial-gradient(55% 55% at 30% 10%, black 0%, transparent 75%)",
      }}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    organization: "",
    email: "",
    interest: "A product demonstration",
    context: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    // No backend is wired up yet — connect this handler to your CRM or
    // email service to actually receive submissions.
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta title="Contact" />

      <Section className="bg-white">
        <Wrap>
          <div className="relative overflow-hidden px-6 py-20 sm:px-10">
            <LatticeFieldLight />

            <div className="relative">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-indigo-500">
                Contact
              </span>
              <h2 className="mt-3.5 max-w-[760px] text-[34px] font-semibold leading-[1.2] tracking-tight text-slate-900 max-[860px]:text-[27px]">
                Let&rsquo;s protect your API traffic before the{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg,#6366f1,#a5b4fc,#7dd3fc)", backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}>
                purpose
               </span>{" "}
                clock runs out.
              </h2>
              <p className="mt-4.5 max-w-[680px] text-lg text-slate-500">
                Whether you&rsquo;re securing a payment network, a telecom
                gateway, or an enterprise API estate, our team will meet you
                where your architecture is.
              </p>

              <div className="mt-7.5 grid grid-cols-[1.1fr_1fr] gap-10 max-[860px]:grid-cols-1">
                <div>
                  {contactItems.map((item) => (
                    <div
                      className="group border-b border-slate-200 py-4.5 transition-colors"
                      key={item.title}
                    >
                      <h4 className="mb-1 flex items-center gap-2 text-base font-semibold text-slate-900">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 transition-colors group-hover:bg-indigo-500" />
                        {item.title}
                      </h4>
                      <p className="pl-3.5 text-sm text-slate-500">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-7.5 shadow-sm">
                  <h3 className="mb-1.5 text-[19px] font-semibold text-slate-900">
                    Start a conversation
                  </h3>
                  <p className="mb-5 text-sm text-slate-500">
                    For banks, telecom operators, enterprises, and technology
                    partners.
                  </p>

                  <div className="mb-3.5">
                    <label className="mb-1.5 block font-mono text-[12.5px] text-slate-500">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={form.organization}
                      onChange={handleChange("organization")}
                      className={fieldInputClass}
                    />
                  </div>
                  <div className="mb-3.5">
                    <label className="mb-1.5 block font-mono text-[12.5px] text-slate-500">
                      Work email
                    </label>
                    <input
                      type="email"
                      placeholder="you@organization.com"
                      value={form.email}
                      onChange={handleChange("email")}
                      className={fieldInputClass}
                    />
                  </div>
                  <div className="mb-3.5">
                    <label className="mb-1.5 block font-mono text-[12.5px] text-slate-500">
                      I&rsquo;m interested in
                    </label>
                    <select
                      value={form.interest}
                      onChange={handleChange("interest")}
                      className={fieldInputClass}
                    >
                      <option>A product demonstration</option>
                      <option>A pilot program</option>
                      <option>A partnership</option>
                      <option>A technical workshop</option>
                      <option>An enterprise deployment</option>
                    </select>
                  </div>
                  <div className="mb-3.5">
                    <label className="mb-1.5 block font-mono text-[12.5px] text-slate-500">
                      Context
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Your gateway, protocols, and what you'd like to protect"
                      value={form.context}
                      onChange={handleChange("context")}
                      className={fieldInputClass}
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full justify-center text-white"
                  >
                    Request engagement →
                  </Button>

                  {submitted && (
                    <p className="mt-4 font-mono text-xs text-emerald-600">
                      Thank you. Connect this form to your CRM or email to
                      receive submissions.
                    </p>
                  )}

                  <p className="mt-4 font-mono text-xs text-slate-400">
                    Prefer email? Reach the team at support@quantzenpqc.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrap>
      </Section>
    </>
  );
}
