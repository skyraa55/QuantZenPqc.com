import PageMeta from "../components/PageMeta";
import Eyebrow from "../components/Eyebrow";
import Card from "../components/Card";
import ArchDiagram from "../components/ArchDiagram";
import CtaBand from "../components/CtaBand";
import Wrap from "../components/Wrap";
import Section from "../components/Section";

const productArchNodes = [
  { title: "Application", detail: "client / mobile / service" },
  {
    title: "QuantZen™ Security Layer",
    detail: "SDK · interception · crypto · verify · policy · audit",
    highlight: true,
  },
  { title: "API Gateway", detail: "existing gateway" },
  { title: "Backend Systems", detail: "core unchanged" },
];

const gatewayChips = [
  "Kong",
  "NGINX",
  "Envoy",
  "Apigee",
  "AWS API Gateway",
  "Azure API Management",
];

const components = [
  {
    num: "/ 01",
    title: "API interception layer",
    body: "Transparently intercepts outbound and inbound API calls — including POST, PUT, and PATCH — and applies protection without blocking application flow. Selection is policy-driven, so unprotected endpoints pass through cleanly.",
  },
  {
    num: "/ 02",
    title: "Endpoint SDK / middleware",
    body: "A lightweight library for Node.js, Python, and Java, or a sidecar/gateway proxy. Embeds at the boundary and operates without modifying the host application.",
  },
  {
    num: "/ 03",
    title: "Post-quantum authentication",
    body: "Binds authenticity and integrity to every request with ML-DSA (Dilithium) digital signatures, so tampered or forged requests are rejected before processing.",
  },
  {
    num: "/ 04",
    title: "Post-quantum key establishment",
    body: "Establishes session secrets with ML-KEM (Kyber) key encapsulation, with ephemeral keys held only in volatile memory and destroyed at session end.",
  },
  {
    num: "/ 05",
    title: "Payload integrity verification",
    body: "Authenticated encryption (ChaCha20-Poly1305 / AES-256-GCM) protects the payload itself, detecting any modification in transit — not just on the transport hop.",
  },
  {
    num: "/ 06",
    title: "Verification engine",
    body: "Server-side middleware decrypts, verifies signatures, checks replay protections, and forwards clean plaintext to backend logic — or rejects and logs the request.",
  },
  {
    num: "/ 07",
    title: "Policy engine",
    body: "Centralized control over enabled algorithms, protected domains, threat responses, and audit destinations — distributed across the estate as data, not code.",
  },
  {
    num: "/ 08",
    title: "Audit framework",
    body: "Generates a tamper-evident record for every protected request — timestamp, source, algorithm, verification result, and threat outcome — for regulatory evidence.",
  },
];

export default function Product() {
  return (
    <>
      <PageMeta title="Product" />

      {/* ── Section 1: Platform intro ── */}
      <Section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.14), rgba(186,230,253,0.2), transparent)",
          }}
        />
        <Wrap className="relative">
          <div className="flex flex-col items-center text-center mb-2">
            <span className="inline-flex items-center gap-[7px] text-[11px] font-semibold uppercase tracking-[.1em] text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-[5px] mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-indigo-500" />
              The platform
            </span>
            <h2 className="text-[34px] max-[860px]:text-[27px] font-bold text-gray-950 max-w-[760px] leading-snug">
              QuantZen™ — quantum-safe middleware for API communication.
            </h2>
            <p className="mt-4 max-w-[680px] text-lg text-slate-500 leading-relaxed">
              QuantZen is a modular security layer that intercepts API traffic,
              applies post-quantum confidentiality and authenticity, verifies
              every request before it reaches your systems, and records an
              immutable audit trail — all without changing the systems it
              protects.
            </p>
          </div>
          <ArchDiagram nodes={productArchNodes} chips={gatewayChips} spaced />
        </Wrap>
      </Section>

      {/* ── Section 2: Platform components ── */}
      <Section className="bg-white">
        <Wrap>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-[7px] text-[11px] font-semibold uppercase tracking-[.1em] text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-[5px] mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-indigo-500" />
              Platform components
            </span>
            <h2 className="text-[34px] max-[860px]:text-[27px] font-bold text-gray-950 max-w-[760px] leading-snug">
              Eight components, one cohesive layer.
            </h2>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-4 max-[860px]:grid-cols-1">
            {components.map((c) => (
              <div
                key={c.num}
                className="bg-white border border-[#eaeaf2] rounded-2xl p-7 hover:border-indigo-200 hover:shadow-[0_2px_20px_rgba(99,102,241,.07)] transition-all"
              >
                <div className="font-mono text-[11px] font-bold tracking-[.1em] text-[#dedee8] mb-4">
                  {c.num}
                </div>
                <h3 className="text-[15px] font-bold text-gray-950 mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-[1.65]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* ── Section 3: Integration + CTA ── */}
      <Section className="bg-white">
        <Wrap>
          <div className="flex flex-col items-center text-center mb-10">
            <span className="inline-flex items-center gap-[7px] text-[11px] font-semibold uppercase tracking-[.1em] text-indigo-500 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-[5px] mb-5">
              <span className="w-[5px] h-[5px] rounded-full bg-indigo-500" />
              Integration
            </span>
            <h2 className="text-[34px] max-[860px]:text-[27px] font-bold text-gray-950 max-w-[760px] leading-snug">
              Built to sit beside your stack, not inside it.
            </h2>
            <p className="mt-4 max-w-[680px] text-lg text-slate-500 leading-relaxed">
              QuantZen integrates with the API gateways and infrastructure you
              already operate. It runs as a stateless layer at the boundary, so
              traffic continues to flow through your existing gateway to
              unchanged backend services. Adoption is incremental — protect one
              domain or route first, then expand by policy.
            </p>
          </div>

          <CtaBand
            heading="Map QuantZen to your architecture."
            body="We'll review your gateway, protocols, and payload formats and show exactly where the layer fits."
            ctaLabel="Talk to our engineers →"
          />
        </Wrap>
      </Section>
    </>
  );
}