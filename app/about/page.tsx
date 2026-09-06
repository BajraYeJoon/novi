import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "About",
  description: "Novi is building a calmer way for small teams to work together.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SimplePage
      title="About us"
      description="Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams."
      body="We believe the tools you use every day should feel quiet — not noisy. One place to plan, talk, and ship."
    />
  );
}