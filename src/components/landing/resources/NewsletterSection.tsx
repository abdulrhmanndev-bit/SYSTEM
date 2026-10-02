"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Path from "@/components/shared/Path";

export default function NewsletterSection() {
  const t = useTranslations("resources.newsletter");

  return (
    <section className="bg-sidebar">
      <MainFlex>
        <div className="flex min-h-72 flex-col items-center justify-center py-16 text-center">
          {/* Heading */}
          <h2 className="max-w-2xl text-3xl leading-tight font-bold tracking-tight text-sidebar-active-foreground">
            {t("title")}
            <br />
            {t("titleSecond")}
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm text-sidebar-foreground">
            {t("description")}
          </p>

          {/* Subscribe */}
          <form
            className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <Input
              type="email"
              placeholder={t("placeholder")}
              aria-label={t("placeholder")}
              className="h-10 flex-1 border-sidebar-border bg-sidebar-hover text-sidebar-active-foreground placeholder:text-sidebar-foreground"
            />

            <Button type="submit" className="h-10 shrink-0 px-5">
              {t("button")}

              <ArrowRight className="size-3.5 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </MainFlex>
        <Path />
    </section>
  );
}
