// import { useEffect, useRef } from "react";

// const PI2 = Math.PI * 2;


// const INK = [76, 48, 148];    // rich violet-purple — mandala linework
// const TEAL = [15, 118, 110];  // deep teal — secondary linework
// const GOLD = [214, 155, 68];  // saturated amber-gold — glow core + accent dots

// function rgba(c, a) {
//   return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
// }

// const FEATURE_CARDS = [
//   {
//     title: "FIPS 203 / 204",
//     desc: "NIST standardized ML KEM & ML DSA",
//   },
//   {
//     title: "Zero rewrites",
//     desc: "No application or gateway rewrites",
//   },
//   {
//     title: "Drop in middleware",
//     desc: "At your API boundary",
//   },
// ];

// function LockIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="4" y="11" width="16" height="9" rx="2" />
//       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//     </svg>
//   );
// }

// function FingerprintIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 3a6 6 0 0 0-6 6v2c0 3 1 5 1 5" />
//       <path d="M12 3a6 6 0 0 1 6 6v3c0 3-1 6-2 7" />
//       <path d="M9 9a3 3 0 0 1 6 0v3c0 4-2 6-2 6" />
//       <path d="M6 12c0 4 1.5 6.5 3 8" />
//       <path d="M15 21c1.5-1.5 3-4 3-8" />
//     </svg>
//   );
// }

// function BoltIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2" />
//     </svg>
//   );
// }

// function StatusCard() {
//   return (
//     <div style={styles.statusCard} className="hero-card hero-fade" data-delay="3">
//       <div style={styles.scTopRow}>
//         <span style={styles.scTopLabel}>Cryptographic Mode</span>
//         <span style={styles.scPill}>
//           <span style={styles.scPillDot} />
//           Hybrid PQC
//         </span>
//       </div>

//       <div style={styles.scStatsRow}>
//         <div style={styles.scStatBox}>
//           <p style={styles.scStatLabel}>LATENCY</p>
//           <p style={styles.scStatValue}>Sub-15ms</p>
//         </div>
//         <div style={styles.scStatBox}>
//           <p style={styles.scStatLabel}>MIGRATION</p>
//           <p style={styles.scStatValue}>Zero Rewrite</p>
//         </div>
//         <div style={styles.scStatBox}>
//           <p style={styles.scStatLabel}>COMPLIANCE</p>
//           <p style={styles.scStatValue}>RBI + NIST</p>
//         </div>
//       </div>

//       <div style={styles.scGateway}>
//         <div style={styles.scGatewayGlow} />
//         <p style={styles.scGatewayLabel}>GATEWAY STATUS</p>
//         <p style={styles.scGatewayTitle}>
//           <span style={styles.scLiveDot} />
//           Protected
//         </p>
//         <p style={styles.scGatewayDesc}>
//           Traffic is secured with quantum-resistant key exchange and device-bound identity.
//         </p>
//       </div>

//       <div style={styles.scFeatureRow} className="hero-feature-row">
//         <LockIcon />
//         <span style={styles.scFeatureText}>Key exchange hardened</span>
//       </div>
//       <div style={styles.scFeatureRow} className="hero-feature-row">
//         <FingerprintIcon />
//         <span style={styles.scFeatureText}>Device-bound identity</span>
//       </div>
//       <div style={styles.scFeatureRow} className="hero-feature-row">
//         <BoltIcon />
//         <span style={styles.scFeatureText}>Optimized for payments</span>
//       </div>
//     </div>
//   );
// }

// export default function AnimatedHero() {
//   const canvasRef = useRef(null);
//   const stateRef = useRef(null);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const reduced =
//       window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     const state = {
//       W: 0,
//       H: 0,
//       T: 0,
//       dust: Array.from({ length: 80 }, () => ({
//         x: Math.random(),
//         y: Math.random(),
//         vx: (Math.random() - 0.5) * 0.00014,
//         vy: (Math.random() - 0.5) * 0.00014,
//         r: Math.random() * 1.7 + 0.6,
//         a: Math.random() * 0.5 + 0.3,
//         ph: Math.random() * PI2,
//         c: Math.random() < 0.55 ? GOLD : INK,
//       })),
//       // Fixed (seeded once, not re-randomized per frame) scattered accent
//       // dots — biased toward the center so they cluster densely near the
//       // glow core and thin out toward the edge.
//       motes: Array.from({ length: 170 }, () => {
//         const rad = Math.pow(Math.random(), 1.8) * 0.95 + 0.03;
//         return {
//           rad,
//           ang: Math.random() * PI2,
//           size: Math.random() * 1.9 + 0.7,
//           gold: Math.random() < 0.5,
//           ph: Math.random() * PI2,
//         };
//       }),
//     };
//     stateRef.current = state;

//     function resize() {
//       const el = canvas.parentElement;
//       state.W = canvas.width = el ? el.offsetWidth : window.innerWidth;
//       state.H = canvas.height = el ? el.offsetHeight : window.innerHeight;
//     }
//     resize();

//     // Centered on the full hero canvas — the mandala now sits as a true
//     // centerpiece behind the whole layout instead of skewed toward the
//     // right-hand status card.
//     const cx = () => state.W * 0.5;
//     const cy = () => state.H * 0.38;

//     function drawBg() {
//       // Soft warm cream-to-lavender wash, matching the reference —
//       // never flat white. The mandala glow layers on top of this.
//       const g = ctx.createLinearGradient(0, 0, state.W, state.H);
//       g.addColorStop(0, "#fbf8f3");
//       g.addColorStop(0.55, "#f8f4ee");
//       g.addColorStop(1, "#f3f0f6");
//       ctx.fillStyle = g;
//       ctx.fillRect(0, 0, state.W, state.H);
//     }

//     // Draws one jagged concentric "star ring" — a many-point zigzag outline
//     // (alternating outer/inner radius), matching the ring linework visible
//     // in the reference. Several of these, stacked at increasing radii and
//     // slightly rotated relative to each other, build up the star-polygon
//     // look rather than smooth petal curves.
//     function drawStarRing(radius, points, innerRatio, rotation, color, alpha, width) {
//       ctx.save();
//       ctx.rotate(rotation);
//       ctx.beginPath();
//       for (let i = 0; i < points; i++) {
//         const aOuter = (i / points) * PI2;
//         const ox = radius * Math.cos(aOuter);
//         const oy = radius * Math.sin(aOuter);
//         if (i === 0) ctx.moveTo(ox, oy);
//         else ctx.lineTo(ox, oy);
//         const aInner = ((i + 0.5) / points) * PI2;
//         const ix = radius * innerRatio * Math.cos(aInner);
//         const iy = radius * innerRatio * Math.sin(aInner);
//         ctx.lineTo(ix, iy);
//       }
//       ctx.closePath();
//       ctx.strokeStyle = rgba(color, alpha);
//       ctx.lineWidth = width;
//       ctx.stroke();
//       ctx.restore();
//     }

//     // Rangoli / mandala centerpiece: a breathing warm glow at the core,
//     // several concentric jagged star-polygon rings (slowly counter-
//     // rotating relative to each other), fine radial spokes, and scattered
//     // accent dots that are dense and warm near the center, thinning out
//     // and cooling toward the edge.
//     function drawMandala() {
//       const x = cx(), y = cy();
//       // Slightly larger footprint so it reads as the clear centerpiece
//       // of the whole hero, not a small badge tucked to one side.
//       const unit = Math.min(state.W, state.H) * 0.32;
//       const slowSpin = state.T * 0.00025;

//       ctx.save();
//       ctx.translate(x, y);

//       // Concentric jagged star-polygon rings, each slightly rotated and
//       // slowly counter-rotating over time for gentle ambient motion.
//       const rings = [
//         { r: 0.22, pts: 14, rot: 0 },
//         { r: 0.38, pts: 16, rot: 0.11 },
//         { r: 0.54, pts: 18, rot: -0.07 },
//         { r: 0.7, pts: 20, rot: 0.15 },
//         { r: 0.86, pts: 22, rot: -0.1 },
//         { r: 1.0, pts: 24, rot: 0.05 },
//       ];
//       rings.forEach((ring, i) => {
//         const dir = i % 2 === 0 ? 1 : -1;
//         drawStarRing(
//           ring.r * unit,
//           ring.pts,
//           0.86,
//           ring.rot + slowSpin * dir,
//           i % 2 === 0 ? INK : TEAL,
//           0.36 - i * 0.024,
//           1.3
//         );
//       });

//       // Fine radial spokes, subtle, like a lattice.
//       const spokes = 28;
//       const spInner = 0.1 * unit;
//       const spOuter = 1.02 * unit;
//       for (let i = 0; i < spokes; i++) {
//         const a = (i / spokes) * PI2 + slowSpin * 0.4;
//         ctx.beginPath();
//         ctx.strokeStyle = rgba(INK, 0.07);
//         ctx.lineWidth = 0.6;
//         ctx.moveTo(spInner * Math.cos(a), spInner * Math.sin(a));
//         ctx.lineTo(spOuter * Math.cos(a), spOuter * Math.sin(a));
//         ctx.stroke();
//       }

//       // Scattered accent dots — dense and warm gold near the core, thinning
//       // out and shifting toward the cooler ink tone further from center,
//       // each twinkling on its own phase.
//       state.motes.forEach((m) => {
//         const rad = m.rad * unit;
//         const nearCenter = 1 - m.rad;
//         const isGold = m.gold || nearCenter > 0.55;
//         const twinkle = 0.7 + 0.3 * Math.sin(state.T * 0.02 + m.ph);
//         const alpha = (isGold ? 0.35 + nearCenter * 0.5 : 0.18 + nearCenter * 0.2) * twinkle;
//         const a = m.ang + slowSpin * 0.6;
//         ctx.beginPath();
//         ctx.fillStyle = rgba(isGold ? GOLD : INK, Math.min(alpha, 0.9));
//         ctx.arc(rad * Math.cos(a), rad * Math.sin(a), m.size, 0, PI2);
//         ctx.fill();
//       });

//       ctx.restore();
//     }

//     function drawDust() {
//       state.dust.forEach((p) => {
//         p.x = (p.x + p.vx + 1) % 1;
//         p.y = (p.y + p.vy + 1) % 1;
//         const f = 0.55 + 0.45 * Math.sin(state.T * 0.012 + p.ph);
//         ctx.save();
//         ctx.globalAlpha = p.a * f;
//         ctx.fillStyle = rgba(p.c, 1);
//         ctx.beginPath();
//         ctx.arc(p.x * state.W, p.y * state.H, p.r, 0, PI2);
//         ctx.fill();
//         ctx.restore();
//       });
//     }

//     function frame() {
//       state.T++;
//       drawBg();
//       drawMandala();
//       drawDust();
//       rafRef.current = requestAnimationFrame(frame);
//     }

//     if (reduced) {
//       drawBg(); drawMandala(); drawDust();
//     } else {
//       rafRef.current = requestAnimationFrame(frame);
//     }

//     const handleResize = () => resize();
//     window.addEventListener("resize", handleResize);

//     // ResizeObserver catches container size changes that don't fire a
//     // window "resize" event (e.g. layout shifts, orientation changes,
//     // sidebar toggles) so the mandala always matches the actual box size.
//     let ro;
//     if (window.ResizeObserver && canvas.parentElement) {
//       ro = new ResizeObserver(() => resize());
//       ro.observe(canvas.parentElement);
//     }

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (ro) ro.disconnect();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   return (
//     <div style={styles.wrapper}>
//       <canvas ref={canvasRef} style={styles.canvas} />

//       <div style={styles.ui} className="hero-ui">
//         <div style={styles.heroGrid} className="hero-grid">
//           {/* Left column — headline, copy, CTA */}
//           <div style={styles.leftCol} className="hero-left-col">
//             {/* Patent badge */}
//             <div style={styles.patent} className="hero-fade" data-delay="0">
//               <span style={styles.pdot} className="pdot-anim" />
//               <span style={styles.pt}>Indian Patent Application Filed - 202641078837</span>
//             </div>

//             {/* Headline */}
//             <h1 style={styles.h1} className="hero-fade" data-delay="1">
//               THE SUSTAINABILITY TRUST
//               <br />
//               LAYER FOR THE POST-QUANTUM DIGITAL{" "}
//               <span
//                 className="inline-block bg-clip-text text-transparent shimmer-text"
//                 style={styles.gradientText}
//               >
//                 ECONOMY
//               </span>
//             </h1>

//             {/* Sub-copy */}
//             <p style={styles.sub} className="hero-fade hero-sub" data-delay="2">
//               The post quantum trust layer for digital infrastructure, enabling banks, telecom operators, and enterprises to adopt quantum safe cryptography without replacing existing systems by securing APIs and biometric authentication through a PQC agile architecture designed for quantum resilience.
//             </p>

//             {/* CTAs */}
//             <div style={styles.btns} className="hero-fade hero-btns" data-delay="3">
//               <button
//                 style={styles.bp}
//                 className="hero-btn"
//               >
//                 <span style={styles.bpShine} />
//                 Request a demo <span className="hero-btn-arrow">→</span>
//               </button>
//             </div>
//           </div>

//           {/* Right column — status card */}
//           <div style={styles.rightCol}>
//             <StatusCard />
//           </div>
//         </div>

//         {/* Trusted icon */}
//         <div style={styles.trustRow} className="hero-fade" data-delay="4">
//           <img src="/Trustedicon.png" alt="Trusted" style={styles.trustIcon} className="hero-trust-icon" />
//         </div>

//         {/* Badge row */}
//         <div style={styles.badgeRow} className="hero-fade hero-badge-row" data-delay="4">
//           <img
//             src="/PostQuantumReady.png"
//             alt="Post Quantum Ready"
//             style={styles.badgeImg}
//             className="hero-badge-img"
//           />
//           <img
//             src="/NoForkNoMigration.png"
//             alt="No Fork No Migration"
//             style={styles.badgeImg}
//             className="hero-badge-img"
//           />
//         </div>

//         {/* Feature cards */}
//         <div style={styles.cards} className="hero-cards">
//           {FEATURE_CARDS.map((card, i) => (
//             <div
//               key={i}
//               style={styles.card}
//               className="hero-card hero-fade"
//               data-delay={5 + i}
//             >
//               <p style={styles.cardTitle}>{card.title}</p>
//               <p style={styles.cardDesc}>{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.25; }
//         }
//         @keyframes shimmer {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes pulseDot {
//           0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
//           50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(255,255,255,0); }
//         }

//         .hero-fade {
//           opacity: 0;
//           animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards;
//         }
//         .hero-fade[data-delay="0"] { animation-delay: .05s; }
//         .hero-fade[data-delay="1"] { animation-delay: .16s; }
//         .hero-fade[data-delay="2"] { animation-delay: .28s; }
//         .hero-fade[data-delay="3"] { animation-delay: .4s; }
//         .hero-fade[data-delay="4"] { animation-delay: .52s; }
//         .hero-fade[data-delay="5"] { animation-delay: .62s; }
//         .hero-fade[data-delay="6"] { animation-delay: .7s; }
//         .hero-fade[data-delay="7"] { animation-delay: .78s; }

//         .shimmer-text {
//           background-size: 200% 100%;
//           animation: shimmer 3s linear infinite;
//         }

//         .hero-btn {
//           position: relative;
//           overflow: hidden;
//         }
//         .hero-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 14px 40px rgba(91,33,182,0.34), inset 0 1px 0 rgba(255,255,255,0.22);
//         }
//         .hero-btn:active {
//           transform: translateY(0);
//         }
//         .hero-btn-arrow {
//           display: inline-block;
//           transition: transform .25s ease;
//         }
//         .hero-btn:hover .hero-btn-arrow {
//           transform: translateX(4px);
//         }

//         .hero-card {
//           transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
//         }
//         .hero-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(91,33,182,0.28) !important;
//           box-shadow: 0 16px 40px rgba(91,33,182,0.14) !important;
//         }

//         .hero-feature-row {
//           transition: border-color .2s ease, background .2s ease;
//         }
//         .hero-feature-row:hover {
//           border-color: rgba(13,148,136,0.35);
//           background: rgba(13,148,136,0.04);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .pdot-anim { animation: none !important; opacity: 1 !important; }
//           .hero-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
//           .shimmer-text { animation: none !important; }
//         }

//         /* ── Responsive breakpoints ── */
//         @media (max-width: 860px) {
//           .hero-grid {
//             flex-direction: column !important;
//             text-align: center !important;
//             gap: 36px !important;
//           }
//           .hero-left-col {
//             text-align: center !important;
//           }
//           .hero-btns {
//             justify-content: center !important;
//           }
//           .hero-sub {
//             margin-left: auto !important;
//             margin-right: auto !important;
//           }
//         }

//         @media (max-width: 640px) {
//           .hero-badge-row {
//             gap: 16px !important;
//             transform: none !important;
//           }
//           .hero-cards {
//             transform: none !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .hero-grid {
//             gap: 24px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     width: "100%",
//     minHeight: "clamp(560px, 82vh, 760px)",
//     background: "#fbf8f3",
//     position: "relative",
//     overflow: "visible",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
//     paddingBottom: "clamp(40px, 8vw, 80px)",
//   },
//   canvas: {
//     position: "absolute",
//     inset: 0,
//     width: "100%",
//     height: "100%",
//     pointerEvents: "none",
//   },
//   ui: {
//     position: "relative",
//     zIndex: 3,
//     textAlign: "center",
//     padding: "clamp(32px, 6vw, 60px) clamp(16px, 4vw, 24px) 0",
//     maxWidth: "1180px",
//     width: "100%",
//   },
//   heroGrid: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "56px",
//     flexWrap: "wrap",
//     textAlign: "left",
//     marginBottom: "40px",
//   },
//   leftCol: {
//     flex: "1 1 460px",
//     minWidth: "min(320px, 100%)",
//     textAlign: "left",
//   },
//   rightCol: {
//     flex: "0 1 440px",
//     minWidth: "min(280px, 100%)",
//     display: "flex",
//     justifyContent: "center",
//   },
//   patent: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     padding: "5px 15px",
//     border: "1px solid rgba(180,131,25,0.28)",
//     borderRadius: "100px",
//     marginBottom: "28px",
//     background: "rgba(212,175,55,0.09)",
//   },
//   pdot: {
//     width: "5px",
//     height: "5px",
//     borderRadius: "50%",
//     background: "#b4831a",
//     display: "inline-block",
//     animation: "blink 2s ease-in-out infinite",
//   },
//   pt: {
//     fontSize: "10px",
//     fontWeight: 700,
//     letterSpacing: "0.13em",
//     textTransform: "uppercase",
//     color: "rgba(146,98,10,0.85)",
//   },
//   h1: {
//     fontSize: "clamp(28px, 4.6vw, 48px)",
//     fontWeight: 800,
//     lineHeight: 1.12,
//     letterSpacing: "-0.035em",
//     color: "#241b3d",
//     marginBottom: "22px",
//     margin: "0 0 22px 0",
//   },
//   gradientText: {
//     backgroundImage:
//       "linear-gradient(135deg,#5b21b6,#7c3aed,#0f766e,#5b21b6)",
//     backgroundSize: "200% 100%",
//   },
//   sub: {
//     fontSize: "clamp(14px, 1.7vw, 16px)",
//     color: "rgba(71,63,94,0.72)",
//     lineHeight: 1.82,
//     margin: "0 0 36px",
//     maxWidth: "540px",
//   },
//   btns: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     gap: "14px",
//     flexWrap: "wrap",
//     marginBottom: "8px"
//   },
//   bp: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     padding: "13px 30px",
//     borderRadius: "10px",
//     background: "linear-gradient(135deg,#5b21b6,#0f766e)",
//     color: "#fff",
//     fontSize: "13.5px",
//     fontWeight: 700,
//     letterSpacing: "0.02em",
//     cursor: "pointer",
//     border: "none",
//     boxShadow: "0 8px 28px rgba(91,33,182,0.22),inset 0 1px 0 rgba(255,255,255,0.16)",
//     transition: "transform .2s ease,box-shadow .2s ease",
//   },
//   bpShine: {
//     position: "absolute",
//     top: 0,
//     left: "-40%",
//     width: "30%",
//     height: "100%",
//     background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
//     transform: "skewX(-20deg)",
//     pointerEvents: "none",
//   },

//   /* ── Trusted icon (centered above the badge pair) ── */
//   trustRow: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "0px",
//     position: "relative",
//     zIndex: 10,
//   },
//   trustIcon: {
//     height: "clamp(70px, 14vw, 140px)",
//     width: "auto",
//     objectFit: "contain",
//   },

//   /* ── Badge row (side by side, gap between, centered as a pair) ── */
//   badgeRow: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "32px",
//     marginBottom: "2px",
//     position: "relative",
//     zIndex: 10,
//     transform: "translateY(-40%)",
//     flexWrap: "wrap",
//   },
//   badgeImg: {
//     height: "clamp(60px, 12vw, 120px)",
//     width: "auto",
//     objectFit: "contain",
//   },
//   /* ── Feature cards ── */
//   cards: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//     gap: "14px",
//     position: "relative",
//     zIndex: 10,
//     transform: "translateY(-20%)"
//   },
//   card: {
//     borderRadius: "16px",
//     padding: "20px 20px 22px",
//     textAlign: "left",
//     background: "rgba(255,255,255,0.6)",
//     border: "1px solid rgba(91,33,182,0.12)",
//     backdropFilter: "blur(12px)",
//     WebkitBackdropFilter: "blur(12px)",
//     boxShadow: "0 4px 20px rgba(91,33,182,0.06)",
//     cursor: "default",
//   },
//   cardTitle: {
//     fontSize: "16px",
//     fontWeight: 700,
//     color: "#241b3d",
//     margin: "0 0 7px",
//     padding: 0,
//     letterSpacing: "-0.02em",
//     lineHeight: 1.25,
//   },
//   cardDesc: {
//     fontSize: "12.5px",
//     color: "rgba(71,63,94,0.65)",
//     lineHeight: 1.6,
//     margin: 0,
//     padding: 0,
//   },

//   /* ── Right-side status card ── */
//   statusCard: {
//     width: "100%",
//     maxWidth: "420px",
//     background: "rgba(255,255,255,0.78)",
//     border: "1px solid rgba(91,33,182,0.10)",
//     borderRadius: "24px",
//     padding: "22px",
//     textAlign: "left",
//     backdropFilter: "blur(16px)",
//     WebkitBackdropFilter: "blur(16px)",
//     boxShadow: "0 20px 60px rgba(60,40,110,0.10)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   },
//   scTopRow: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     border: "1px solid rgba(91,33,182,0.14)",
//     borderRadius: "14px",
//     padding: "16px 18px",
//   },
//   scTopLabel: {
//     fontSize: "14.5px",
//     color: "#4b4560",
//     fontWeight: 500,
//   },
//   scPill: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "6px",
//     background: "#c9f0e6",
//     color: "#0d3b34",
//     fontSize: "12.5px",
//     fontWeight: 700,
//     padding: "6px 14px",
//     borderRadius: "100px",
//   },
//   scPillDot: {
//     width: "6px",
//     height: "6px",
//     borderRadius: "50%",
//     background: "#0d9488",
//     display: "inline-block",
//   },
//   scStatsRow: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "10px",
//   },
//   scStatBox: {
//     border: "1px solid rgba(91,33,182,0.14)",
//     borderRadius: "14px",
//     padding: "12px 8px",
//     textAlign: "center",
//   },
//   scStatLabel: {
//     fontSize: "9.5px",
//     fontWeight: 700,
//     letterSpacing: "0.08em",
//     textTransform: "uppercase",
//     color: "rgba(71,63,94,0.55)",
//     margin: "0 0 4px",
//   },
//   scStatValue: {
//     fontSize: "14px",
//     fontWeight: 700,
//     color: "#3b2170",
//     margin: 0,
//   },
//   scGateway: {
//     position: "relative",
//     background: "linear-gradient(135deg,#5b21b6,#0f766e)",
//     borderRadius: "16px",
//     padding: "18px 20px",
//     color: "#fff",
//     overflow: "hidden",
//   },
//   scGatewayGlow: {
//     position: "absolute",
//     top: "-40%",
//     right: "-20%",
//     width: "60%",
//     height: "160%",
//     background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
//     pointerEvents: "none",
//   },
//   scGatewayLabel: {
//     fontSize: "10.5px",
//     fontWeight: 700,
//     letterSpacing: "0.1em",
//     textTransform: "uppercase",
//     color: "rgba(255,255,255,0.75)",
//     margin: "0 0 6px",
//     position: "relative",
//   },
//   scGatewayTitle: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     fontSize: "22px",
//     fontWeight: 800,
//     margin: "0 0 8px",
//     position: "relative",
//   },
//   scLiveDot: {
//     width: "8px",
//     height: "8px",
//     borderRadius: "50%",
//     background: "#fff",
//     display: "inline-block",
//     animation: "pulseDot 1.8s ease-in-out infinite",
//   },
//   scGatewayDesc: {
//     fontSize: "13px",
//     lineHeight: 1.55,
//     color: "rgba(255,255,255,0.88)",
//     margin: 0,
//     position: "relative",
//   },
//   scFeatureRow: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     border: "1px solid rgba(91,33,182,0.12)",
//     borderRadius: "14px",
//     padding: "14px 16px",
//   },
//   scFeatureText: {
//     fontSize: "13.5px",
//     fontWeight: 500,
//     color: "#2b2340",
//   },
// };





















import { useEffect, useRef } from "react";

const PI2 = Math.PI * 2;

const ORBITS = [
  { rx: 200, ry: 66, tilt: 0,   spd: 0.0105, col: [56, 189, 248],  label: "TLS" },
  { rx: 240, ry: 80, tilt: 58,  spd: 0.0078, col: [129, 140, 248], label: "PQC" },
  { rx: 274, ry: 92, tilt: 116, spd: 0.0058, col: [52, 211, 153],  label: "SIG" },
];

const SHIELD_R = 46;

function rgba(c, a) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
}

function pt(rx, ry, deg, a) {
  const t = (deg * Math.PI) / 180;
  const lx = rx * Math.cos(a);
  const ly = ry * Math.sin(a);
  return [lx * Math.cos(t) - ly * Math.sin(t), lx * Math.sin(t) + ly * Math.cos(t)];
}

const FEATURE_CARDS = [
  {
    title: "FIPS 203 / 204",
    desc: "NIST standardized ML KEM & ML DSA",
  },
  {
    title: "Zero rewrites",
    desc: "No application or gateway rewrites",
  },
  {
    title: "Drop in middleware",
    desc: "At your API boundary",
  },
];

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function FingerprintIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0-6 6v2c0 3 1 5 1 5" />
      <path d="M12 3a6 6 0 0 1 6 6v3c0 3-1 6-2 7" />
      <path d="M9 9a3 3 0 0 1 6 0v3c0 4-2 6-2 6" />
      <path d="M6 12c0 4 1.5 6.5 3 8" />
      <path d="M15 21c1.5-1.5 3-4 3-8" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2" />
    </svg>
  );
}

function StatusCard() {
  return (
    <div style={styles.statusCard} className="hero-card hero-fade" data-delay="3">
      <div style={styles.scTopRow}>
        <span style={styles.scTopLabel}>Cryptographic Mode</span>
        <span style={styles.scPill}>
          <span style={styles.scPillDot} />
          Hybrid PQC
        </span>
      </div>

      <div style={styles.scStatsRow}>
        <div style={styles.scStatBox}>
          <p style={styles.scStatLabel}>LATENCY</p>
          <p style={styles.scStatValue}>Sub-15ms</p>
        </div>
        <div style={styles.scStatBox}>
          <p style={styles.scStatLabel}>MIGRATION</p>
          <p style={styles.scStatValue}>Zero Rewrite</p>
        </div>
        <div style={styles.scStatBox}>
          <p style={styles.scStatLabel}>COMPLIANCE</p>
          <p style={styles.scStatValue}>RBI + NIST</p>
        </div>
      </div>

      <div style={styles.scGateway}>
        <div style={styles.scGatewayGlow} />
        <p style={styles.scGatewayLabel}>GATEWAY STATUS</p>
        <p style={styles.scGatewayTitle}>
          <span style={styles.scLiveDot} />
          Protected
        </p>
        <p style={styles.scGatewayDesc}>
          Traffic is secured with quantum-resistant key exchange and device-bound identity.
        </p>
      </div>

      <div style={styles.scFeatureRow} className="hero-feature-row">
        <LockIcon />
        <span style={styles.scFeatureText}>Key exchange hardened</span>
      </div>
      <div style={styles.scFeatureRow} className="hero-feature-row">
        <FingerprintIcon />
        <span style={styles.scFeatureText}>Device-bound identity</span>
      </div>
      <div style={styles.scFeatureRow} className="hero-feature-row">
        <BoltIcon />
        <span style={styles.scFeatureText}>Optimized for payments</span>
      </div>
    </div>
  );
}

export default function AnimatedHero() {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      W: 0,
      H: 0,
      T: 0,
      lanes: ORBITS.map(() => ({
        packets: [
          { a: Math.random() * PI2, trail: [] },
          { a: Math.random() * PI2 + Math.PI, trail: [] },
        ],
      })),
      pulses: [],
      dust: Array.from({ length: 55 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00016,
        vy: (Math.random() - 0.5) * 0.00016,
        r: Math.random() * 0.85 + 0.25,
        a: Math.random() * 0.13 + 0.04,
        ph: Math.random() * PI2,
        c: Math.random() < 0.5 ? [56, 189, 248] : [129, 140, 248],
      })),
    };
    stateRef.current = state;

    function resize() {
      const el = canvas.parentElement;
      state.W = canvas.width = el ? el.offsetWidth : window.innerWidth;
      state.H = canvas.height = el ? el.offsetHeight : window.innerHeight;
      state.lanes.forEach((l) => l.packets.forEach((pk) => (pk.trail = [])));
    }
    resize();

    // Centered on the full hero canvas, matching the layout's centerpiece
    // position (slightly above vertical middle so it sits behind the
    // headline/status-card area).
    const cx = () => state.W * 0.5;
    const cy = () => state.H * 0.38;

    function drawBg() {
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, state.W, state.H);
      const g = ctx.createRadialGradient(
        cx(), cy(), 0,
        cx(), cy(), Math.min(state.W, state.H) * 0.6
      );
      g.addColorStop(0, "rgba(14,24,70,0.9)");
      g.addColorStop(0.5, "rgba(7,14,40,0.5)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, state.W, state.H);
    }

    function drawDust() {
      state.dust.forEach((p) => {
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
        const f = 0.5 + 0.5 * Math.sin(state.T * 0.014 + p.ph);
        ctx.save();
        ctx.globalAlpha = p.a * f;
        ctx.fillStyle = rgba(p.c, 1);
        ctx.beginPath();
        ctx.arc(p.x * state.W, p.y * state.H, p.r, 0, PI2);
        ctx.fill();
        ctx.restore();
      });
    }

    function drawShield(x, y) {
      const r = SHIELD_R + Math.sin(state.T * 0.02) * 2;
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = "rgba(186,230,253,0.28)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const a0 = (i / 6) * PI2 + state.T * 0.0015;
        const a1 = ((i + 1) / 6) * PI2 + state.T * 0.0015;
        ctx.beginPath();
        ctx.moveTo(r * Math.cos(a0), r * Math.sin(a0));
        ctx.lineTo(r * Math.cos(a1), r * Math.sin(a1));
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(56,189,248,0.14)";
      ctx.beginPath();
      for (let i = 0; i <= 6; i++) {
        const a = (i / 6) * PI2 - state.T * 0.001;
        const px = r * 0.7 * Math.cos(a);
        const py = r * 0.7 * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    function drawPulses(x, y) {
      const pulses = state.pulses;
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const age = state.T - p.startT;
        const life = 46;
        if (age > life) { pulses.splice(i, 1); continue; }
        const f = age / life;
        const r = SHIELD_R + f * 60;
        ctx.save();
        ctx.globalAlpha = (1 - f) * 0.55;
        ctx.strokeStyle = rgba(p.col, 1);
        ctx.lineWidth = 1.4 * (1 - f * 0.6);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, PI2);
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawOrbits() {
      const x = cx(), y = cy();
      ORBITS.forEach((o, i) => {
        const lane = state.lanes[i];

        ctx.save();
        ctx.strokeStyle = rgba(o.col, 0.1);
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (let j = 0; j <= 240; j++) {
          const a = (j / 240) * PI2;
          const [dx, dy] = pt(o.rx, o.ry, o.tilt, a);
          j === 0 ? ctx.moveTo(x + dx, y + dy) : ctx.lineTo(x + dx, y + dy);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        lane.packets.forEach((pk) => {
          const prevA = pk.a;
          pk.a += o.spd;

          const crossedTop = prevA % PI2 < Math.PI && pk.a % PI2 >= Math.PI;
          if (crossedTop) state.pulses.push({ startT: state.T, col: o.col });

          const [dx, dy] = pt(o.rx, o.ry, o.tilt, pk.a);
          const ex = x + dx, ey = y + dy;
          pk.trail.push({ x: ex, y: ey });
          if (pk.trail.length > 34) pk.trail.shift();

          const len = pk.trail.length;
          for (let j = 2; j < len; j++) {
            const f = j / len;
            ctx.save();
            ctx.globalAlpha = f * f * 0.8;
            ctx.strokeStyle = rgba(o.col, 1);
            ctx.lineWidth = f * f * 2.6;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(pk.trail[j - 1].x, pk.trail[j - 1].y);
            ctx.lineTo(pk.trail[j].x, pk.trail[j].y);
            ctx.stroke();
            ctx.restore();
          }

          const hg = ctx.createRadialGradient(ex, ey, 0, ex, ey, 13);
          hg.addColorStop(0, rgba(o.col, 0.5));
          hg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.save();
          ctx.fillStyle = hg;
          ctx.beginPath();
          ctx.arc(ex, ey, 13, 0, PI2);
          ctx.fill();
          ctx.restore();

          ctx.save();
          ctx.translate(ex, ey);
          ctx.rotate(pk.a * 1.4);
          const sg = ctx.createRadialGradient(-0.6, -0.6, 0, 0, 0, 4.5);
          sg.addColorStop(0, "rgba(255,255,255,1)");
          sg.addColorStop(0.55, rgba(o.col, 0.9));
          sg.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = sg;
          ctx.fillRect(-3.1, -3.1, 6.2, 6.2);
          ctx.restore();
        });
      });
    }

    function drawNucleus() {
      const x = cx(), y = cy();
      const p = 1 + 0.04 * Math.sin(state.T * 0.03);

      [[160, 0.012], [110, 0.022], [70, 0.045], [38, 0.1], [18, 0.22]].forEach(([r, a]) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r * p);
        g.addColorStop(0, `rgba(56,189,248,${a * 2})`);
        g.addColorStop(0.5, `rgba(99,102,241,${a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.save();
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r * p, 0, PI2);
        ctx.fill();
        ctx.restore();
      });

      drawPulses(x, y);
      drawShield(x, y);

      const cg = ctx.createRadialGradient(x - 3, y - 3, 0, x, y, 12 * p);
      cg.addColorStop(0, "rgba(255,255,255,1)");
      cg.addColorStop(0.3, "rgba(186,230,253,1)");
      cg.addColorStop(0.7, "rgba(56,189,248,0.9)");
      cg.addColorStop(1, "rgba(14,116,144,0.4)");
      ctx.save();
      ctx.fillStyle = cg;
      ctx.beginPath();
      ctx.arc(x, y, 12 * p, 0, PI2);
      ctx.fill();
      ctx.strokeStyle = "rgba(186,230,253,0.22)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(x, y, 20 * p, 0, PI2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = "rgba(3,7,18,0.55)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(0, -1, 4, Math.PI, 0, false);
      ctx.stroke();
      ctx.fillStyle = "rgba(3,7,18,0.55)";
      ctx.fillRect(-4.5, -1, 9, 6);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(56,189,248,0.09)";
      ctx.lineWidth = 0.5;
      ctx.setLineDash([6, 20]);
      ctx.lineDashOffset = -((state.T * 0.2) % 100);
      ctx.beginPath();
      ctx.arc(x, y, 310, 0, PI2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    function frame() {
      state.T++;
      drawBg();
      drawDust();
      drawOrbits();
      drawNucleus();
      rafRef.current = requestAnimationFrame(frame);
    }

    if (reduced) {
      drawBg(); drawDust(); drawOrbits(); drawNucleus();
    } else {
      rafRef.current = requestAnimationFrame(frame);
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    // ResizeObserver catches container size changes that don't fire a
    // window "resize" event (e.g. layout shifts, orientation changes,
    // sidebar toggles) so the animation always matches the actual box size.
    let ro;
    if (window.ResizeObserver && canvas.parentElement) {
      ro = new ResizeObserver(() => resize());
      ro.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (ro) ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <canvas ref={canvasRef} style={styles.canvas} />

      <div style={styles.ui} className="hero-ui">
        <div style={styles.heroGrid} className="hero-grid">
          {/* Left column — headline, copy, CTA */}
          <div style={styles.leftCol} className="hero-left-col">
            {/* Patent badge */}
            <div style={styles.patent} className="hero-fade" data-delay="0">
              <span style={styles.pdot} className="pdot-anim" />
              <span style={styles.pt}>Indian Patent Application Filed - 202641078837</span>
            </div>

            {/* Headline */}
            <h1 style={styles.h1} className="hero-fade" data-delay="1">
              THE SUSTAINABILITY TRUST
              <br />
              LAYER FOR THE POST-QUANTUM DIGITAL{" "}
              <span
                className="inline-block bg-clip-text text-transparent shimmer-text"
                style={styles.gradientText}
              >
                ECONOMY
              </span>
            </h1>

            {/* Sub-copy */}
            <p style={styles.sub} className="hero-fade hero-sub" data-delay="2">
              The post quantum trust layer for digital infrastructure, enabling banks, telecom operators, and enterprises to adopt quantum safe cryptography without replacing existing systems by securing APIs and biometric authentication through a PQC agile architecture designed for quantum resilience.
            </p>

            {/* CTAs */}
            <div style={styles.btns} className="hero-fade hero-btns" data-delay="3">
              <button
                style={styles.bp}
                className="hero-btn"
              >
                <span style={styles.bpShine} />
                Request a demo <span className="hero-btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right column — status card */}
          <div style={styles.rightCol}>
            <StatusCard />
          </div>
        </div>

        {/* Trusted icon */}
        <div style={styles.trustRow} className="hero-fade" data-delay="4">
          <img src="/Trustedicon.png" alt="Trusted" style={styles.trustIcon} className="hero-trust-icon" />
        </div>

        {/* Badge row */}
        <div style={styles.badgeRow} className="hero-fade hero-badge-row" data-delay="4">
          <img
            src="/PostQuantumReady.png"
            alt="Post Quantum Ready"
            style={styles.badgeImg}
            className="hero-badge-img"
          />
          <img
            src="/NoForkNoMigration.png"
            alt="No Fork No Migration"
            style={styles.badgeImg}
            className="hero-badge-img"
          />
        </div>

        {/* Feature cards */}
        <div style={styles.cards} className="hero-cards">
          {FEATURE_CARDS.map((card, i) => (
            <div
              key={i}
              style={styles.card}
              className="hero-card hero-fade"
              data-delay={5 + i}
            >
              <p style={styles.cardTitle}>{card.title}</p>
              <p style={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(255,255,255,0); }
        }

        .hero-fade {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards;
        }
        .hero-fade[data-delay="0"] { animation-delay: .05s; }
        .hero-fade[data-delay="1"] { animation-delay: .16s; }
        .hero-fade[data-delay="2"] { animation-delay: .28s; }
        .hero-fade[data-delay="3"] { animation-delay: .4s; }
        .hero-fade[data-delay="4"] { animation-delay: .52s; }
        .hero-fade[data-delay="5"] { animation-delay: .62s; }
        .hero-fade[data-delay="6"] { animation-delay: .7s; }
        .hero-fade[data-delay="7"] { animation-delay: .78s; }

        .shimmer-text {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .hero-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(91,33,182,0.34), inset 0 1px 0 rgba(255,255,255,0.22);
        }
        .hero-btn:active {
          transform: translateY(0);
        }
        .hero-btn-arrow {
          display: inline-block;
          transition: transform .25s ease;
        }
        .hero-btn:hover .hero-btn-arrow {
          transform: translateX(4px);
        }

        .hero-card {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .hero-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56,189,248,0.35) !important;
          box-shadow: 0 16px 40px rgba(56,189,248,0.12) !important;
        }

        .hero-feature-row {
          transition: border-color .2s ease, background .2s ease;
        }
        .hero-feature-row:hover {
          border-color: rgba(13,148,136,0.35);
          background: rgba(13,148,136,0.04);
        }

        @media (prefers-reduced-motion: reduce) {
          .pdot-anim { animation: none !important; opacity: 1 !important; }
          .hero-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
          .shimmer-text { animation: none !important; }
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 860px) {
          .hero-grid {
            flex-direction: column !important;
            text-align: center !important;
            gap: 36px !important;
          }
          .hero-left-col {
            text-align: center !important;
          }
          .hero-btns {
            justify-content: center !important;
          }
          .hero-sub {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 640px) {
          .hero-badge-row {
            gap: 16px !important;
            transform: none !important;
          }
          .hero-cards {
            transform: none !important;
          }
        }

        @media (max-width: 420px) {
          .hero-grid {
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "clamp(560px, 82vh, 760px)",
    background: "#030712",
    position: "relative",
    overflow: "visible",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
    paddingBottom: "clamp(40px, 8vw, 80px)",
  },
  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  ui: {
    position: "relative",
    zIndex: 3,
    textAlign: "center",
    padding: "clamp(32px, 6vw, 60px) clamp(16px, 4vw, 24px) 0",
    maxWidth: "1180px",
    width: "100%",
  },
  heroGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "56px",
    flexWrap: "wrap",
    textAlign: "left",
    marginBottom: "40px",
  },
  leftCol: {
    flex: "1 1 460px",
    minWidth: "min(320px, 100%)",
    textAlign: "left",
  },
  rightCol: {
    flex: "0 1 440px",
    minWidth: "min(280px, 100%)",
    display: "flex",
    justifyContent: "center",
  },
  patent: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "5px 15px",
    border: "1px solid rgba(180,131,25,0.28)",
    borderRadius: "100px",
    marginBottom: "28px",
    background: "rgba(212,175,55,0.09)",
  },
  pdot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#b4831a",
    display: "inline-block",
    animation: "blink 2s ease-in-out infinite",
  },
  pt: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "rgba(146,98,10,0.85)",
  },
  h1: {
    fontSize: "clamp(28px, 4.6vw, 48px)",
    fontWeight: 800,
    lineHeight: 1.12,
    letterSpacing: "-0.035em",
    color: "#f0f9ff",
    marginBottom: "22px",
    margin: "0 0 22px 0",
  },
  gradientText: {
    backgroundImage:
      "linear-gradient(135deg,#38bdf8,#818cf8,#34d399,#38bdf8)",
    backgroundSize: "200% 100%",
  },
  sub: {
    fontSize: "clamp(14px, 1.7vw, 16px)",
    color: "rgba(148,163,184,0.78)",
    lineHeight: 1.82,
    margin: "0 0 36px",
    maxWidth: "540px",
  },
  btns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "8px"
  },
  bp: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 30px",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#5b21b6,#0f766e)",
    color: "#fff",
    fontSize: "13.5px",
    fontWeight: 700,
    letterSpacing: "0.02em",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 8px 28px rgba(91,33,182,0.22),inset 0 1px 0 rgba(255,255,255,0.16)",
    transition: "transform .2s ease,box-shadow .2s ease",
  },
  bpShine: {
    position: "absolute",
    top: 0,
    left: "-40%",
    width: "30%",
    height: "100%",
    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)",
    transform: "skewX(-20deg)",
    pointerEvents: "none",
  },

  /* ── Trusted icon (centered above the badge pair) ── */
  trustRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0px",
    position: "relative",
    zIndex: 10,
  },
  trustIcon: {
    height: "clamp(70px, 14vw, 140px)",
    width: "auto",
    objectFit: "contain",
  },

  /* ── Badge row (side by side, gap between, centered as a pair) ── */
  badgeRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    marginBottom: "2px",
    position: "relative",
    zIndex: 10,
    transform: "translateY(-40%)",
    flexWrap: "wrap",
  },
  badgeImg: {
    height: "clamp(60px, 12vw, 120px)",
    width: "auto",
    objectFit: "contain",
  },
  /* ── Feature cards ── */
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "14px",
    position: "relative",
    zIndex: 10,
    transform: "translateY(-20%)"
  },
  card: {
    borderRadius: "16px",
    padding: "20px 20px 22px",
    textAlign: "left",
    background: "rgba(15,23,42,0.55)",
    border: "1px solid rgba(148,163,184,0.16)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
    cursor: "default",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#e2e8f0",
    margin: "0 0 7px",
    padding: 0,
    letterSpacing: "-0.02em",
    lineHeight: 1.25,
  },
  cardDesc: {
    fontSize: "12.5px",
    color: "rgba(148,163,184,0.7)",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
  },

  /* ── Right-side status card ── */
  statusCard: {
    width: "100%",
    maxWidth: "420px",
    background: "#ffffff",
    border: "1px solid rgba(91,33,182,0.10)",
    borderRadius: "24px",
    padding: "22px",
    textAlign: "left",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: "0 20px 60px rgba(60,40,110,0.10)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  scTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid rgba(91,33,182,0.14)",
    borderRadius: "14px",
    padding: "16px 18px",
  },
  scTopLabel: {
    fontSize: "14.5px",
    color: "#4b4560",
    fontWeight: 500,
  },
  scPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#c9f0e6",
    color: "#0d3b34",
    fontSize: "12.5px",
    fontWeight: 700,
    padding: "6px 14px",
    borderRadius: "100px",
  },
  scPillDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#0d9488",
    display: "inline-block",
  },
  scStatsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  scStatBox: {
    border: "1px solid rgba(91,33,182,0.14)",
    borderRadius: "14px",
    padding: "12px 8px",
    textAlign: "center",
  },
  scStatLabel: {
    fontSize: "9.5px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(71,63,94,0.55)",
    margin: "0 0 4px",
  },
  scStatValue: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#3b2170",
    margin: 0,
  },
  scGateway: {
    position: "relative",
    background: "linear-gradient(135deg,#5b21b6,#0f766e)",
    borderRadius: "16px",
    padding: "18px 20px",
    color: "#fff",
    overflow: "hidden",
  },
  scGatewayGlow: {
    position: "absolute",
    top: "-40%",
    right: "-20%",
    width: "60%",
    height: "160%",
    background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
    pointerEvents: "none",
  },
  scGatewayLabel: {
    fontSize: "10.5px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.75)",
    margin: "0 0 6px",
    position: "relative",
  },
  scGatewayTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "22px",
    fontWeight: 800,
    margin: "0 0 8px",
    position: "relative",
  },
  scLiveDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#fff",
    display: "inline-block",
    animation: "pulseDot 1.8s ease-in-out infinite",
  },
  scGatewayDesc: {
    fontSize: "13px",
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.88)",
    margin: 0,
    position: "relative",
  },
  scFeatureRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid rgba(91,33,182,0.12)",
    borderRadius: "14px",
    padding: "14px 16px",
  },
  scFeatureText: {
    fontSize: "13.5px",
    fontWeight: 500,
    color: "#2b2340",
  },
};