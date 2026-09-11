import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  BadgeIndianRupee,
  Handshake,
  Landmark,
  GraduationCap,
  Briefcase,
  MapPin,
  Target,
  Eye,
  Quote,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-network.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SP Infotech Sales & Services | IT Solutions in Navi Mumbai" },
      {
        name: "description",
        content:
          "SP Infotech Sales & Services delivers IT infrastructure, networking, AMC and enterprise technical support across Navi Mumbai, Mumbai and Panvel since 2019.",
      },
      { property: "og:title", content: "SP Infotech Sales & Services | IT Solutions in Navi Mumbai" },
      {
        property: "og:description",
        content:
          "Reliable IT infrastructure, networking and corporate technical support for government, corporate and institutional clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const clientGroups = [
  {
    icon: Landmark,
    heading: "Government & Public Sector",
    entries: [
      {
        name: "Central Warehousing Corporation – Navi Mumbai",
        details: ["Regional Office, Navi Mumbai", "CWC Vashi office navi mumbai", "IRT Kalamboli, Navi Mumbai"],
      },
      {
        name: "Navi Mumbai Municipal Corporation (NMMC)",
        details: [
          "Health Department – IT support for hospitals across Navi Mumbai",
          "Medical Officer of Health, CBD Belapur",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    heading: "Corporate Partnerships",
    entries: [
      { name: "Unity Infotech Software Company – Mumbai", details: [] },
      { name: "Tulshi Realty – Navi Mumbai", details: [] },
      { name: "Lakhani Builders – Navi Mumbai", details: [] },
      { name: "R.P. Infra Projects – Navi Mumbai", details: [] },
      { name: "Digitech Automation Group – Nere, Panvel", details: [] },
    ],
  },
  {
    icon: GraduationCap,
    heading: "Institutional Clients",
    entries: [
      { name: "The Buddhists International School – Dapoli / Panvel", details: [] },
      { name: "M/s Pushpa Creation – BEST Colony, Ghatkopar", details: [] },
    ],
  },
];

const trustPoints = [
  { icon: Clock, label: "Experience Since 2019" },
  { icon: Landmark, label: "Government & Corporate Client Exposure" },
  { icon: ShieldCheck, label: "Fast & Reliable Technical Support" },
  { icon: Briefcase, label: "Professional Service Approach" },
  { icon: BadgeIndianRupee, label: "Cost-Effective Solutions" },
  { icon: Handshake, label: "Long-Term Client Relationships" },
];

const promises = [
  { title: "Reliable Service", body: "We ensure timely and effective technology support." },
  { title: "Quality Commitment", body: "We deliver solutions with professionalism and attention to detail." },
  { title: "Customer Success", body: "Your business continuity is our priority." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImage}
            alt="Structured network cabling in a server room"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
            <p className="section-eyebrow">Company Profile · Established 2019</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-primary-foreground sm:text-6xl">
              Transforming Technology Into Business Success
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
              A professionally managed IT solutions and technology support company serving government,
              corporate and educational organizations across Navi Mumbai, Mumbai and Panvel.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
              >
                Our Solutions
              </a>
              <a
                href="#contact"
                className="rounded-md border border-primary-foreground/40 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Talk To Us
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
              <a href="mailto:info@spinfotechindia.com" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden="true" /> info@spinfotechindia.com
              </a>
              <a href="https://wa.me/6266196880" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
              </a>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {[
                ["2019", "Established"],
                ["3", "Cities served"],
                ["15+", "Active clients"],
                ["AMC", "Support contracts"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl font-bold text-accent">{value}</dt>
                  <dd className="text-xs uppercase tracking-widest text-primary-foreground/70">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Who we are */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                A trusted technology partner built on reliability
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  SP Infotech Sales &amp; Services is a professionally managed IT solutions and technology
                  support company, founded on 21st October 2019 by Mr. Sachin Adate, Managing Director.
                </p>
                <p>
                  We help organizations achieve seamless digital operations through reliable IT
                  infrastructure, hardware solutions, networking, system support and customized technology
                  services.
                </p>
                <p>
                  From government institutions to corporate organizations and educational institutes, we have
                  built a reputation for trust, quality, quick response and long-term partnerships.
                </p>
              </div>
            </div>

            <aside className="card-surface p-7">
              <p className="section-eyebrow">Visionary Leadership</p>
              <h3 className="mt-3 text-2xl font-bold">Mr. Sachin Adate</h3>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Managing Director
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                With a passion for technology and a commitment to excellence, Mr. Sachin Adate has established
                SP Infotech Sales &amp; Services as a trusted technology partner for organizations across Navi
                Mumbai and Mumbai.
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-4 text-sm italic text-foreground">
                <Quote className="mb-2 h-4 w-4 text-accent" aria-hidden="true" />
                Technology should make business easier, faster, and more efficient. Our commitment is to
                deliver solutions that create real value for our clients.
              </blockquote>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="section-eyebrow">Our Technology Solutions</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything your IT environment needs</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article key={s.title} className="card-surface flex flex-col p-7">
                  <s.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent"
                  >
                    View details &amp; FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="mx-auto max-w-6xl px-5 py-20">
          <p className="section-eyebrow">Our Trusted Clientele</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Serving public, corporate and institutional sectors</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {clientGroups.map((g) => (
              <article key={g.heading} className="card-surface p-7">
                <g.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{g.heading}</h3>
                <ul className="mt-5 space-y-4">
                  {g.entries.map((e) => (
                    <li key={e.name}>
                      <p className="text-sm font-semibold">{e.name}</p>
                      {e.details.length > 0 && (
                        <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                          {e.details.map((d) => (
                            <li key={d}>— {d}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">And many more valued clients…</p>
        </section>

        {/* Why trust us */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <p className="section-eyebrow">Why Organizations Trust Us</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Service standards we hold ourselves to</h2>
            <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {trustPoints.map((t) => (
                <div key={t.label} className="flex items-start gap-4 border-t border-primary-foreground/15 pt-5">
                  <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="font-medium">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / Mission / Promise */}
        <section id="vision" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card-surface p-8">
              <Eye className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To become a leading technology solutions provider by delivering innovative, reliable and
                customer-focused IT services.
              </p>
            </article>
            <article className="card-surface p-8">
              <Target className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To empower businesses with dependable technology solutions that improve productivity,
                efficiency and growth.
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {promises.map((p) => (
              <article key={p.title} className="card-surface p-7">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="card-surface flex flex-col gap-8 p-9 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-eyebrow">Your Reliable Technology Partner Since 2019</p>
                <h2 className="mt-3 text-3xl font-bold">Connecting businesses. Supporting growth.</h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  IT Solutions · Networking · Corporate Support · Technical Services
                </p>
                <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  Serving Navi Mumbai · Mumbai · Panvel
                </p>
              </div>
              <div className="shrink-0 rounded-lg border border-border bg-secondary/70 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Managed by</p>
                <p className="mt-2 font-display text-xl font-bold">Mr. Sachin Adate</p>
                <p className="text-sm text-muted-foreground">Managing Director</p>
              </div>
            </div>

            <div className="card-surface mt-6 p-9">
              <p className="section-eyebrow">Request A Callback</p>
              <h3 className="mt-3 text-2xl font-bold">Tell us what you need</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details and our team will respond with the right solution.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <img src="/favicon.png" alt="" className="h-14 w-14 object-contain" />
          <p className="font-display text-lg font-bold uppercase tracking-wide text-primary">
            SP Infotech Sales &amp; Services
          </p>
          <p className="text-sm italic text-muted-foreground">
            “Connecting Businesses. Supporting Growth. Delivering Excellence.”
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SP Infotech Sales &amp; Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
