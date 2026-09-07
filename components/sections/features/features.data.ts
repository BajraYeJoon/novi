import type { FeatureCardData } from "./features.types";

export const featureCards: FeatureCardData[] = [
  {
    id: "boards",
    title: "Boards that move at your speed",
    description: "Plan sprints and track tasks without hunting through spreadsheets.",
    backgroundColor: "var(--color-brand-green)",
    textColor: "var(--color-foreground)",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    image: {
      src: "/images/features/feature-01.png",
      alt: "Boards preview",
    },
  },
  {
    id: "threads",
    title: "Threads, not another inbox",
    description: "Keep project conversations attached to the work itself.",
    backgroundColor: "var(--color-brand-yellow)",
    textColor: "var(--color-foreground)",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    image: {
      src: "/images/features/feature-02.png",
      alt: "Threads preview",
    },
  },
  {
    id: "timeline",
    title: "One timeline for the whole team",
    description: "Every deadline and milestone in one shared view.",
    backgroundColor: "var(--color-brand-purple)",
    textColor: "var(--color-primary-foreground)",
    descriptionColor: "rgba(255, 255, 255, 0.74)",
    image: {
      src: "/images/features/feature-03.png",
      alt: "Timeline preview",
    },
  },
  {
    id: "import",
    title: "Works the way you already do",
    description: "Import from Trello, Asana, or a spreadsheet in minutes.",
    backgroundColor: "var(--color-brand-lavender)",
    textColor: "var(--color-foreground)",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    image: {
      src: "/images/features/feature-04.png",
      alt: "Import preview",
    },
  },
];
