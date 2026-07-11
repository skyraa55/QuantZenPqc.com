import { Fragment, useEffect, useMemo, useRef } from "react";

const defaultNodes = [
  { id: "app",     title: "Your App",     detail: "client · service", label: "No changes needed", icon: "ti-device-laptop", highlight: false },
  { id: "qz",      title: "QuantZen™",    detail: "middleware",       label: "Encrypts in transit", icon: "ti-shield-lock",   highlight: true  },
  { id: "gateway", title: "API Gateway",  detail: "existing infra",  label: "Unchanged",          icon: "ti-server",         highlight: false },
  { id: "backend", title: "Your Backend", detail: "services · DBs",  label: "No changes needed", icon: "ti-database",       highlight: false },
];

export default function ArchDiagram({ nodes: nodesProp }) {
  const nodes = nodesProp || defaultNodes;
  const nodeRefs = useRef([]);
  const lineRefs = useRef([]);
  const dotRefs = useRef([]);

  useEffect(() => {
    const HOLD = 550, TRAVEL = 500, PAUSE = 900;
    const last = nodes.length - 1;

    function clearAll() {
      nodeRefs.current.forEach(n => n?.classList.remove("lit"));
      lineRefs.current.forEach(l => l?.classList.remove("lit"));
      dotRefs.current.forEach(d => d?.classList.remove("run"));
    }

    function step(i) {
      nodeRefs.current[i]?.classList.add("lit");
      if (i < last) {
        setTimeout(() => {
          lineRefs.current[i]?.classList.add("lit");
          dotRefs.current[i]?.classList.add("run");
          setTimeout(() => step(i + 1), TRAVEL);
        }, HOLD);
      } else {
        setTimeout(() => { clearAll(); setTimeout(() => step(0), 200); }, PAUSE);
      }
    }

    const t = setTimeout(() => step(0), 500);
    return () => clearTimeout(t);
  }, [nodes]);

  const gridTemplateColumns = useMemo(() => {
    const cols = [];
    nodes.forEach((_, i) => {
      cols.push("minmax(0, 1fr)");
      if (i < nodes.length - 1) cols.push("clamp(14px, 3vw, 40px)");
    });
    return cols.join(" ");
  }, [nodes]);

  return (
    <>
      <style>{`
        @keyframes archBlob { 0%,100%{transform:scale(1)} 50%{transform:scale(1.12);opacity:.65} }
        @keyframes archDotH { 0%{ left:2%; opacity:0; } 8%{ opacity:1; } 92%{ opacity:1; } 100%{ left:96%; opacity:0; } }
        @keyframes archDotV { 0%{ top:4%; opacity:0; } 8%{ opacity:1; } 92%{ opacity:1; } 100%{ top:94%; opacity:0; } }
        @keyframes archRing { 0%,100%{ box-shadow:0 0 0 0 rgba(109,94,245,0.28), 0 0 0 4px rgba(109,94,245,0.10); } 50%{ box-shadow:0 0 0 5px rgba(109,94,245,0.14), 0 0 0 9px rgba(34,211,238,0.08); } }

        .arch-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          margin-top: 2.5rem;
          background: linear-gradient(160deg,#f7f8fc 0%,#fbfbfe 55%,#ffffff 100%);
          border: 1px solid #E9EAF3;
          padding: clamp(28px, 6vw, 44px) clamp(18px, 5vw, 36px) clamp(24px, 4vw, 36px);
          box-sizing: border-box;
          font-family: inherit;
        }

        .arch-eyebrow {
          position: relative;
          z-index: 10;
          margin-bottom: clamp(24px, 5vw, 36px);
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #6D5EF5;
        }
        .arch-eyebrow::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(109,94,245,0.35), transparent);
        }

        .arch-row {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-rows: auto auto;
          align-items: stretch;
          row-gap: 12px;
          justify-content: center;
        }

        /* ---- Card ---- */
        .arch-node-box {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: clamp(14px, 2.6vw, 20px) clamp(6px, 1.8vw, 14px) clamp(12px, 2.2vw, 16px);
          border-radius: 18px;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid #E9EAF3;
          box-shadow: 0 1px 2px rgba(23,24,60,0.03);
          box-sizing: border-box;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .arch-node-box.highlight {
          border-color: rgba(109,94,245,0.28);
          background: linear-gradient(165deg, rgba(109,94,245,0.05), rgba(34,211,238,0.04) 60%, #ffffff 100%);
        }
        .arch-node-box.lit {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(109,94,245,0.16);
        }
        .arch-node-box.highlight.lit {
          animation: archRing 1.8s ease-in-out infinite;
          border-color: rgba(109,94,245,0.55);
        }

        .arch-index {
          position: absolute;
          top: 10px;
          left: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #C3C6D9;
        }
        .arch-node-box.highlight .arch-index { color: rgba(109,94,245,0.55); }

        .arch-badge {
          position: absolute;
          top: 9px;
          right: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 999px;
          padding: 3px 7px;
          color: #ffffff;
          background: linear-gradient(120deg,#6D5EF5,#22D3EE);
          white-space: nowrap;
        }

        .arch-icon {
          width: clamp(34px, 7vw, 42px);
          height: clamp(34px, 7vw, 42px);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: clamp(6px, 2vw, 10px) auto 10px;
          font-size: clamp(15px, 3.2vw, 18px);
          line-height: 1;
          background: #F1F2F9;
          border: 1px solid #E9EAF3;
          flex-shrink: 0;
          transition: background .35s ease, border-color .35s ease;
        }
        .arch-node-box.highlight .arch-icon {
          background: linear-gradient(135deg, rgba(109,94,245,0.14), rgba(34,211,238,0.12));
          border-color: rgba(109,94,245,0.25);
        }
        .arch-icon i { color: #4B4FDB; }
        .arch-node-box:not(.highlight) .arch-icon i { color: #6B7280; }

        /* Hard clamp: title/detail can NEVER overflow the card, regardless of content length */
        .arch-name {
          width: 100%;
          font-size: clamp(12px, 2.4vw, 13px);
          font-weight: 700;
          color: #161B33;
          letter-spacing: -0.01em;
          line-height: 1.28;
          overflow-wrap: anywhere;
        }

        .arch-mono {
          width: 100%;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: clamp(9px, 2vw, 10px);
          color: #9CA1B5;
          margin-top: 4px;
          line-height: 1.4;
          overflow-wrap: anywhere;
        }

        /* ---- Caption pill ---- */
        .arch-caption {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 30px;
        }
        .arch-caption span {
          overflow-wrap: anywhere;
          font-size: 10.5px;
          font-weight: 600;
          line-height: 1.3;
          padding: 5px 10px;
          border-radius: 999px;
          max-width: 100%;
          box-sizing: border-box;
        }
        .arch-caption.neutral span {
          color: #8B8FA3;
          background: #F1F2F7;
        }
        .arch-caption.highlight span {
          color: #4B4FDB;
          background: linear-gradient(120deg, rgba(109,94,245,0.10), rgba(34,211,238,0.10));
        }

        /* ---- Connector ---- */
        .arch-arrow-cell {
          align-self: stretch;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arch-arrow-line {
          position: relative;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background: repeating-linear-gradient(90deg, #D9DCEA 0 6px, transparent 6px 11px);
          transition: background .3s ease;
        }
        .arch-arrow-line.lit {
          background: linear-gradient(90deg, #6D5EF5, #22D3EE);
        }
        .arch-arrow-dot {
          position: absolute;
          top: 50%;
          left: 2%;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #22D3EE;
          box-shadow: 0 0 8px 2px rgba(34,211,238,0.7);
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        .arch-arrow-dot.run { animation: archDotH 0.5s ease forwards; }

        @media (max-width: 640px) {
          .arch-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            row-gap: 0;
          }
          .arch-node-box { min-height: 148px; }
          .arch-arrow-cell {
            height: 34px;
            width: 100%;
          }
          .arch-arrow-line {
            width: 2px;
            height: 100%;
            margin: 0 auto;
            background: repeating-linear-gradient(180deg, #D9DCEA 0 6px, transparent 6px 11px);
          }
          .arch-arrow-line.lit {
            background: linear-gradient(180deg, #6D5EF5, #22D3EE);
          }
          .arch-arrow-dot { left: 50%; top: 4%; }
          .arch-arrow-dot.run { animation: archDotV 0.5s ease forwards; }
        }
      `}</style>

      <div className="arch-wrap">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full"
          style={{ background:"radial-gradient(circle,rgba(109,94,245,0.10) 0%,transparent 70%)",
            animation:"archBlob 4.5s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-44 w-44 rounded-full"
          style={{ background:"radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%)",
            animation:"archBlob 5.5s ease-in-out infinite reverse" }} />

        <p className="arch-eyebrow">Traffic flow</p>

        <div className="arch-row" style={{ gridTemplateColumns }}>
          {nodes.map((node, i) => {
            const col = i * 2 + 1;
            return (
              <Fragment key={node.id}>
                {i > 0 && (
                  <div className="arch-arrow-cell" style={{ gridColumn: col - 1, gridRow: 1 }}>
                    <div ref={el => (lineRefs.current[i - 1] = el)} className="arch-arrow-line" />
                    <div ref={el => (dotRefs.current[i - 1] = el)} className="arch-arrow-dot" />
                  </div>
                )}

                <div
                  ref={el => (nodeRefs.current[i] = el)}
                  className={`arch-node-box${node.highlight ? " highlight" : ""}`}
                  style={{ gridColumn: col, gridRow: 1 }}
                >
                  <span className="arch-index">{String(i + 1).padStart(2, "0")}</span>
                  {node.highlight && <span className="arch-badge">PQC</span>}
                  <div className="arch-icon">
                    <i className={`ti ${node.icon}`} />
                  </div>
                  <div className="arch-name" title={node.title}>{node.title}</div>
                  <div className="arch-mono" title={node.detail}>{node.detail}</div>
                </div>

                <div
                  className={`arch-caption ${node.highlight ? "highlight" : "neutral"}`}
                  style={{ gridColumn: col, gridRow: 2 }}
                >
                  <span title={node.label}>{node.label}</span>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}