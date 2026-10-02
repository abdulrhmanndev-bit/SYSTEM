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

const FILTERS = [
  "all",
  "operations",
  "fleet",
  "product",
  "guides",
  "industry",
] as const;

type Filter = (typeof FILTERS)[number];
type ArticleCategory = Exclude<Filter, "all">;

type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
};

const ARTICLES_PER_PAGE = 9;

const articles: Article[] = [
  {
    id: 1,
    slug: "fleet-utilization-revenue",
    title: "Five Signals Your Fleet Utilization Is Leaking Revenue",
    description:
      "The patterns that quietly erode margin — and how to spot them before they compound.",
    date: "Sep 2026",
    readTime: "5 min read",
    category: "fleet",
  },
  {
    id: 2,
    slug: "fleet-efficiency-strategies",
    title: "Maximizing Fleet Efficiency: Key Strategies to Implement",
    description:
      "Proven techniques to enhance your fleet performance and increase profitability.",
    date: "Oct 2026",
    readTime: "6 min read",
    category: "fleet",
  },
  {
    id: 3,
    slug: "hidden-costs-fleet-management",
    title: "The Hidden Costs of Poor Fleet Management",
    description:
      "Identifying the financial impacts of ineffective fleet oversight and how to mitigate them.",
    date: "Nov 2026",
    readTime: "7 min read",
    category: "operations",
  },
  {
    id: 4,
    slug: "fleet-management-technologies",
    title: "Innovative Technologies Transforming Fleet Management",
    description:
      "Exploring cutting-edge solutions that boost operational effectiveness.",
    date: "Dec 2026",
    readTime: "8 min read",
    category: "product",
  },
  {
    id: 5,
    slug: "reducing-fuel-costs",
    title: "Reducing Fuel Costs: Effective Tactics for Fleet Operators",
    description:
      "Strategies to minimize fuel consumption while maintaining productivity.",
    date: "Jan 2027",
    readTime: "5 min read",
    category: "guides",
  },
  {
    id: 6,
    slug: "fleet-management-costs",
    title: "The Hidden Costs of Poor Fleet Management",
    description:
      "Identifying the financial impacts of ineffective fleet oversight and how to mitigate them.",
    date: "Nov 2026",
    readTime: "7 min read",
    category: "industry",
  },
  {
    id: 7,
    slug: "data-analytics-fleet",
    title: "The Role of Data Analytics in Fleet Optimization",
    description:
      "Leveraging data to make informed decisions that drive efficiency and savings.",
    date: "Feb 2027",
    readTime: "6 min read",
    category: "fleet",
  },
  {
    id: 8,
    slug: "fleet-maintenance-practices",
    title: "Best Practices for Fleet Maintenance",
    description:
      "Essential maintenance strategies to ensure vehicle longevity and reliability.",
    date: "Mar 2027",
    readTime: "5 min read",
    category: "guides",
  },
  {
    id: 9,
    slug: "fleet-sustainability",
    title: "Emerging Trends in Fleet Sustainability",
    description:
      "Sustainable practices that reduce environmental impact and enhance corporate responsibility.",
    date: "Apr 2027",
    readTime: "7 min read",
    category: "industry",
  },
  {
    id: 10,
    slug: "connected-fleet-operations",
    title: "Building Connected Fleet Operations",
    description:
      "How connected workflows help transportation teams operate with greater visibility.",
    date: "May 2027",
    readTime: "6 min read",
    category: "operations",
  },
  {
    id: 11,
    slug: "driver-performance",
    title: "Improving Driver Performance with Better Data",
    description:
      "Use operational data to understand performance and improve daily fleet execution.",
    date: "Jun 2027",
    readTime: "5 min read",
    category: "operations",
  },
  {
    id: 12,
    slug: "transportation-automation",
    title: "Where Automation Fits in Transportation Operations",
    description:
      "A practical look at automating repetitive transportation workflows.",
    date: "Jul 2027",
    readTime: "7 min read",
    category: "product",
  },
  {
    id: 13,
    slug: "fleet-planning",
    title: "A Practical Guide to Better Fleet Planning",
    description:
      "Build more predictable fleet plans using connected operational information.",
    date: "Aug 2027",
    readTime: "6 min read",
    category: "guides",
  },
  {
    id: 14,
    slug: "dispatch-visibility",
    title: "Why Dispatch Teams Need Real-Time Visibility",
    description:
      "Understand how real-time information can simplify dispatch decisions.",
    date: "Sep 2027",
    readTime: "5 min read",
    category: "operations",
  },
  {
    id: 15,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 16,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 17,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 18,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 19,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 15,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 20,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
  {
    id: 21,
    slug: "transportation-cost-control",
    title: "Controlling Transportation Costs at Scale",
    description:
      "Practical approaches for understanding and controlling operational costs.",
    date: "Oct 2027",
    readTime: "8 min read",
    category: "industry",
  },
];

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
