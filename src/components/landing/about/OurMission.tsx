import Image from "next/image";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

export default function MissionSection() {
  const t = useTranslations("about.mission");

  return (
    <section className="bg-info-bg">
      <MainFlex>
        <div className="grid  items-center  py-16 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="section-badge-text">{t("badge")}</span>
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
              width={676}
              height={422}
              className="  object-cover"
              priority
            />
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
