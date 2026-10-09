import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import MainFlex from "@/components/shared/MainFlex";

const resources = [
  {
    key: "articles",
    image: "/resources/articles.png",
    href: "/resources/articles",
  },
  {
    key: "guides",
    image: "/resources/guides.png",
    href: "/resources/guides",
  },
  {
    key: "updates",
    image: "/resources/updates.png",
    href: "/resources/updates",
  },
  {
    key: "help",
    image: "/resources/help.png",
    href: "/resources/help",
  },
] as const;

export default function ResourcesExplore() {
  const t = useTranslations("resources.explore");

  return (
    <section className="py-16 md:py-24">
      <MainFlex>
        <div className="mb-12 text-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">{t("badge")}</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {resources.map(({ key, image, href }, index) => (
            <Link
              key={key}
              href={href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card-bg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="linear relative flex h-48 items-center justify-center overflow-hidden sm:h-52">
                <Image
                  src={image}
                  alt=""
                  width={520}
                  height={260}
                  className="max-h-[85%] w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="mb-2 text-xs font-medium text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-primary">
                  {t(`${key}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`${key}.description`)}
                </p>

                <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-sm font-medium text-primary">
                  {t(`${key}.action`)}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </MainFlex>
    </section>
  );
}
