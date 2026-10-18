
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import SolutionsHero from "@/components/landing/solutions/SolutionsHero";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("solutions.hero");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
    </main>
  );
}
