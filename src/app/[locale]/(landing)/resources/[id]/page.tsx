import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import ArticleContent from "@/components/landing/resources/featuredarticle/ArticleContent";
import ArticleCover from "@/components/landing/resources/featuredarticle/ArticleCover";
import ArticleHero from "@/components/landing/resources/featuredarticle/ArticleHero";
import ArticleRelated from "@/components/landing/resources/featuredarticle/ArticleRelated";

import { articles } from "@/components/landing/resources/ArticleData";

type Props = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

const getArticle = (id: string) =>
  articles.find((article) => article.id === Number(id));

export function generateStaticParams() {
  return articles.map(({ id }) => ({
    id: String(id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const article = getArticle(id);

  if (!article) return {};

  const t = await getTranslations({
    locale,
    namespace: "resources.ourteam",
  });

  return {
    title: t(`articles.${article.key}.title`),
    description: t(`articles.${article.key}.description`),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = getArticle(id);

  if (!article) notFound();

  return (
    <main>
      <ArticleHero article={article} />
      <ArticleCover />
      <ArticleContent article={article} />
      <ArticleRelated article={article} />
    </main>
  );
}
