import { SiteChrome } from "@/components/SiteChrome";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { AboutSection } from "@/components/AboutSection";
import { PressLogos } from "@/components/PressLogos";
import { ListingsMap } from "@/components/ListingsMap";
import { QuoteBand } from "@/components/QuoteBand";
import { BuySellSection } from "@/components/BuySellSection";
import { Testimonials } from "@/components/Testimonials";
import { BeyondRealEstate } from "@/components/BeyondRealEstate";
import { PropertyVideoCards } from "@/components/PropertyVideoCards";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { AvailableListings, BrowseCTA } from "@/components/AvailableListings";
import { HomeValuation } from "@/components/HomeValuation";
import { FeaturedNeighborhoods } from "@/components/FeaturedNeighborhoods";
import { Newsletter } from "@/components/Newsletter";
import { WorkWithEthan } from "@/components/WorkWithEthan";
import { Footer } from "@/components/Footer";
import { FloatingConnect } from "@/components/FloatingConnect";
import { FloatingSocialBar } from "@/components/SocialLinks";
import { BUY, SELL } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteChrome />
      <main>
        <Hero />
        <StatsBand />
        <AboutSection />
        <PressLogos />
        <ListingsMap />
        <QuoteBand />
        <BuySellSection {...BUY} />
        <BuySellSection {...SELL} reverse />
        <Testimonials />
        <BeyondRealEstate />
        <PropertyVideoCards />
        <FeaturedProperties />
        <AvailableListings />
        <BrowseCTA />
        <HomeValuation />
        <FeaturedNeighborhoods />
        <Newsletter />
        <WorkWithEthan />
      </main>
      <Footer />
      <FloatingConnect />
      <FloatingSocialBar />
    </>
  );
}
