import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import FeaturesHero from "@/components/landing/features/FeaturesHero";
import FeaturesGrid from "@/components/landing/features/FeaturesGrid";
import FeaturesCTA from "@/components/landing/features/FeaturesCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("features.hero");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function FeaturesPage() {
  return (
    <main>
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesCTA />
    </main>
  );
}
