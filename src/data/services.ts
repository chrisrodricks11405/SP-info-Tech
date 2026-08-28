import { Monitor, Network, Building2, Wrench, type LucideIcon } from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  metaDescription: string;
  intro: string;
  items: string[];
  process: { step: string; body: string }[];
  faqs: ServiceFaq[];
}

export const services: ServiceDetail[] = [
  {
    slug: "it-infrastructure-management",
    icon: Monitor,
    title: "IT Infrastructure Management",
    shortTitle: "IT Infrastructure",
    tagline: "Complete support for your technology environment",
    metaDescription:
      "IT infrastructure management in Navi Mumbai, Mumbai and Panvel — computer and laptop sales, hardware installation, system configuration, asset management and preventive maintenance.",
    intro:
      "We plan, supply, install and maintain the hardware your organisation depends on every day — from individual workstations to full office rollouts — so your teams stay productive and your assets stay accounted for.",
    items: [
      "Computer & Laptop Sales",
      "Hardware Installation & Repair",
      "System Configuration",
      "IT Asset Management",
      "Preventive Maintenance",
    ],
    process: [
      { step: "Assessment", body: "We audit your existing hardware, usage patterns and gaps on site." },
      { step: "Procurement", body: "We recommend and supply systems matched to your workload and budget." },
      { step: "Deployment", body: "Installation, configuration and data migration handled by our engineers." },
      { step: "Maintenance", body: "Scheduled preventive checks keep failures and downtime to a minimum." },
    ],
    faqs: [
      {
        question: "Do you supply new computers and laptops, or only service existing ones?",
        answer:
          "Both. We supply branded desktops, laptops, printers and peripherals at competitive rates, and we also service, upgrade and repair the hardware you already own.",
      },
      {
        question: "Can you handle a full office setup for a new branch?",
        answer:
          "Yes. We handle end-to-end setup — system procurement, installation, operating system and software configuration, network cabling and user handover — for new offices across Navi Mumbai, Mumbai and Panvel.",
      },
      {
        question: "How does preventive maintenance work?",
        answer:
          "We schedule periodic visits to clean, test and update your systems, replace failing components early and report on asset health, so problems are resolved before they interrupt work.",
      },
      {
        question: "Do you maintain records of our IT assets?",
        answer:
          "Yes. We maintain an asset register covering make, model, serial number, location, warranty status and service history, and share updated reports with your team.",
      },
    ],
  },
  {
    slug: "network-connectivity-solutions",
    icon: Network,
    title: "Network & Connectivity Solutions",
    shortTitle: "Network & Connectivity",
    tagline: "Building reliable digital connections",
    metaDescription:
      "LAN, Wi-Fi and office connectivity solutions — network installation, structured cabling, configuration and troubleshooting for offices in Navi Mumbai, Mumbai and Panvel.",
    intro:
      "A stable network is the backbone of every modern office. We design, install and troubleshoot wired and wireless networks that stay fast and dependable as your team grows.",
    items: [
      "LAN & Wi-Fi Setup",
      "Network Installation",
      "Configuration & Troubleshooting",
      "Office Connectivity Solutions",
    ],
    process: [
      { step: "Site survey", body: "We map coverage, cable routes, user density and dead zones." },
      { step: "Design", body: "Switch, router and access point layout suited to your floor plan." },
      { step: "Installation", body: "Structured cabling, device mounting and secure configuration." },
      { step: "Support", body: "Ongoing monitoring, tuning and rapid fault resolution." },
    ],
    faqs: [
      {
        question: "Do you provide structured cabling as well as configuration?",
        answer:
          "Yes. We carry out LAN cabling, patch panel and rack termination, access point mounting and the full switch, router and firewall configuration that goes with it.",
      },
      {
        question: "Our Wi-Fi is slow in parts of the office. Can you fix it?",
        answer:
          "We run a coverage survey to find dead zones, interference and overloaded access points, then correct placement, channels and hardware so coverage is consistent across the workspace.",
      },
      {
        question: "Can you work with our existing internet service provider?",
        answer:
          "Yes. We work alongside any ISP, coordinate with them on link issues and configure your internal network, failover and routing around the connection you already have.",
      },
      {
        question: "How quickly do you respond to a network outage?",
        answer:
          "Outages are treated as priority calls. Remote diagnosis usually starts immediately and on-site engineers are dispatched the same working day within our service area.",
      },
    ],
  },
  {
    slug: "enterprise-it-support",
    icon: Building2,
    title: "Enterprise IT Support",
    shortTitle: "Enterprise Support",
    tagline: "Keeping your business running smoothly",
    metaDescription:
      "Enterprise IT support and Annual Maintenance Contracts (AMC) — on-site technical support, remote assistance and complete IT support services for government and corporate clients.",
    intro:
      "From single-call assistance to structured Annual Maintenance Contracts, we act as the IT department for organisations that need dependable support without maintaining an in-house team.",
    items: [
      "On-site Technical Support",
      "Remote Assistance",
      "Annual Maintenance Contracts (AMC)",
      "Complete IT Support Services",
    ],
    process: [
      { step: "Scoping", body: "We agree covered assets, locations, response times and reporting." },
      { step: "Onboarding", body: "Baseline audit, documentation and single point of contact set up." },
      { step: "Day-to-day support", body: "Remote-first resolution with on-site visits when required." },
      { step: "Review", body: "Periodic service reviews with issue trends and recommendations." },
    ],
    faqs: [
      {
        question: "What does an Annual Maintenance Contract cover?",
        answer:
          "An AMC typically covers preventive visits, unlimited fault calls, remote assistance, configuration support and priority response for the agreed list of systems. Coverage is defined with you before the contract starts.",
      },
      {
        question: "Do you offer support outside normal working hours?",
        answer:
          "Yes. Emergency and extended-hours support can be included in your contract for organisations such as hospitals and offices that cannot wait for the next working day.",
      },
      {
        question: "Do you serve government departments?",
        answer:
          "We do. We support Central Warehousing Corporation offices and the Navi Mumbai Municipal Corporation Health Department, and we are familiar with public-sector documentation and process requirements.",
      },
      {
        question: "Can we start with a trial before signing an AMC?",
        answer:
          "Yes. Many clients begin with call-based support or a short pilot period, then move to an annual contract once they have seen our response times and quality of work.",
      },
    ],
  },
  {
    slug: "customized-technology-services",
    icon: Wrench,
    title: "Customized Technology Services",
    shortTitle: "Customized Services",
    tagline: "Solutions designed around your requirements",
    metaDescription:
      "Customized technology services — software and hardware assistance, technical consultation, emergency support and tailored business IT solutions for organisations of every size.",
    intro:
      "Not every requirement fits a standard package. We consult, design and deliver technology solutions shaped around how your organisation actually works.",
    items: [
      "Software & Hardware Assistance",
      "Technical Consultation",
      "Emergency Support",
      "Business IT Solutions",
    ],
    process: [
      { step: "Discovery", body: "We understand your workflow, constraints and budget." },
      { step: "Recommendation", body: "A clear proposal with options, costs and timelines." },
      { step: "Implementation", body: "Delivery by our engineers with minimal disruption to work." },
      { step: "Handover", body: "User guidance and continued support after go-live." },
    ],
    faqs: [
      {
        question: "What kind of custom requirements do you take on?",
        answer:
          "Typical work includes software installation and licensing help, department-specific system setups, data backup arrangements, hardware upgrades and technology planning for new premises.",
      },
      {
        question: "Do you charge for an initial consultation?",
        answer:
          "An initial discussion and requirement assessment is free. Any chargeable work is quoted and approved by you before it begins.",
      },
      {
        question: "Can you support us during an emergency breakdown?",
        answer:
          "Yes. Emergency support is available for critical failures — we prioritise the call, diagnose remotely where possible and reach your site as quickly as our schedule allows.",
      },
      {
        question: "Do you work with small businesses as well as large organisations?",
        answer:
          "Yes. Our clients range from schools and small offices to municipal departments and corporate groups, and solutions are scaled to fit each one.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
