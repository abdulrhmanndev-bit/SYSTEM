"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function FeaturedArticleSection() {
  const t = useTranslations("resources.featured");

  return (
    <section className="bg-info-bg">
      <MainFlex className="py-15">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-60 overflow-hidden md:min-h-72">
            <Image
              src="/resources/feature.png"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-8 md:px-10 lg:px-12">
            {/* Badge */}
            <div className="section-badge w-fit">
              <span className="section-badge-text uppercase">{t("badge")}</span>
            </div>

            {/* Title */}
            <h2 className="max-w-lg text-xl font-bold leading-snug text-text-primary lg:text-2xl">
              {t("title")}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-text-tertiary">
              {t("description")}
            </p>

            {/* Meta */}
            <div className="mt-5 flex items-center gap-3 text-[10px] text-text-disabled">
              <span>{t("date")}</span>

              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-text-disabled"
              />

              <span>{t("readTime")}</span>
            </div>

            {/* Read Article Button */}
            <Button
              nativeButton={false}
              render={<Link href="/resources/operators-guide" />}
              className="mt-5 w-fit gap-2"
            >
              {t("readArticle")}

              <ArrowRight
                aria-hidden="true"
                className="size-4 rtl:rotate-180"
              />
            </Button>
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
