"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
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
  ["platform", "/platform"],
  ["solutions", "/solutions"],
  ["features", "/features"],
  ["resources", "/resources"],
  ["about", "/about"],
] as const;

export default function Navbar() {
  const t = useTranslations("navbar");
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface">
      <MainFlex>
        <nav className="flex w-full items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex h-full w-35 shrink-0 items-center gap-2"
          >
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
            {navLinks.map(([key, href]) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "text-sm transition-colors hover:text-primary",
                    isActive
                      ? "font-medium text-primary"
                      : "text-text-secondary",
                  )}
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              {t("login")}
            </Link>

            <Link href="/request-demo" className={cn(buttonVariants())}>
              {t("requestDemo")}
            </Link>

            <span className="mx-1 hidden h-5 w-px bg-border sm:block" />

            <ModeToggle />
            <LanguageSwitcher />

            {/* Mobile Navigation */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="size-4" />
                  </Button>
                }
              />

              <DropdownMenuContent align="end" className="w-52">
                {navLinks.map(([key, href]) => {
                  const isActive = pathname === href;

                  return (
                    <DropdownMenuItem
                      key={key}
                      render={
                        <Link
                          href={href}
                          className={cn(
                            "w-full",
                            isActive && "font-medium text-primary",
                          )}
                        />
                      }
                    >
                      {t(key)}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </MainFlex>
    </header>
  );
}
