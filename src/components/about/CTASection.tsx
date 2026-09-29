"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const t = useTranslations("about.cta");

  return (
    <section className="relative  bg-sidebar">
      <MainFlex>
        <div className=" flex flex-col gap-5 items-center py-20 text-center">
          {/* Title */}
          <h2 className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-white lg:text-[32px]">
            {t("title")}
          </h2>

          {/* Description */}
          <p className=" max-w-xl text-md leading-snug text-sidebar-foreground">
            {t("description")}
          </p>

          {/* CTA */}
          <Button className="mt-6 h-10 gap-2 px-5  font-medium">
            {t("button")}
            <ArrowRight className="size-3.5 rtl:rotate-180" />
          </Button>
        </div>
      </MainFlex>

      {/* Decorative Path */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 w-full text-trip-assigned"
      >
        <path
          d="M0 240 C280 255 480 285 700 255 C930 225 1080 125 1200 70 C1290 30 1360 5 1440 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 12"
          opacity="0.35"
        />

        {/* Start Dot */}
        <circle cx="10" cy="240" r="8" fill="currentColor" opacity="0.55" />

        {/* Middle Dot */}
        <circle cx="1130" cy="104" r="10" fill="currentColor" opacity="0.65" />
      </svg>
    </section>
  );
}
