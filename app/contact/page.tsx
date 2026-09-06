import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Contact",
  description: "Get in touch with the Novi team — we’d love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact us"
      description="Questions, feedback, or partnership ideas — we read everything."
      body="Drop us a line at hello@novi.app and we’ll get back to you within one business day."
    />
  );
}