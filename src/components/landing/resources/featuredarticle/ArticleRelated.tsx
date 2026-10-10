import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

import { articles, type article } from "../ArticleData";

type Props = {
  article: article;
};

export default async function ArticleRelated({ article }: Props) {
  const t = await getTranslations("resources.ourteam");
  const common = await getTranslations("resources.article");

  const related = articles
    .filter(({ id, key }) => id !== article.id && key !== article.key)
    .slice(0, 3);

  return (
    <section className="border-t border-border py-16 md:py-24">
      <MainFlex>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-text-primary">
            {common("continueReading")}
          </h2>

          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/resources" />}
            className="gap-2 text-primary"
          >
            {common("allArticles")}
            <ArrowRight aria-hidden className="size-4 rtl:rotate-180" />
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/resources/${item.id}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="relative aspect-[1.6] overflow-hidden rounded-lg bg-surface-subtle">
                <Image
                  src="/resources/cards.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col pt-4">
                <h3 className="text-sm font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
                  {t(`articles.${item.key}.title`)}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-tertiary">
                  {t(`articles.${item.key}.description`)}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-xs text-text-disabled">
                    {item.date} · {item.minutes} {t("minRead")}
                  </span>

                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </MainFlex>
    </section>
  );
}
