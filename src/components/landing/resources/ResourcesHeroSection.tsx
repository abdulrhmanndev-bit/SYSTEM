"use client";

import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

export default function ResourcesHeroSection() {
  const t = useTranslations("resources.hero");

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="flex flex-col items-center justify-center py-36 text-center">
          {/* Badge */}
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">{t("badge")}</span>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl leading-tight font-bold tracking-tight text-text-primary md:text-5xl">
            {t("title")}
            <br className="hidden sm:block" />
            {t("titleSecond")}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-relaxed font-medium text-text-tertiary">
            {t("description")}
          </p>
        </div>
      </MainFlex>
    </section>
  );
}
