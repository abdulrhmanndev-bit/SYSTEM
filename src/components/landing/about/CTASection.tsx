"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";
import Path from "@/components/shared/Path";

export default function CTASection() {
  const t = useTranslations("about.cta");

  return (
    <section className="relative  bg-sidebar">
      <MainFlex className="flex flex-col gap-5 items-center py-20 text-center">
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
      </MainFlex>

      <Path />
    </section>
  );
}
