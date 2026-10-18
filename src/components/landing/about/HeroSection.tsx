"use client";

import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

export default function SolutionsHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="linear">
      <MainFlex className="flex flex-col items-center py-36 text-center">
        <div className="section-badge">
          <span className="section-badge-dot" />
          <span className="section-badge-text">{t("badge")}</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-text-primary lg:text-[40px]">
          {t("title")}
        </h1>

        <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-text-tertiary">
          {t("description")}
        </p>
      </MainFlex>
    </section>
  );
}
