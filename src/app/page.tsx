import { HeroSection } from "@/components/sections/hero";
import { HistorySection } from "@/components/sections/history";
import { CatalogSection } from "@/components/sections/catalog";
import { ExperienceSection } from "@/components/sections/experience";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <CatalogSection />
      <ExperienceSection />
    </>
  );
}
