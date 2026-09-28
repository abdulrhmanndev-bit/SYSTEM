import Image from "next/image";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

export default function MissionSection() {
  const t = useTranslations("about.mission");

  return (
    <section className="bg-info-bg">
      <MainFlex>
        <div className="grid min-h-96 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1">
              <span className="size-1.5 rounded-full bg-trip-assigned" />

              <span className="text-[12px] font-medium text-info-text">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-lg text-3xl leading-tight font-bold tracking-tight text-text-primary lg:text-[32px]">
              {t("title")}
            </h2>

            {/* Description */}
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
              <p>{t("description")}</p>

              <p>{t("story")}</p>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <Image
              src="/about/mission.png"
              alt=""
              width={600}
              height={500}
              className="h-auto w-full max-w-md object-contain"
              loading="eager"
            />
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
