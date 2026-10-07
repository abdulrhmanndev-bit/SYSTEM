"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  CalendarDays,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const linkClass =
  "font-medium text-text-link underline-offset-4 transition-colors hover:underline";

const iconClass = "size-4 shrink-0 text-text-disabled";

const inputClass = "ps-9";

const passwordContainerClass =
  "flex h-10 items-center rounded-lg border border-input bg-surface transition-colors hover:border-input-hover focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20";

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const locale = useLocale();

  const [date, setDate] = useState<Date>();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [gender, setGender] = useState("male");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-91.25">
      <div className="rounded-2xl border border-border bg-surface px-5 py-7 shadow-sm sm:px-6">
        <Image
          src="/auth/logo.png"
          alt={t("logoAlt")}
          width={40}
          height={40}
          priority
          className="mx-auto mb-4 size-10 object-contain"
        />

        <header className="mb-7 text-center">
          <h1 className="text-lg font-semibold text-text-primary">
            {t("title")}
          </h1>

          <p className="mt-1 text-xs text-text-secondary">{t("description")}</p>
        </header>

        <form className="space-y-4">
          {/* Name */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="firstName"
              label={t("firstName.label")}
              icon={<User />}
            >
              <Input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                placeholder={t("firstName.placeholder")}
                className={inputClass}
              />
            </FormField>

            <FormField
              id="lastName"
              label={t("lastName.label")}
              icon={<User />}
            >
              <Input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                placeholder={t("lastName.placeholder")}
                className={inputClass}
              />
            </FormField>
          </div>

          {/* Email */}
          <FormField id="email" label={t("email.label")} icon={<Mail />}>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t("email.placeholder")}
              className={inputClass}
            />
          </FormField>

          {/* Phone */}
          <FormField id="phone" label={t("phone.label")} icon={<Phone />}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t("phone.placeholder")}
              className={inputClass}
            />
          </FormField>

          {/* Date / Gender */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Date of birth */}
            <div className="space-y-1.5">
              <Label
                htmlFor="dateOfBirth"
                className="text-xs text-text-primary"
              >
                {t("dateOfBirth.label")}
              </Label>

              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger
                  render={
                    <Button
                      id="dateOfBirth"
                      type="button"
                      variant="outline"
                      className="h-10 w-full justify-start gap-2 overflow-hidden bg-surface px-3 font-normal"
                    >
                      <CalendarDays aria-hidden className={iconClass} />

                      <span
                        className={
                          date
                            ? "truncate text-text-primary"
                            : "truncate text-text-disabled"
                        }
                      >
                        {date
                          ? date.toLocaleDateString(locale)
                          : t("dateOfBirth.placeholder")}
                      </span>
                    </Button>
                  }
                />

                <PopoverContent
                  align="start"
                  className="w-auto overflow-hidden p-0"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    defaultMonth={date}
                    captionLayout="dropdown"
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      setCalendarOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label htmlFor="gender" className="text-xs text-text-primary">
                {t("gender.label")}
              </Label>

              <Select
                value={gender}
                onValueChange={(value) => {
                  if (value) setGender(value);
                }}
              >
                <SelectTrigger id="gender" className="relative ps-9">
                  <Users
                    aria-hidden
                    className="pointer-events-none absolute inset-s-3 size-4 text-text-disabled"
                  />

                  <SelectValue>
                    {gender === "male" ? t("gender.male") : t("gender.female")}
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="male">{t("gender.male")}</SelectItem>

                  <SelectItem value="female">{t("gender.female")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Password */}
          <PasswordField
            id="password"
            label={t("password.label")}
            placeholder={t("password.placeholder")}
            visible={showPassword}
            showLabel={t("password.show")}
            hideLabel={t("password.hide")}
            onToggle={() => setShowPassword((value) => !value)}
          />

          {/* Confirm Password */}
          <PasswordField
            id="confirmPassword"
            label={t("confirmPassword.label")}
            placeholder={t("confirmPassword.placeholder")}
            visible={showConfirmPassword}
            showLabel={t("password.show")}
            hideLabel={t("password.hide")}
            onToggle={() => setShowConfirmPassword((value) => !value)}
          />

          <Button type="button" className="h-10 w-full">
            {t("submit")}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-text-secondary">
          {t("haveAccount")}{" "}
          <Link href="/login" className={linkClass}>
            {t("login")}
          </Link>
        </p>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs text-text-primary">
        {label}
      </Label>

      <div className="relative">
        <span className="pointer-events-none absolute inset-s-3 top-1/2 z-10 -translate-y-1/2 [&>svg]:size-4 [&>svg]:text-text-disabled">
          {icon}
        </span>

        {children}
      </div>
    </div>
  );
}

function PasswordField({
  id,
  label,
  placeholder,
  visible,
  showLabel,
  hideLabel,
  onToggle,
}: {
  id: string;
  label: string;
  placeholder: string;
  visible: boolean;
  showLabel: string;
  hideLabel: string;
  onToggle: () => void;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs text-text-primary">
        {label}
      </Label>

      <div className={passwordContainerClass}>
        <LockKeyhole aria-hidden className={`ms-3 ${iconClass}`} />

        <Input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          autoComplete="new-password"
          placeholder={placeholder}
          className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 shadow-none hover:border-0 focus-visible:border-0 focus-visible:ring-0"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggle}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
          className="me-1 size-8 shrink-0 text-text-disabled hover:bg-transparent hover:text-text-secondary"
        >
          {visible ? (
            <EyeOff aria-hidden className={iconClass} />
          ) : (
            <Eye aria-hidden className={iconClass} />
          )}
        </Button>
      </div>
    </div>
  );
}
