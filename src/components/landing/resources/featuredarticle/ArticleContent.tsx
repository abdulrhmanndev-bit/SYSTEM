import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

import MainFlex from "@/components/shared/MainFlex";
import type { article } from "../ArticleData";
import {
  columns,
  sections,
  statusColors,
  trips,
  workflowSteps,
} from "./resource-articles";
import ArticleTableOfContents from "./ArticleTableOfContents";

type Props = {
  article: article;
};

const contentKeys: Record<string, string> = {
  fleetUtilization: "utilization",
  fleetEfficiency: "efficiency",
  fleetCosts: "costs",
};

export default async function ArticleContent({ article }: Props) {
  const t = await getTranslations("resources.article");

  const articleKey = contentKeys[article.key] ?? article.key;
  const content = (key: string) => t(`items.${articleKey}.content.${key}`);

  const tocItems = sections.map((section) => ({
    id: section,
    title: t(`sections.${section}`),
  }));

  return (
    <section className="py-16 md:py-24">
      <MainFlex>
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <ArticleTableOfContents title={t("contents")} items={tocItems} />

          <article className="min-w-0 max-w-3xl space-y-14">
            <section id="challenge" className="scroll-mt-24">
              <SectionHeading number="01" title={t("sections.challenge")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("challenge")}
              </p>

              <div className="mt-6 rounded-xl border border-border bg-info-bg p-5">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {t("keyIdea")}
                </span>

                <p className="mt-2 text-sm leading-7 text-text-primary">
                  {content("keyIdea")}
                </p>
              </div>
            </section>

            <section id="spreadsheets" className="scroll-mt-24">
              <SectionHeading number="02" title={t("sections.spreadsheets")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("spreadsheets")}
              </p>

              <div className="mt-5 space-y-3">
                {[1, 2, 3, 4].map((number) => (
                  <div key={number} className="flex items-start gap-2.5">
                    <CheckCircle2
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-trip-completed"
                    />
                    <p className="text-sm leading-6 text-text-secondary">
                      {content(`problem${number}`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
                <div className="border-b border-border bg-surface-subtle px-4 py-3 text-xs font-medium text-text-secondary">
                  {t("table.title")}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-115 text-xs">
                    <thead className="bg-surface-subtle text-text-tertiary">
                      <tr>
                        {columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="px-4 py-3 text-start font-medium"
                          >
                            {t(`table.${column}`)}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-border">
                      {trips.map((trip) => (
                        <tr key={trip.route}>
                          <td className="px-4 py-3 text-text-primary">
                            {trip.route}
                          </td>
                          <td className="px-4 py-3 text-text-secondary">
                            {trip.vehicle}
                          </td>
                          <td className="px-4 py-3 text-text-secondary">
                            {trip.driver}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${statusColors[trip.status]}`}
                            >
                              {t(`table.statuses.${trip.status}`)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="workflow" className="scroll-mt-24">
              <SectionHeading number="03" title={t("sections.workflow")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("workflow")}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex min-w-0 items-center gap-2">
                    <div
                      className={`flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-lg px-2 text-center text-xs font-medium ${
                        index === workflowSteps.length - 1
                          ? "bg-primary text-white"
                          : "bg-surface-subtle text-text-primary"
                      }`}
                    >
                      {t(`workflow.${step}`)}
                    </div>

                    {index < workflowSteps.length - 1 && (
                      <ArrowRight
                        aria-hidden
                        className="hidden size-3.5 shrink-0 text-primary sm:block rtl:rotate-180"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section id="visibility" className="scroll-mt-24">
              <SectionHeading number="04" title={t("sections.visibility")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("visibility")}
              </p>

              <blockquote className="mt-6 border-s-4 border-primary ps-5">
                <p className="text-lg leading-relaxed font-semibold text-text-primary">
                  {content("quote")}
                </p>
                <footer className="mt-2 text-xs text-text-tertiary">
                  {t("author")}
                </footer>
              </blockquote>

              <div className="mt-8 rounded-xl border border-border bg-surface p-5 shadow-sm">
                <p className="mb-5 text-xs font-semibold text-text-primary">
                  {t("chart.title")}
                </p>

                <svg
                  viewBox="0 0 600 180"
                  role="img"
                  aria-label={t("chart.title")}
                  className="w-full"
                >
                  <path
                    d="M20 20 H580 M20 65 H580 M20 110 H580 M20 155 H580"
                    stroke="currentColor"
                    strokeOpacity=".08"
                    fill="none"
                  />
                  <path
                    d="M20 30 C140 55 250 85 350 110 S500 140 580 150"
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                <div className="flex justify-between gap-4 text-xs text-text-tertiary">
                  <span>{t("chart.before")}</span>
                  <span>{t("chart.after")}</span>
                </div>
              </div>
            </section>

            <section id="scaling" className="scroll-mt-24">
              <SectionHeading number="05" title={t("sections.scaling")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("scaling")}
              </p>

              <div className="mt-5 space-y-3">
                {[1, 2, 3].map((number) => (
                  <div key={number} className="flex items-start gap-2.5">
                    <CheckCircle2
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-trip-completed"
                    />
                    <p className="text-sm leading-6 text-text-secondary">
                      {content(`benefit${number}`)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="conclusion" className="scroll-mt-24">
              <SectionHeading number="06" title={t("sections.conclusion")} />

              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {content("conclusion")}
              </p>
            </section>
          </article>
        </div>
      </MainFlex>
    </section>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-semibold tracking-widest text-primary">
        {number}
      </span>
      <h2 className="mt-2 text-xl font-bold tracking-tight text-text-primary md:text-2xl">
        {title}
      </h2>
    </div>
  );
}
