"use client";

import { useTranslations } from "next-intl";

import  MainFlex  from "@/components/shared/MainFlex";

export default function HeroSection() {
  const t = useTranslations("about.hero");

  return (
    <section className="bg-background mt-20">
      <MainFlex>
        <div className="flex  w-full flex-col items-center justify-center py-16 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
            <span className="size-1.5 rounded-full bg-trip-assigned" />

            <span className="text-[12px] font-medium text-info-text">
              {t("badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-tight text-text-primary lg:text-[40px]">
            {t("title")}
            <br />
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