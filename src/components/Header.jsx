import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const activeLink = navLinks.find((l) => {
      if (l.path === "/") return location.pathname === "/";
      return location.pathname.startsWith(l.path);
    });
    if (!activeLink) {
      setPillStyle((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const el = itemRefs.current[activeLink.path];
    const nav = navRef.current;
    if (!el || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPillStyle({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 });
  }, [location.pathname]);

  useEffect(() => {
    const handle = () => {
      const activeLink = navLinks.find((l) => {
        if (l.path === "/") return location.pathname === "/";
        return location.pathname.startsWith(l.path);
      });
      if (!activeLink) return;
      const el = itemRefs.current[activeLink.path];
      const nav = navRef.current;
      if (!el || !nav) return;
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({ left: elRect.left - navRect.left, width: elRect.width, opacity: 1 });
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        /* ── Header shell — WHITE bg ── */
        .qz-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 12px rgba(99,102,241,0.08);
        }

        .qz-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          height: 68px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /* ── Logo ── */
        .qz-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          cursor: pointer;
        }
        .qz-logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          border-radius: 10px;
        }
        .qz-logo-name {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #111827;
          white-space: nowrap;
        }
        /* ™ — bold indigo, clearly visible on white */
        .qz-logo-name sup {
          font-size: 14px;
          font-weight: 800;
          color: #4f46e5;
          vertical-align: baseline; 
          letter-spacing: 0;
          text-shadow: 0 0 8px rgba(99,102,241,0.3);
        }

        /* ── Desktop nav ── */
        .qz-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          position: relative;
        }
        @media (max-width: 860px) { .qz-nav { display: none; } }

        /* Pill — soft indigo fill with border, looks great on white */
        .qz-pill {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(99,102,241,0.10), rgba(14,165,233,0.10));
          border: 1px solid rgba(99,102,241,0.28);
          pointer-events: none;
          transition: left 0.28s cubic-bezier(0.34,1.26,0.64,1),
                      width 0.28s cubic-bezier(0.34,1.26,0.64,1),
                      opacity 0.18s ease;
          box-shadow: 0 2px 12px rgba(99,102,241,0.14);
        }

        /* Nav links */
        .qz-nav a {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: #6b7280;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.18s ease;
          cursor: pointer;
        }
        .qz-nav a:hover { color: #111827; }
        /* Active link — indigo, matches pill */
        .qz-nav a.active {
          color: #6366f1;
          font-weight: 600;
        }

        /* CTA button — gradient stays, looks great on white */
        .qz-cta {
          display: inline-flex;
          align-items: center;
          padding: 9px 18px;
          border-radius: 9px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          color: #fff !important;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(99,102,241,0.30), inset 0 1px 0 rgba(255,255,255,0.14);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          margin-left: 8px;
        }
        .qz-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(99,102,241,0.42), inset 0 1px 0 rgba(255,255,255,0.18);
        }

        /* ── Hamburger — dark lines on white bg ── */
        .qz-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 38px;
          border-radius: 9px;
          border: 1px solid #e5e7eb;
          background: transparent;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 0;
          flex-shrink: 0;
          transition: border-color 0.18s ease, background 0.18s ease;
        }
        .qz-burger:hover {
          border-color: #6366f1;
          background: rgba(99,102,241,0.05);
        }
        @media (max-width: 860px) { .qz-burger { display: flex; } }
        .qz-burger span {
          display: block;
          width: 18px;
          height: 1.8px;
          background: #374151;
          border-radius: 2px;
          transition: transform 0.22s ease, opacity 0.22s ease, width 0.22s ease;
          transform-origin: center;
        }
        .qz-burger.open span { background: #6366f1; }
        .qz-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .qz-burger.open span:nth-child(2) { opacity: 0; width: 0; }
        .qz-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile menu — white bg ── */
        .qz-mobile-menu {
          display: none;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease;
          opacity: 0;
          border-bottom: 1px solid #e5e7eb;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(99,102,241,0.08);
        }
        .qz-mobile-menu.open {
          max-height: 400px;
          opacity: 1;
        }
        @media (max-width: 860px) { .qz-mobile-menu { display: block; } }
        .qz-mobile-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .qz-mobile-menu a {
          display: block;
          padding: 11px 14px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .qz-mobile-menu a:hover {
          background: rgba(99,102,241,0.07);
          color: #6366f1;
        }
        .qz-mobile-menu a.active {
          background: rgba(99,102,241,0.09);
          color: #6366f1;
          font-weight: 600;
        }
        .qz-mobile-cta {
          margin-top: 8px;
          display: block;
          padding: 12px 18px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          color: #fff !important;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(99,102,241,0.28);
        }
      `}</style>

      <header className="qz-header">
        <div className="qz-wrap">

          {/* Logo */}
          <Link to="/" className="qz-logo" onClick={closeMenu}>
            <img src="../../Logo.png" alt="QuantZen logo" />
            <span className="qz-logo-name">
              QuantZen<sup>™</sup>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="qz-nav" ref={navRef} aria-label="Main navigation">
            <span
              className="qz-pill"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
              aria-hidden="true"
            />

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                ref={(el) => { itemRefs.current[link.path] = el; }}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            ))}

            <Link to="/contact" className="qz-cta" onClick={closeMenu}>
              Request a demo
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className={`qz-burger${open ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`qz-mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="qz-mobile-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="qz-mobile-cta" onClick={closeMenu}>
            Request a demo
          </Link>
        </div>
      </div>
    </>
  );
}