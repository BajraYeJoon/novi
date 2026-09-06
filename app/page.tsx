import { getMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/hero/HeroSection";
import FeaturesSection from "@/components/sections/features/FeaturesSection";

export const metadata = getMetadata({
  path: "/",
});

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}