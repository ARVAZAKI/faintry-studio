import { HeroSection, AboutSection, PortfolioSection, TestimonialsSection, PricelistSection } from "@/components/sections";
import { getPortfolioItems } from "@/services/portfolio.service";
import { getPricingPackages } from "@/services/pricing.service";

export default async function Home() {
  const [portfolioItems, pricingPackages] = await Promise.all([
    getPortfolioItems(),
    getPricingPackages(),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection items={portfolioItems} />
      <TestimonialsSection />
      <PricelistSection packages={pricingPackages} />
    </>
  );
}

