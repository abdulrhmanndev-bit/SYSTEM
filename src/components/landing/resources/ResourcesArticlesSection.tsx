"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { articles, FILTERS, type Filter } from "./ArticleData";

const ARTICLES_PER_PAGE = 9;

export default function ResourcesArticlesSection() {
  const t = useTranslations("resources.articles");

  const [filter, setFilter] = useState<Filter>("all");
  const [page, setPage] = useState(1);

  const filtered =
    filter === "all"
      ? articles
      : articles.filter(({ category }) => category === filter);

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);

  const currentArticles = filtered.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE,
  );

  const changeFilter = (value: Filter) => {
    setFilter(value);
    setPage(1);
  };

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={filter === item ? "default" : "outline"}
                onClick={() => changeFilter(item)}
                className="h-8 rounded-full px-5 text-xs font-normal"
              >
                {t(`filters.${item}`)}
              </Button>
            ))}
          </div>

          <div className="flex min-h-225 flex-col">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map(
                ({ id, title, description, date, readTime, slug }) => (
                  <Card key={id} className="h-full gap-0 p-3 shadow-sm">
                    <div className="aspect-16/10 overflow-hidden rounded-lg bg-surface-subtle">
                      <Image
                        src="/resources/cards.png"
                        alt={title}
                        width={500}
                        height={250}
                        className="size-full object-cover"
                      />
                    </div>

                    <CardHeader className="mt-4 gap-2 px-0">
                      <CardTitle className="line-clamp-2 text-sm font-semibold">
                        {title}
                      </CardTitle>

                      <CardDescription className="line-clamp-2 text-xs leading-relaxed">
                        {description}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="mt-auto justify-between bg-transparent px-0 py-3">
                      <span className="text-[10px] text-text-disabled">
                        {date} · {readTime}
                      </span>

                      <Link
                        href={`/resources/${slug}`}
                        aria-label={title}
                        className="text-primary transition-colors hover:text-primary-hover"
                      >
                        <ArrowUpRight className="size-3.5 rtl:-rotate-90" />
                      </Link>
                    </CardFooter>
                  </Card>
                ),
              )}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-auto pt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      disabled={page === 1}
                      onClick={() => setPage((current) => current - 1)}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;

                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          isActive={page === pageNumber}
                          onClick={() => setPage(pageNumber)}
                          className="size-9"
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      disabled={page === totalPages}
                      onClick={() => setPage((current) => current + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </MainFlex>
    </section>
  );
}
