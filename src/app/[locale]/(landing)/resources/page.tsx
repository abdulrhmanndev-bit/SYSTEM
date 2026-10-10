import ResroucesFeatured from "@/components/landing/resources/ResroucesFeatured";
import NewsletterSection from "@/components/landing/resources/NewsletterSection";
import ResourcesOurTeam from "@/components/landing/resources/ResourcesOurTeam";
import ResourcesExplore from "@/components/landing/resources/ResourcesExplore";
import ResourcesHeroSection from "@/components/landing/resources/ResourcesHeroSection";
import ResourcesPopular from "@/components/landing/resources/ResourcesPopular";

export default function page() {
  return (
    <div>
      <ResourcesHeroSection />
      <ResroucesFeatured />
      <ResourcesExplore />
      <ResourcesOurTeam />
      <ResourcesPopular />
      <NewsletterSection />
    </div>
  );
}
