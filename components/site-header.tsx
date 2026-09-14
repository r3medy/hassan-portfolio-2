"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight } from "./icons";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (menuOpen && event.key === "Escape") {
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container header-inner">
        <Link
          className="wordmark"
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Hassan Ahmed, home"
        >
          Hassan Ahmed<span className="wordmark-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <div className="container mobile-nav-inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </nav>
      {pathname !== "/" ? (
        <span className="header-route-indicator" aria-hidden="true" />
      ) : null}
    </header>
  );
}
