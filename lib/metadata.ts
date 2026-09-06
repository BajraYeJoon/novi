import type { Metadata, Viewport } from "next";
import { SITE } from "@/config/site";

export const siteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? SITE.url;

export function getMetadata({
  title,
  description,
  path = "/",
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
} = {}): Metadata {
  const baseTitle = title
    ? `${title} · ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;

  return {
    metadataBase: new URL(siteUrl()),
    title: baseTitle,
    description: description ?? SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name }],
    keywords: [
      "project management",
      "task management",
      "team collaboration",
      "startup tools",
      "productivity",
    ],
    category: "productivity",
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: new URL(path, siteUrl()).toString(),
      title: baseTitle,
      description: description ?? SITE.description,
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: description ?? SITE.description,
      site: SITE.twitterHandle,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const jsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE.description,
});