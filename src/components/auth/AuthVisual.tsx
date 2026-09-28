"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
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

const sources: {
  id: string;
  position: string;
  delay: number;
  icon: ReactNode;
}[] = [
  {
    id: "whatsapp",
    position: "start-[20%] top-[25%]",
    delay: 0.25,
    icon: <FaWhatsapp className="size-7 text-[#3FC64F]" />,
  },
  {
    id: "phone",
    position: "start-[11.5%] top-1/2 -translate-y-1/2",
    delay: 0.35,
    icon: <FiPhoneCall className="size-7 text-[#07A0C3]" strokeWidth={2.5} />,
  },
  {
    id: "excel",
    position: "start-[20%] bottom-[25%]",
    delay: 0.45,
    icon: <RiFileExcel2Fill className="size-7 text-[#107C41]" />,
  },
];

const pipes = [
  {
    id: "whatsapp",
    path: "M 135 165 H 205 C 222 165 232 175 232 192 V 250",
    delay: 0.45,
  },
  {
    id: "phone",
    path: "M 92 250 H 340",
    delay: 0.55,
  },
  {
    id: "excel",
    path: "M 135 335 H 205 C 222 335 232 325 232 308 V 250",
    delay: 0.65,
  },
];

const dots = [1, 0.5, 0.35];

function SourceItem({
  position,
  delay,
  icon,
}: {
  position: string;
  delay: number;
  icon: ReactNode;
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
  const isRTL = useLocale() === "ar";

  return (
    <section className="relative hidden min-h-dvh overflow-hidden bg-primary lg:flex lg:flex-col lg:items-center">
      <div className="relative mt-[8vh] aspect-square w-[88%] max-w-130">
        <BackgroundMotion className="absolute inset-[4%] rounded-full bg-white/8" />

        <InnerCircleMotion className="absolute inset-[18%] rounded-full border border-white/30" />

        <svg
          viewBox="0 0 500 500"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 size-full"
        >
          <PipeGradient />

          <g transform={isRTL ? "translate(500 0) scale(-1 1)" : undefined}>
            {pipes.map(({ id, ...pipe }) => (
              <PipeMotion key={id} {...pipe} />
            ))}
          </g>
        </svg>

        {sources.map(({ id, ...source }) => (
          <SourceItem key={id} {...source} />
        ))}

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
            className="h-[230px] w-[210px] object-contain drop-shadow-md"
          />
        </UsersMotion>
      </div>

      <ContentMotion className="absolute inset-x-0 bottom-[8%] flex flex-col items-center px-8 text-center">
        <h2 className="max-w-90 text-xl leading-snug font-semibold text-white">
          {t("title")}
        </h2>

        <div className="mt-9 flex items-center gap-2">
          {dots.map((opacity, index) => (
            <DotMotion key={opacity} opacity={opacity} index={index} />
          ))}
        </div>
      </ContentMotion>
    </section>
  );
}
