import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import ArchDiagram from "../components/ArchDiagram";
import CtaBand from "../components/CtaBand";
import Wrap from "../components/Wrap";
import Section from "../components/Section";
import AnimatedHero from "../components/AnimatedHero";
import {
  IconServerOff,
  IconCodeOff,
  IconShieldLock,
  IconRefresh,
  IconLockCheck,
  IconAtom,
} from "@tabler/icons-react";

const threatCards = [
  {
    icon: "HNDL",
    title: "Harvest now, decrypt later",
    body:
      "Adversaries are recording encrypted API traffic today, archiving it until quantum capability matures. Data with a long confidentiality life is already exposed in transit.",
  },
  {
    icon: "API",
    title: "The API is the trust boundary",
    body:
      "Open Banking, payments, provisioning, and microservices all move through API calls across many parties at machine speed. That boundary is where confidentiality and authenticity must hold.",
  },
  {
    icon: "⏱",
    title: "Migration can't wait for a flag day",
    body:
      "Rip-and-replace migration to new cryptography means new TLS stacks, HSMs, PKI, and rewritten applications — years of cost and risk most institutions cannot absorb.",
  },
];

const homeArchNodes = [
  { title: "Application", detail: "client / service" },
  { title: "QuantZen™ Layer", detail: "intercept · protect · verify", highlight: true },
  { title: "API Gateway", detail: "Kong · NGINX · Envoy" },
  { title: "Backend Systems", detail: "unchanged core" },
];

const valueProps = [
  { icon: <IconServerOff size={18} />, num: "01", title: "No infrastructure replacement", body: "Deploy alongside existing systems. No new PKI, HSM swap, or TLS-stack migration required." },
  { icon: <IconCodeOff size={18} />, num: "02", title: "Zero application modifications", body: "Protection happens at the boundary. Application code, schemas, and UI logic are untouched." },
  { icon: <IconShieldLock size={18} />, num: "03", title: "API interception & protection", body: "Requests are intercepted, signed, and encrypted at the payload level — beyond transport security alone." },
  { icon: <IconRefresh size={18} />, num: "04", title: "Cryptographic agility", body: "Rotate or upgrade algorithms by policy as standards evolve — no re-architecture, no rewrites." },
  { icon: <IconLockCheck size={18} />, num: "05", title: "Immutable audit logging", body: "Every protected request produces a tamper-evident, cryptographically chained audit record for compliance." },
  { icon: <IconAtom size={18} />, num: "06", title: "Future-ready by design", body: "Standardized post-quantum algorithms today, with a clear migration path for whatever NIST standardizes next." },
];

export default function Home() {
  return (
    <>
      <PageMeta title="Home" />

      <AnimatedHero />

      <Section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.16), rgba(186,230,253,0.22), transparent)",
          }}
        />
        <Wrap className="relative">
          <div className="mx-auto max-w-[700px] text-center">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-indigo-500">
              The quantum clock is already running
            </span>
            <h2
              className="mt-3.5 text-[30px] max-[860px]:text-[24px]"
              style={{ color: "#16181d" }}
            >
              Encrypted today. Exposed tomorrow.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The cryptography protecting your APIs — RSA and elliptic-curve —
              was never designed to withstand a quantum computer. A
              sufficiently capable machine running Shor&rsquo;s algorithm
              breaks the public-key foundations of TLS. The threat does not
              wait for that machine to arrive.
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-3 gap-5 max-[860px]:grid-cols-1">
            {threatCards.map((c) => (
              <Card
                key={c.title}
                title={c.title}
                className="border-slate-200/80 bg-white bg-none shadow-[0_4px_18px_rgba(99,102,241,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(99,102,241,0.14)] [&_h3]:text-[#16181d] [&_p]:!text-slate-600"
              >
                <div
                  className="mb-4 inline-flex items-center rounded-md px-2.5 py-1 font-mono text-[11px] tracking-[0.05em] text-indigo-600"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(186,230,253,0.35))",
                  }}
                >
                  {c.icon}
                </div>
                <p>{c.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </Section>
      <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[700px] px-6 py-20">
        <div className="mx-auto max-w-[700px] text-center">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.18em] uppercase"
            style={{
              background: "rgba(186,230,253,0.55)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#4338ca",
            }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "rgba(99,102,241,0.8)" }} />
            What QuantZen does
          </span>

          <h2
            className="mt-5 text-[30px] font-medium leading-snug tracking-tight max-[860px]:text-[24px]"
            style={{ color: "#16181d" }}
          >
            A security layer that wraps<br className="hidden sm:block" /> what you already run.
          </h2>

        

          <p className="text-base leading-relaxed text-zinc-500">
            QuantZen™ sits at your API boundary and protects requests and
            responses with post-quantum cryptography in flight. Your
            applications, API gateways, and backend systems stay exactly as
            they are.
          </p>
        </div>

        <ArchDiagram nodes={homeArchNodes} />
      </div>
    </section>

     <Section className="bg-white">
  <Wrap>

    {/* Header */}
    <div className="flex flex-col items-center text-center mb-[52px]">
      <span className="inline-flex items-center gap-[7px] text-[11px] font-semibold uppercase tracking-[.1em] text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-[5px] mb-[18px]">
        <span className="w-[5px] h-[5px] rounded-full bg-indigo-500" />
        Why teams choose QuantZen
      </span>
      <h2 className="text-[33px] font-bold text-gray-950 leading-snug max-w-[540px]">
        Post-quantum security, without the rebuild.
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-4 mb-5">
      {valueProps.map((v) => (
        <Card key={v.title} icon={v.icon} num={v.num} title={v.title}>
          <p>{v.body}</p>
        </Card>
      ))}
    </div>

    {/* CTA */}
    <CtaBand
      className="mt-10"
      heading="See QuantZen protect a live API call."
      body="Walk through interception, post-quantum signing, verification, and audit against your own request formats."
      ctaLabel="Request a demo →"
    />

  </Wrap>
</Section>
    </>
  );
}