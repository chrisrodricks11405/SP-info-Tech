import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", hash: "about", label: "About" },
  { to: "/services", hash: undefined, label: "Services" },
  { to: "/", hash: "clients", label: "Clients" },
  { to: "/", hash: "vision", label: "Vision" },
  { to: "/", hash: "contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3.5">
          <img src="/favicon.png" alt="SP Infotech Sales & Services logo" className="h-12 w-12 shrink-0 object-contain" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-bold tracking-wide text-primary">
              SP Infotech
            </span>
            <span className="block truncate text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Sales &amp; Services
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              {...(l.hash ? { hash: l.hash } : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
