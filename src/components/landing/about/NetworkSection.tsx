"use client";

import Image from "next/image";
import {
  BusFront,
  Calculator,
  ContactRound,
  Grid2X2,
  IdCard,
  ScrollText,
  Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";

import MainFlex from "@/components/shared/MainFlex";

const ease = [0.22, 1, 0.36, 1] as const;

const nodes = [
  ["customers", Users, "start-[9%] top-[15%]"],
  ["drivers", IdCard, "start-[41%] top-[8%]"],
  ["vehicles", BusFront, "end-[11%] top-[13%]"],
  ["suppliers", ScrollText, "start-[22%] top-[43%]"],
  ["services", Grid2X2, "end-[21%] top-[43%]"],
  ["routes", ContactRound, "start-[11%] bottom-[12%]"],
  ["programs", ContactRound, "start-[45%] bottom-[7%]"],
  ["accounting", Calculator, "end-[4%] bottom-[14%]"],
] as const;

const paths = [
  "M500 160 C420 90 330 110 150 65",
  "M500 160 C510 120 500 95 480 65",
  "M500 160 C620 170 650 65 835 60",
  "M500 160 C430 145 400 170 280 165",
  "M500 160 C590 205 610 165 720 165",
  "M500 160 C410 185 360 270 190 265",
  "M500 160 C480 220 500 245 510 270",
  "M500 160 C570 250 710 210 875 255",
] as const;

const nodeClass =
  "flex items-center gap-2 border border-border bg-surface text-text-primary";

const centerClass =
  "flex size-20 flex-col items-center justify-center rounded-2xl bg-surface-inverse text-text-inverse";

function CenterNode({ animated = false }: { animated?: boolean }) {
  const content = (
    <>
      <Image
        src="/about/linked.png"
        alt=""
        width={32}
        height={32}
        className="size-8 object-center"
      />

      <span className="mt-2 text-[9px] font-semibold">TRANSORA</span>
    </>
  );

  if (!animated) {
    return <div className={centerClass}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        delay: 0.2,
      }}
      className={`absolute start-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-lg rtl:translate-x-1/2 ${centerClass}`}
    >
      {content}
    </motion.div>
  );
}

export default function NetworkSection() {
  const t = useTranslations("about.network");
  const isRTL = useLocale() === "ar";

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="flex flex-col items-center text-center">
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span className="section-badge-text">{t("badge")}</span>
          </div>

          <h2 className=" max-w-xl text-3xl leading-tight font-bold tracking-tight text-text-primary lg:text-[32px]">
            {t("title")}
            <br />
            {t("titleSecond")}
          </h2>
        </div>

        <div className="relative mt-12 hidden h-80 overflow-hidden rounded-2xl border border-info-border linear shadow-sm md:block">
          <svg
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full"
            style={{
              transform: isRTL ? "scaleX(-1)" : undefined,
            }}
          >
            {paths.map((path, index) => (
              <g key={path}>
                <path
                  d={path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.22"
                  className="text-info"
                />

                <motion.path
                  d={path}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="5 10"
                  initial={{ strokeDashoffset: 15 }}
                  animate={{ strokeDashoffset: -15 }}
                  transition={{
                    duration: 2.6,
                    delay: index * 0.12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-info"
                />
              </g>
            ))}
          </svg>

          <CenterNode animated />

          {nodes.map(([key, Icon, position], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.35 + index * 0.08,
                ease,
              }}
              className={`absolute z-10 min-w-32 rounded-lg px-5 py-3 shadow-sm ${nodeClass} ${position}`}
            >
              <Icon className="size-4 shrink-0 text-info" strokeWidth={1.7} />

              <span className="text-sm font-medium">{t(key)}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
          <div className="col-span-2 mb-2 flex justify-center">
            <CenterNode />
          </div>

          {nodes.map(([key, Icon]) => (
            <div key={key} className={`rounded-xl p-4 ${nodeClass}`}>
              <Icon className="size-4 shrink-0 text-info" />

              <span className="text-sm font-medium">{t(key)}</span>
            </div>
          ))}
        </div>
      </MainFlex>
    </section>
  );
}
