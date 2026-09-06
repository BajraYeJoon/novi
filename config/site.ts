export const SITE = {
  name: "Novi",
  tagline: "Run your team without the tab switching.",
  description:
    "Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams.",
  url: "https://novi.app",
  locale: "en_US",
  twitterHandle: "@novi",
  since: 2026,
} as const;

export const PRODUCT_LINKS = [
  {
    label: "Tasks",
    href: "#features",
    description: "Plan, track, and ship work with shared boards.",
  },
  {
    label: "Docs",
    href: "#features",
    description: "Write, share, and collaborate in one place.",
  },
  {
    label: "Conversations",
    href: "#features",
    description: "Keep every discussion tied to the work.",
  },
  {
    label: "AI Insights",
    href: "#features",
    description: "Know what needs your attention next.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Start free", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "/contact" },
      { label: "Guides", href: "/blog" },
      { label: "Community", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;