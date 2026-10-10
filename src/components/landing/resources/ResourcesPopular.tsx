import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import MainFlex from "@/components/shared/MainFlex";

const resources = [
  {
    key: "operations",
    type: "guide",
    minutes: 15,
    action: "view",
    href: "/resources/guides/transportation-operations",
  },
  {
    key: "fleet",
    type: "checklist",
    minutes: 6,
    action: "download",
    href: "/resources/guides/fleet-management-checklist",
  },
  {
    key: "routes",
    type: "guide",
    minutes: 12,
    action: "view",
    href: "/resources/guides/route-planning",
  },
  {
    key: "kpi",
    type: "guide",
    minutes: 9,
    action: "view",
    href: "/resources/guides/transportation-kpi",
  },
] as const;

export default function ResourcesPopular() {
  const t = useTranslations("resources.popular");

  return (
    <section className="py-16 md:py-24">
      <MainFlex>
        <div className="mb-10">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">{t("badge")}</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map(({ key, type, minutes, action, href }) => (
            <Link
              key={key}
              href={href}
              className="group flex min-h-90 flex-col rounded-2xl border border-border bg-surface-subtle p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-h-97.5"
            >
              <div className="relative mb-5 flex h-32 items-start justify-start">
                <Image
                  src="/resources/notes.png"
                  alt=""
                  width={150}
                  height={180}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                />

                <span className="absolute inset-s-12 top-0 rounded-full bg-trip-assigned px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                  {t(`types.${type}`)}
                </span>
              </div>

              <div className="mb-2 flex items-center gap-1.5 text-xs text-text-tertiary">
                <Clock3 aria-hidden className="size-3.5" />
                <span>{t("readTime", { minutes })}</span>
              </div>

              <h3 className="text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
                {t(`items.${key}.title`)}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {t(`items.${key}.description`)}
              </p>

              <span className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary transition-colors group-hover:border-primary group-hover:text-primary">
                {t(`actions.${action}`)}
                <ArrowUpRight aria-hidden className="size-4 rtl:-scale-x-100" />
              </span>
            </Link>
          ))}
        </div>
      </MainFlex>
    </section>
  );
}
