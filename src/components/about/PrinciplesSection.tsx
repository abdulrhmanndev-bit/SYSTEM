import { Eye, Gauge, Route, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

const principles = [
  {
    key: "clarity",
    number: "01",
    icon: Eye,
  },
  {
    key: "control",
    number: "02",
    icon: Gauge,
  },
  {
    key: "connectivity",
    number: "03",
    icon: Route,
  },
  {
    key: "improvement",
    number: "04",
    icon: Zap,
  },
] as const;

export default function PrinciplesSection() {
  const t = useTranslations("about.principles");

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16 lg:py-20">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
              <span className="size-1.5 rounded-full bg-trip-assigned" />

              <span className="text-[12px] font-medium text-info-text">
                {t("badge")}
              </span>
            </div>

            <h2 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-text-primary lg:text-[32px]">
              {t("title")}
            </h2>
          </div>

          {/* Principles */}
          <div className="mt-12  grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ key, number, icon: Icon }) => (
              <article
                key={key}
                className="rounded-xl border border-border bg-info-bg p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-text-disabled/20 text-trip-assigned">
                    <Icon className="size-4" strokeWidth={1.8} />
                  </div>

                  <span className="text-xl font-medium text-text-disabled">
                    {number}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-base font-semibold text-text-primary">
                    {t(`${key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm  leading-relaxed text-text-secondary">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
