export interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  descriptionColor: string;
  span?: string;
  image?: { src: string; alt: string };
}