import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Features",
  description: "Boards, threads, timelines, and easy imports — everything a small team needs to move fast.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <SimplePage
      title="Features"
      description="Boards that move at your speed, threads instead of another inbox, one timeline for the whole team, and imports that work the way you already do."
      body="Small, focused tools that slot into your workflow — no reorganizing your entire process to get started."
    />
  );
}