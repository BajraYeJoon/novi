import { getMetadata } from "@/lib/metadata";
import SimplePage from "@/components/ui/SimplePage";

export const metadata = getMetadata({
  title: "Blog",
  description: "Guides and stories on running small, fast moving teams.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SimplePage
      title="Blog"
      description="Guides, product updates, and field notes from small teams who move fast."
      body="New posts every week on planning, sprints, and building calm workflows."
    />
  );
}