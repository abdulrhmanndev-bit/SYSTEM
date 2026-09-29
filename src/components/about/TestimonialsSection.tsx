"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Star } from "lucide-react";

import MainFlex from "@/components/shared/MainFlex";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Victoria Wotton",
    company: "Fementum Odio Co.",
    image: "/about/customer-1.png",
  },
  {
    id: 2,
    name: "Victoria Wotton",
    company: "Fementum Odio Co.",
    image: "/about/customer-1.png",
  },
  {
    id: 3,
    name: "Victoria Wotton",
    company: "Fementum Odio Co.",
    image: "/about/customer-1.png",
  },
  {
    id: 4,
    name: "Victoria Wotton",
    company: "Fementum Odio Co.",
    image: "/about/customer-1.png",
  },
] as const;

export default function TestimonialsSection() {
  const t = useTranslations("about.testimonials");
  const locale = useLocale();

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16 lg:py-20">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
            <span className="size-1.5 rounded-full bg-trip-assigned" />

            <span className="text-[12px] font-medium text-info-text">
              {t("badge")}
            </span>
          </div>

            <h2 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-text-primary">
              {t("title")}
            </h2>
          </div>

          {/* Carousel */}
          <Carousel
            dir={dir}
            opts={{
              align: "start",
              loop: true,
              direction: dir,
            }}
            className="mt-10 w-full"
          >
            <CarouselContent className="-ms-5">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-full ps-5 md:basis-1/2 lg:basis-1/3"
                >
                  <article className="flex h-48 overflow-hidden rounded-2xl border border-border bg-surface">
                    {/* Customer Image */}
                    <div className="relative w-[36%] shrink-0 bg-info-bg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="(max-width: 768px) 36vw, 180px"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex min-w-0 flex-1 flex-col p-5">
                      <p className="line-clamp-3 text-xs leading-relaxed text-text-secondary">
                        {t("review")}
                      </p>

                      <div className="mt-auto">
                        {/* Rating */}
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              className="size-3.5 fill-warning text-warning"
                            />
                          ))}
                        </div>

                        <h3 className="mt-2 text-sm font-semibold text-text-primary">
                          {testimonial.name}
                        </h3>

                        <p className="mt-0.5 text-[10px] text-info">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="mt-9 flex items-center justify-center gap-3">
              <CarouselPrevious className="static size-9 translate-y-0 rtl:rotate-180" />
              <CarouselNext className="static size-9 translate-y-0 rtl:rotate-180" />
            </div>
          </Carousel>
        </div>
      </MainFlex>
    </section>
  );
}