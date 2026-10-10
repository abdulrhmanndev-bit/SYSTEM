import { Clock3 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import MainFlex from "@/components/shared/MainFlex";
import type { article } from "../ArticleData";

type Props = {
  article: article;
};

export default async function ArticleHero({ article }: Props) {
  const t = await getTranslations("resources.article");
  const articlesT = await getTranslations("resources.ourteam");

  return (
    <section className="py-16 md:py-24">
      <MainFlex>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">
              {t(`categories.${article.category ?? "operations"}`)}
            </span>
          </div>

          <h1 className="mt-2 text-3xl leading-tight font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {articlesT(`articles.${article.key}.title`)}
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            {articlesT(`articles.${article.key}.description`)}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-text-tertiary">
            <span className="font-medium text-text-primary">
              {t("by")} {t("author")}
            </span>

            <span aria-hidden="true">·</span>

            <Clock3 aria-hidden className="size-3.5" />

            <span>{t("readTime", { minutes: article.minutes })}</span>

            <span aria-hidden="true">·</span>

            <span>{article.date}</span>
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
