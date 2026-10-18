"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

import MainFlex from "@/components/shared/MainFlex";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  { image: 1, points: 3 },
  { image: 2, points: 3 },
  { image: 3, points: 3 },
  { image: 4, points: 3 },
  { image: 1, points: 3 },
  { image: 2, points: 3 },
  { image: 3, points: 3 },
  { image: 4, points: 3 },
  { image: 1, points: 3 },
  { image: 2, points: 3 },
] as const;

export default function FeaturesGrid() {
  const t = useTranslations("features.grid");

  return (
    <section className="bg-background py-20">
      <MainFlex>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(({ image, points }, index) => (
            <Card
              key={index}
              className="gap-0 overflow-hidden border-border bg-surface py-0 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Image */}
              <div className="linear flex h-48 items-center justify-center p-6 sm:h-52">
                <div className="  flex h-48 items-center justify-center overflow-hidden sm:h-52">
                  <Image
                    src={`/landing/features/${image}.png`}
                    alt={t(`items.${index}.title`)}
                    width={520}
                    height={260}
                    className="max-h-[85%] w-auto max-w-[85%] object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pt-6">
                <CardTitle className="text-base font-semibold text-text-primary">
                  {t(`items.${index}.title`)}
                </CardTitle>

                <CardDescription className="mt-2 text-sm leading-relaxed text-text-tertiary">
                  {t(`items.${index}.description`)}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-5 pb-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {Array.from({ length: points }, (_, point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-xs font-medium text-text-secondary"
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success-bg text-success">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>

                      <span>{t(`items.${index}.points.${point}`)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MainFlex>
    </section>
  );
}
