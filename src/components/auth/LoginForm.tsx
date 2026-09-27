"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { toast } from "sonner";

import { Link } from "@/i18n/navigation";
import { createLoginSchema, type LoginFormData } from "@/schemas/auth.schema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const linkClass =
  "font-medium text-text-link underline-offset-4 hover:underline";

const iconClass = "size-4 shrink-0 text-text-disabled";

const fieldClass = "space-y-1.5";

const passwordInputClass =
  "h-full min-w-0 flex-1 border-0 bg-transparent px-3 shadow-none hover:border-0 focus-visible:border-0 focus-visible:ring-0 aria-invalid:border-0 aria-invalid:ring-0";

export default function LoginForm() {
  const t = useTranslations("auth.login");
  const schema = useMemo(() => createLoginSchema(t), [t]);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const onInvalid = () => {
    const message = errors.email?.message || errors.password?.message;

    if (message) toast.error(message);
  };

  return (
    <div className="w-full max-w-91.25">
      <div className="rounded-2xl border border-card-border bg-card-bg px-5 py-7 shadow-sm sm:px-6">
        <div className="mb-4 flex justify-center">
          <Image
            src="/auth/logo.png"
            alt={t("logoAlt")}
            width={40}
            height={40}
            priority
            className="size-10 object-contain"
          />
        </div>

        <header className="mb-7 text-center">
          <h1 className="text-lg font-semibold text-text-primary">
            {t("title")}
          </h1>

          <p className="mt-1 text-xs text-text-secondary">{t("description")}</p>
        </header>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="space-y-4"
        >
          <div className={fieldClass}>
            <Label htmlFor="email" className="text-xs text-text-primary">
              {t("email.label")}
            </Label>

            <div className="relative">
              <Mail
                aria-hidden="true"
                className="pointer-events-none absolute inset-s-3 top-1/2 size-4 -translate-y-1/2 text-text-disabled"
              />

              <Input
                {...register("email")}
                id="email"
                type="email"
                autoComplete="email"
                placeholder={t("email.placeholder")}
                aria-invalid={!!errors.email}
                className="h-10 ps-9"
              />
            </div>
          </div>

          <div className={fieldClass}>
            <Label htmlFor="password" className="text-xs text-text-primary">
              {t("password.label")}
            </Label>

            <div
              data-invalid={!!errors.password || undefined}
              className="flex h-10 items-center rounded-md border border-input-border bg-input-bg focus-within:border-input-focus focus-within:ring-3 focus-within:ring-input-focus/20 data-[invalid]:border-border-error data-[invalid]:ring-3 data-[invalid]:ring-status-error-icon/20"
            >
              <LockKeyhole aria-hidden="true" className={`ms-3 ${iconClass}`} />

              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder={t("password.placeholder")}
                aria-invalid={!!errors.password}
                className={passwordInputClass}
              />

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? t("password.hide") : t("password.show")
                }
                aria-pressed={showPassword}
                className="me-1 size-8 shrink-0 text-text-disabled hover:bg-transparent hover:text-text-secondary"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" className={iconClass} />
                ) : (
                  <Eye aria-hidden="true" className={iconClass} />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                  />

                  <Label
                    htmlFor="remember"
                    className="cursor-pointer text-xs font-normal text-text-secondary"
                  >
                    {t("rememberMe")}
                  </Label>
                </div>
              )}
            />

            <Link
              href="/forgot-password"
              className={`shrink-0 text-xs ${linkClass}`}
            >
              {t("forgotPassword")}
            </Link>
          </div>

          <Button type="submit" disabled={isSubmitting} className="h-10 w-full">
            {t("submit")}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-text-secondary">
          {t("noAccount")}{" "}
          <Link href="/request-access" className={linkClass}>
            {t("requestAccess")}
          </Link>
        </p>
      </div>

      <p className="mt-4 text-center text-xs text-text-secondary">
        {t("invited")}{" "}
        <Link href="/join" className={linkClass}>
          {t("joinWithCode")}
        </Link>
      </p>
    </div>
  );
}
