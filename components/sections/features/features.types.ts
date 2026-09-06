import type { IconName } from "@/components/ui/icons";

export interface FeatureCardData {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  descriptionColor: string;
  darkChip: boolean;
  span?: string;
  image?: { src: string; alt: string };
}