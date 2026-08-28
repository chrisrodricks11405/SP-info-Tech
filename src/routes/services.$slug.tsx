import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.title} | SP Infotech Sales & Services`;
    return {
      meta: [
        { title },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: service.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        },
      ],
    };
  },
  errorComponent: () => <ServiceMissing />,
  notFoundComponent: () => <ServiceMissing />,
  component: ServicePage,
});

function ServiceMissing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold uppercase">Service not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for is not available. Browse all our services instead.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground"
        >
          All services
        </Link>
      </main>
    </div>
  );
}

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="border-b border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All services
            </Link>
            <service.icon className="mt-8 h-10 w-10 text-accent" aria-hidden="true" />
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {service.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">{service.intro}</p>
            <Link
              to="/"
              hash="contact"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Request a callback
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="section-eyebrow">What&apos;s Included</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Scope of work</h2>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-eyebrow">How We Work</p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Our delivery process</h2>
              <ol className="mt-6 space-y-5">
                {service.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{p.step}</span>
                      <span className="block text-sm text-muted-foreground">{p.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-16">
          <div className="mx-auto max-w-3xl px-5">
            <p className="section-eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              {service.shortTitle} — your questions answered
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="section-eyebrow">Explore More</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Other services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="card-surface flex flex-col p-6 transition-colors hover:border-accent"
              >
                <o.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <span className="mt-4 font-semibold">{o.title}</span>
                <span className="mt-1 flex-1 text-sm text-muted-foreground">{o.tagline}</span>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-accent">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
