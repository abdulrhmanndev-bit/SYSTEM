"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import MainFlex from "@/components/shared/MainFlex";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { articles } from "./ArticleData";

const PAGE_SIZE = 9;

export default function ResourcesOurTeam() {
  const t = useTranslations("resources.ourteam");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  const currentArticles = articles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const startPage = Math.min(
    Math.max(page - 1, 1),
    Math.max(totalPages - 2, 1),
  );

  const visiblePages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, index) => startPage + index,
  );

  const firstVisible = visiblePages[0];
  const lastVisible = visiblePages[visiblePages.length - 1];

  const changePage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  return (
    <section className="py-16 md:py-24">
      <MainFlex>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="section-badge-text">{t("badge")}</span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
              {t("title")}
            </h2>
          </div>


                  {totalPages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  aria-label={t("previous")}
                  disabled={page === 1}
                  onClick={() => changePage(page - 1)}
                />
              </PaginationItem>

              {firstVisible > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink onClick={() => changePage(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>

                  {firstVisible > 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              )}

              {visiblePages.map((number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                    isActive={page === number}
                    onClick={() => changePage(number)}
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {lastVisible < totalPages && (
                <>
                  {lastVisible < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  <PaginationItem>
                    <PaginationLink onClick={() => changePage(totalPages)}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  aria-label={t("next")}
                  disabled={page === totalPages}
                  onClick={() => changePage(page + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article) => (
            <Link
              key={article.id}
              href={`/resources/articles/${article.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="overflow-hidden rounded-lg bg-surface-subtle">
                <Image
                  src="/resources/cards.png"
                  alt=""
                  width={600}
                  height={380}
                  className="aspect-[1.6] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col pt-4">
                <h3 className="text-sm font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
                  {t(`articles.${article.key}.title`)}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-tertiary">
                  {t(`articles.${article.key}.description`)}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3">
                  <span className="text-xs text-text-disabled">
                    {article.date} · {article.minutes} {t("minRead")}
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
