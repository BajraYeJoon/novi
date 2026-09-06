import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing for small teams. Start free — upgrade when you’re ready.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <SimplePage
      title="Pricing"
      description="Free for small teams getting started. Simple plans that scale as you grow."
      body="Start free today. No credit card required — upgrade whenever you need more seats, history, or advanced features."
    />
  );
}