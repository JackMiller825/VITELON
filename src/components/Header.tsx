import { useEffect, useId, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { siteConfig } from "../data/siteConfig.ts";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/story", label: "Story", end: false },
  { to: "/token", label: "Tokenomics", end: false },
];

export function Header() {
  const { pathname, hash } = useLocation();
  const locationKey = `${pathname}${hash}`;
  const [open, setOpen] = useState(false);
  const [trackedLocation, setTrackedLocation] = useState(locationKey);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  if (trackedLocation !== locationKey) {
    setTrackedLocation(locationKey);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    function onPointer(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onResize() {
      if (window.matchMedia("(min-width: 960px)").matches) setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap header-inner">
        <Link className="brand" to="/">
          <img src={siteConfig.assets.logo} width={48} height={48} alt="VITELON logo" />
          <span>VITELON</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <Link className="nav-link" to="/#community">
            Community
          </Link>
        </nav>
        <div className="header-buy">
          <Link className="btn btn-primary" to="/token#how-to-buy">
            BUY $VITELON
          </Link>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="burger" />
        </button>
        <div className="mobile-panel" id={menuId} hidden={!open}>
          <nav aria-label="Mobile">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className="nav-link">
                {link.label}
              </NavLink>
            ))}
            <Link className="nav-link" to="/#community">
              Community
            </Link>
            <Link className="btn btn-primary" to="/token#how-to-buy">
              BUY $VITELON
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
