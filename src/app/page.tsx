import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CatalogSection } from "@/components/sections/catalog";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ContactSection />
    </>
  );
}
