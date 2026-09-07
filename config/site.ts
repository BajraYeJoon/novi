export const SITE = {
  name: "Novi",
  tagline: "Run your team without the tab switching.",
  description:
    "Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams.",
  url: "https://novi-project.vercel.app",
  locale: "en_US",
  twitterHandle: "@novi",
  since: 2026,
} as const;


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
];