"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { cn } from "cn";

import { Link, usePathname } from "@/i18n/navigation";

import MainFlex from "@/components/shared/MainFlex";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../Toggles/ModeToggle";
import LanguageSwitcher from "../Toggles/LanguageSwitcher";

const navLinks = [
  ["platform", "/"],
  ["solutions", "/solutions"],
  ["features", "/features"],
  ["resources", "/resources"],
  ["about", "/about"],
] as const;

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface">
      <MainFlex>
        <nav className="flex w-full items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex w-35 shrink-0 items-center gap-2">
            <Image
              src="/darklogo.png"
              alt="Transora"
              width={400}
              height={400}
              priority
              className="h-auto w-full object-contain dark:hidden"
            />
            <Image
              src="/lightlogo.png"
              alt="Transora"
              width={400}
              height={400}
              priority
              className="hidden h-auto w-full object-contain dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map(([key, href]) => (
              <Link
                key={key}
                href={href}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === href
                    ? "font-medium text-primary"
                    : "text-text-secondary",
                )}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/login"
              className={buttonVariants({ variant: "ghost" })}
            >
              {t("login")}
            </Link>

            <Link href="/register" className={buttonVariants()}>
              {t("requestDemo")}
            </Link>

            <span className="mx-1 hidden h-5 w-px bg-border sm:block" />

            <ModeToggle />
            <LanguageSwitcher />

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Open navigation menu"
                    >
                      <Menu className="size-4" />
                    </Button>
                  }
                />

                <DropdownMenuContent align="center" dir={dir} className="">
                  {navLinks.map(([key, href]) => (
                    <DropdownMenuItem
                      key={key}
                      render={
                        <Link
                          href={href}
                          className={cn(
                            "w-full",
                            pathname === href && "font-medium text-primary",
                          )}
                        />
                      }
                    >
                      {t(key)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </MainFlex>
    </header>
  );
}
