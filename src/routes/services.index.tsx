import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { services } from "@/data/services";

const title = "IT Services | SP Infotech Sales & Services";
const description =
  "Explore SP Infotech's IT services — infrastructure management, network and connectivity, enterprise support with AMC, and customized technology services across Navi Mumbai, Mumbai and Panvel.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="section-eyebrow">Our Technology Solutions</p>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-tight">Services</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Four focused service areas covering everything from a single workstation to a complete office IT
          environment. Each page includes the scope of work, how we deliver it and answers to common questions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.slug} className="card-surface flex flex-col p-7">
              <s.icon className="h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
              <p className="mt-4 flex-1 text-sm text-muted-foreground">{s.intro}</p>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-accent"
              >
                View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
