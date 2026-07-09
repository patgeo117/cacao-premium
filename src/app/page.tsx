import { HeroSection } from "@/components/sections/hero";
import { HistorySection } from "@/components/sections/history";
import { CatalogSection } from "@/components/sections/catalog";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <CatalogSection />
    </>
  );
}
