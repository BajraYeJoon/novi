import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Novi.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SimplePage
      title="Terms of Service"
      description="Clear, fair terms for using Novi."
      body="Using Novi means agreeing to keep your workspace yours — no spam, no scraping, no reselling. The full terms cover acceptable use, billing, and your data rights."
    />
  );
}