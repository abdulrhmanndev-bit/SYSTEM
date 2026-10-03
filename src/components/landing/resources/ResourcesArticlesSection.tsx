"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
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
import { Link } from "@/i18n/navigation";
import { articles, Filter, FILTERS } from "./ArticleData";







const ARTICLES_PER_PAGE = 9;



export default function ResourcesArticlesSection() {
  const t = useTranslations("resources.articles");

  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles =
    activeFilter === "all"
      ? articles
      : articles.filter(({ category }) => category === activeFilter);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE,
  );

  const changeFilter = (filter: Filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((filter) => (
              <Button
                key={filter}
                type="button"
                size="sm"
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => changeFilter(filter)}
                className="h-8 rounded-full px-5 text-xs font-normal"
              >
                {t(`filters.${filter}`)}
              </Button>
            ))}
          </div>

          <div className="flex min-h-[900px] flex-col">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map((article) => (
                <Card key={article.id} className="h-full gap-0 p-3 shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-surface-subtle">
                    <Image
                      src="/resources/cards.png"
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <CardHeader className="mt-4 gap-2 px-0">
                    <CardTitle className="line-clamp-2 text-sm font-semibold">
                      {article.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-2 text-xs leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto justify-between bg-transparent px-0 py-3">
                    <span className="text-[10px] text-text-disabled">
                      {article.date} · {article.readTime}
                    </span>

                    <Link
                      href={`/resources/${article.slug}`}
                      aria-label={article.title}
                      className="text-primary transition-colors hover:text-primary-hover"
                    >
                      <ArrowUpRight className="size-3.5 rtl:-rotate-90" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-auto pt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((page) => page - 1)}
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                          className="size-9"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}

                  <PaginationItem>
                    <PaginationNext
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((page) => page + 1)}
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
