"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const linkClass =
  "font-medium text-text-link underline-offset-4 hover:underline";

const iconClass = "size-4 shrink-0 text-text-disabled";

const passwordClass =
  "flex h-10 items-center rounded-lg border border-input bg-surface transition-colors hover:border-input-hover focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20";

export default function LoginForm() {
  const t = useTranslations("auth.login");

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="w-full max-w-md">
      <Card className="w-full gap-0 rounded-2xl border-border bg-surface px-6 py-6 shadow-sm sm:px-8">
        <Image
          src="/auth/logo.png"
          alt={t("logoAlt")}
          width={40}
          height={40}
          priority
          className="mx-auto my-4 size-10 object-contain"
        />

        <div className="mb-7 text-center">
          <h1 className="text-lg font-semibold text-text-primary">
            {t("title")}
          </h1>
          <p className="mt-1 text-xs text-text-secondary">{t("description")}</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">
              {t("email.label")}
            </Label>

            <div className="relative">
              <Mail
                aria-hidden
                className="pointer-events-none absolute inset-s-3 top-1/2 size-4 -translate-y-1/2 text-text-disabled"
              />
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t("email.placeholder")}
                className="ps-9"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-xs">
              {t("password.label")}
            </Label>

            <div className={passwordClass}>
              <LockKeyhole aria-hidden className={`ms-3 ${iconClass}`} />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder={t("password.placeholder")}
                className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 shadow-none hover:border-0 focus-visible:border-0 focus-visible:ring-0"
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={
                  showPassword ? t("password.hide") : t("password.show")
                }
                aria-pressed={showPassword}
                className="me-1 size-8 shrink-0 text-text-disabled hover:bg-transparent hover:text-text-secondary"
              >
                {showPassword ? (
                  <EyeOff aria-hidden className={iconClass} />
                ) : (
                  <Eye aria-hidden className={iconClass} />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(value) => setRemember(value === true)}
              />
              <Label
                htmlFor="remember"
                className="cursor-pointer text-xs font-normal text-text-secondary"
              >
                {t("rememberMe")}
              </Label>
            </div>

            <Link
              href="/forgot-password"
              className={`shrink-0 text-xs ${linkClass}`}
            >
              {t("forgotPassword")}
            </Link>
          </div>

          <Button type="button" className="h-10 w-full">
            {t("submit")}
          </Button>
        </div>

        <p className="mt-5 text-center text-xs text-text-secondary">
          {t("noAccount")}{" "}
          <Link href="/request-access" className={linkClass}>
            {t("requestAccess")}
          </Link>
        </p>
      </Card>

      <p className="mt-4 text-center text-xs text-text-secondary">
        {t("invited")}{" "}
        <Link href="/join" className={linkClass}>
          {t("joinWithCode")}
        </Link>
      </p>
    </div>
  );
}
