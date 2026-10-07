"use client";

import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="overflow-hidden bg-background">
      <MainFlex>
        <div className="grid items-center gap-10 py-16 lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 lg:py-0">
          {/* Content */}
          <div className="flex min-w-0 flex-col items-start">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="section-badge-text">{t("badge")}</span>
            </div>

            <h1 className="max-w-2xl text-4xl leading-tight font-bold tracking-tight text-text-primary lg:text-[40px]">
              {t("title")}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
              {t("description")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/request-demo" />}
                className="h-11 px-6"
              >
                {t("requestDemo")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/platform" />}
                variant="outline"
                className="h-11 bg-surface px-6"
              >
                {t("explorePlatform")}
              </Button>
            </div>

            <div className="mt-6 flex items-start gap-2 text-sm text-text-tertiary">
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" />
              <span>{t("note")}</span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex min-w-0 items-center justify-center lg:justify-end">
            <Image
              src="/home/bg.png"
              alt={t("imageAlt")}
              width={1207}
              height={999}
              priority
              className="h-auto w-full max-w-[1207px] object-contain"
            />
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
