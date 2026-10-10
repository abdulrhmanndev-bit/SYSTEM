import Image from "next/image";
import { getTranslations } from "next-intl/server";

import MainFlex from "@/components/shared/MainFlex";
import { statuses } from "./resource-articles";

export default async function ArticleCover() {
  const t = await getTranslations("resources.cover");

  return (
    <section className="bg-info-bg py-12 md:py-20">
      <MainFlex>
        <div className="relative py-4 sm:py-6">
          {/* Navy Card */}
          <div className="relative rounded-2xl bg-[#0B2239] px-4 py-2 shadow-lg sm:px-6 lg:ps-16 lg:pe-32">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/resources/articlecover.png"
                alt={t("imageAlt")}
                width={1780}
                height={864}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 75vw"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Workflow Badge */}
          <div className="absolute inset-e-[9%] top-2 z-10 max-w-[80%] rounded-lg border border-border bg-surface px-3 py-2 shadow-sm">
            <p className="text-[9px] font-medium text-text-primary sm:text-xs">
              {t("workflow")}
            </p>
          </div>

          {/* Trip Status Card */}
          <div className="absolute bottom-0 inset-s-4 z-10 w-36 rounded-xl border border-border bg-surface p-3 shadow-lg sm:inset-s-5 sm:w-44 sm:p-4">
            <p className="mb-3 text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">
              {t("tripStatus")}
            </p>

            <div className="space-y-2">
              {statuses.map(({ key, color }) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`size-2 shrink-0 rounded-full ${color}`}
                  />

                  <span className="text-[10px] text-text-primary sm:text-xs">
                    {t(`statuses.${key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
