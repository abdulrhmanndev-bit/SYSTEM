"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";
import {
  BedDouble,
  BusFront,
  CalendarCheck,
  CarFront,
  Hotel,
  MapPinned,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiFileExcel2Fill } from "react-icons/ri";

import {
  BackgroundMotion,
  ContentMotion,
  DotMotion,
  InnerCircleMotion,
  PipeGradient,
  PipeMotion,
  SourceMotion,
  UsersMotion,
} from "@/components/motions/Motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const positions = [
  "start-[20%] top-[25%]",
  "start-[11.5%] top-1/2 -translate-y-1/2",
  "start-[20%] bottom-[25%]",
] as const;

const delays = [0.05, 0.15, 0.25] as const;

const slides = [
  {
    titleKey: "communication",
    icons: [
      <FaWhatsapp key="whatsapp" className="size-7 text-[#3FC64F]" />,
      <FiPhoneCall
        key="phone"
        className="size-7 text-[#07A0C3]"
        strokeWidth={2.5}
      />,
      <RiFileExcel2Fill key="excel" className="size-7 text-[#107C41]" />,
    ],
  },
  {
    titleKey: "transportation",
    icons: [
      <BusFront key="bus" className="size-7 text-[#1769AA]" strokeWidth={2} />,
      <CarFront key="car" className="size-7 text-[#20B8C5]" strokeWidth={2} />,
      <MapPinned
        key="location"
        className="size-7 text-[#20A878]"
        strokeWidth={2}
      />,
    ],
  },
  {
    titleKey: "booking",
    icons: [
      <Hotel key="hotel" className="size-7 text-[#7C3AED]" strokeWidth={2} />,
      <CalendarCheck
        key="booking"
        className="size-7 text-[#F59E0B]"
        strokeWidth={2}
      />,
      <BedDouble
        key="room"
        className="size-7 text-[#E11D48]"
        strokeWidth={2}
      />,
    ],
  },
] as const;

const pipes = [
  ["top", "M 135 165 H 205 C 222 165 232 175 232 192 V 250", 0.45],
  ["middle", "M 92 250 H 340", 0.55],
  ["bottom", "M 135 335 H 205 C 222 335 232 325 232 308 V 250", 0.65],
] as const;

const autoplayOptions = {
  delay: 5000,
  stopOnInteraction: true,
};

function SourceItem({
  icon,
  position,
  delay,
}: {
  icon: React.ReactNode;
  position: string;
  delay: number;
}) {
  return (
    <SourceMotion
      delay={delay}
      className={`absolute z-30 grid size-18 place-items-center rounded-full bg-white/15 ${position}`}
    >
      <div className="grid size-14 place-items-center rounded-full bg-white shadow-sm">
        {icon}
      </div>
    </SourceMotion>
  );
}

export default function AuthVisual() {
  const t = useTranslations("visual");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [api, setApi] = useState<CarouselApi>();
  const [autoplay] = useState(() => Autoplay(autoplayOptions));

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!api) return () => {};

      api.on("select", callback);
      api.on("reInit", callback);

      return () => {
        api.off("select", callback);
        api.off("reInit", callback);
      };
    },
    [api],
  );

  const getSnapshot = useCallback(() => api?.selectedScrollSnap() ?? 0, [api]);

  const activeSlide = useSyncExternalStore(subscribe, getSnapshot, () => 0);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative hidden min-h-dvh overflow-hidden bg-primary lg:flex lg:flex-col lg:items-center">
      <Carousel
        setApi={setApi}
        plugins={[autoplay]}
        opts={{
          loop: true,
          direction: isRTL ? "rtl" : "ltr",
        }}
        className="contents"
      >
        {/* Carousel Controller */}
        <CarouselContent className="absolute size-0 overflow-hidden">
          {slides.map((slide) => (
            <CarouselItem key={slide.titleKey} />
          ))}
        </CarouselContent>

        {/* Visual */}
        <div className="relative mt-[8vh] aspect-square w-[88%] max-w-130">
          <BackgroundMotion className="absolute inset-[4%] rounded-full bg-white/8" />

          <InnerCircleMotion className="absolute inset-[18%] rounded-full border border-white/30" />

          {/* Pipes */}
          <svg
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 size-full"
          >
            <PipeGradient />

            <g transform={isRTL ? "translate(500 0) scale(-1 1)" : undefined}>
              {pipes.map(([id, path, delay]) => (
                <PipeMotion key={id} path={path} delay={delay} />
              ))}
            </g>
          </svg>

          {/* Source Icons */}
          {currentSlide.icons.map((icon, index) => (
            <SourceItem
              key={`${currentSlide.titleKey}-${index}`}
              icon={icon}
              position={positions[index]}
              delay={delays[index]}
            />
          ))}

          {/* Users Window */}
          <UsersMotion
            isRTL={isRTL}
            className="absolute inset-e-[2%] top-1/2 z-40 w-[45%] -translate-y-1/2"
          >
            <Image
              src="/auth/users.png"
              alt={t("imageAlt")}
              width={210}
              height={230}
              priority
              className="h-57.5 w-52.5 object-contain drop-shadow-md"
            />
          </UsersMotion>
        </div>

        {/* Bottom Content */}
        <ContentMotion className="absolute inset-x-0 bottom-[8%] flex flex-col items-center px-8 text-center">
          {/* Animated Title */}
          <SourceMotion
            key={currentSlide.titleKey}
            delay={0.3}
            className="max-w-100"
          >
            <h2 className="text-xl leading-snug font-semibold text-white">
              {t(`slides.${currentSlide.titleKey}`)}
            </h2>
          </SourceMotion>

          {/* Indicators */}
          <div className="mt-9 flex items-center gap-1">
            {slides.map((slide, index) => {
              const active = activeSlide === index;

              return (
                <button
                  key={slide.titleKey}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={t("goToSlide", { number: index + 1 })}
                  aria-pressed={active}
                  className="grid size-5 cursor-pointer place-items-center rounded-full"
                >
                  <DotMotion active={active} opacity={active ? 1 : 0.3} />
                </button>
              );
            })}
          </div>
        </ContentMotion>
      </Carousel>
    </section>
  );
}
