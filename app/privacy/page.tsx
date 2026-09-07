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
      body="We never sell your personal information. We only store what we need to run the product — your account, your team's data, and nothing else. You can export or delete it whenever you like."
    />
  );
}