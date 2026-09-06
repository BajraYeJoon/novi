import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: "How Novi collects, uses, and protects your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      description="Your data stays yours. We only collect what we need to run the product."
      body="We never sell your personal information. This is a placeholder — the full policy will describe what we store, why, and how you can request deletion."
    />
  );
}