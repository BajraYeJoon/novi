import type { FeatureCardData } from "./features.types";

export const featureCards: FeatureCardData[] = [
  {
    id: "boards",
    icon: "board",
    title: "Boards that move at your speed",
    description: "Plan sprints and track tasks without hunting through spreadsheets.",
    backgroundColor: "#c9ff85",
    textColor: "#101011",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    darkChip: true,
    image: {
      src: "/feature-01.png",
      alt: "Boards preview",
    },
  },
  {
    id: "threads",
    icon: "thread",
    title: "Threads, not another inbox",
    description: "Keep project conversations attached to the work itself.",
    backgroundColor: "#ffd86f",
    textColor: "#101011",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    darkChip: true,
    image: {
      src: "/feature-02.png",
      alt: "Threads preview",
    },
  },
  {
    id: "timeline",
    icon: "timeline",
    title: "One timeline for the whole team",
    description: "Every deadline and milestone in one shared view.",
    backgroundColor: "#8f82ff",
    textColor: "#ffffff",
    descriptionColor: "rgba(255, 255, 255, 0.74)",
    darkChip: false,
    image: {
      src: "/feature-03.png",
      alt: "Timeline preview",
    },
  },
  {
    id: "import",
    icon: "import",
    title: "Works the way you already do",
    description: "Import from Trello, Asana, or a spreadsheet in minutes.",
    backgroundColor: "#edf0ff",
    textColor: "#101011",
    descriptionColor: "rgba(16, 16, 17, 0.58)",
    darkChip: true,
    image: {
      src: "/feature-04.png",
      alt: "Import preview",
    },
  },
];
