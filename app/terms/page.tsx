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
      body="This is a placeholder — the full terms will cover acceptable use, billing, and your data rights."
    />
  );
}