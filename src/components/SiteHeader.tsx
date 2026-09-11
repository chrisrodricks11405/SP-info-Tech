"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { to: "/", hash: "about", label: "About" },
  { to: "/services", hash: undefined, label: "Services" },
  { to: "/", hash: "clients", label: "Clients" },
  { to: "/", hash: "vision", label: "Vision" },
  { to: "/", hash: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3.5" aria-label="SP Infotech home">
          <img src="/favicon.png" alt="" className="h-11 w-11 shrink-0 object-contain" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-xl font-bold tracking-wide text-primary">SP Infotech</span>
            <span className="block truncate text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Sales &amp; Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              {...(link.hash ? { hash: link.hash } : {})}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary transition hover:bg-secondary xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-4 shadow-lg xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                {...(link.hash ? { hash: link.hash } : {})}
                onClick={closeMenu}
                className="rounded-md px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-semibold text-accent-foreground"
            >
              Request a callback <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
