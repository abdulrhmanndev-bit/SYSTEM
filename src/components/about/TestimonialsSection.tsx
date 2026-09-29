"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  name: "Victoria Wotton",
  company: "Fementum Odio Co.",
  image: "/about/customer-1.png",
}));

const stars = Array.from({ length: 5 });

export default function TestimonialsSection() {
  const t = useTranslations("about.testimonials");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16 lg:py-20">
          <div className="flex flex-col items-center text-center">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span className="section-badge-text">{t("badge")}</span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary">
              {t("title")}
            </h2>
          </div>

          <Carousel
            dir={direction}
            opts={{
              align: "start",
              loop: true,
              direction,
            }}
            className="mt-10"
          >
            <CarouselContent className="-ms-5">
              {testimonials.map(({ id, name, company, image }) => (
                <CarouselItem
                  key={id}
                  className="basis-full ps-5 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-44 gap-0 rounded-2xl bg-linear-to-r from-primary/25 to-trip-assigned/25 p-0 shadow-none">
                    <div className="flex h-full">
                      <div className="relative top-4 -end-2 w-[35%] shrink-0">
                        <Image
                          src={image}
                          alt={name}
                          width={120}
                          height={160}
                          className="h-40 w-30 object-contain object-bottom"
                        />
                      </div>

                      <CardContent className="z-10 flex min-w-0 flex-1 flex-col rounded-es-[30px] bg-surface px-5 py-6">
                        <CardDescription className="line-clamp-4 text-[10px] leading-relaxed text-text-secondary">
                          {t("review")}
                        </CardDescription>

                        <CardFooter className="mt-auto flex-col items-start gap-1 border-0 bg-transparent p-0">
                          <div
                            className="flex gap-0.5"
                            aria-label="5 out of 5 stars"
                          >
                            {stars.map((_, index) => (
                              <Star
                                key={index}
                                aria-hidden="true"
                                className="size-3 fill-warning text-warning"
                              />
                            ))}
                          </div>

                          <CardTitle className="text-xs font-semibold text-text-primary">
                            {name}
                          </CardTitle>

                          <p className="text-[9px] text-info">{company}</p>
                        </CardFooter>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-9 flex justify-center gap-3">
              <CarouselPrevious className="static size-9 translate-y-0" />
              <CarouselNext className="static size-9 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </MainFlex>
    </section>
  );
}
