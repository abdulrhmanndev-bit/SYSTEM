
"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesCTA() {
  const t = useTranslations("features.cta");

  return (
    <section className="linear py-20">
      <MainFlex>
        <Card className="rounded-2xl border-border bg-surface py-0 shadow-none">
          <CardContent className="flex flex-col items-center px-6 py-12 text-center sm:py-14">
            <div className="section-badge mb-4">
              <span className="section-badge-dot" />
              <span className="section-badge-text">{t("badge")}</span>
            </div>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              {t("title")}
            </h2>

            <Button
              nativeButton={false}
              render={<Link href="/register" />}
              className="mt-6"
            >
              {t("button")}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Button>
          </CardContent>
        </Card>
      </MainFlex>
    </section>
  );
}
