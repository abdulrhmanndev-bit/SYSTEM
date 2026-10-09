"use client";

import { useState, type ComponentProps } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Link } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const linkClass =
  "font-medium text-text-link underline-offset-4 hover:underline";

const iconClass = "size-4 shrink-0 text-text-disabled";

const fieldIconClass =
  "pointer-events-none absolute inset-s-3 top-1/2 size-4 -translate-y-1/2 text-text-disabled";

const passwordClass =
  "flex h-10 items-center rounded-lg border border-input bg-surface transition-colors hover:border-input-hover focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20";

const passwordInputClass =
  "h-full min-w-0 flex-1 border-0 bg-transparent px-3 shadow-none hover:border-0 focus-visible:border-0 focus-visible:ring-0";

type IconFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  type?: ComponentProps<typeof Input>["type"];
  inputMode?: ComponentProps<typeof Input>["inputMode"];
  autoComplete?: string;
};

function IconField({
  id,
  label,
  placeholder,
  icon: Icon,
  type,
  inputMode,
  autoComplete,
}: IconFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>

      <div className="relative">
        <Icon aria-hidden className={fieldIconClass} />

        <Input
          id={id}
          name={id}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="ps-9"
        />
      </div>
    </div>
  );
}

function PasswordField({
  id,
  label,
  placeholder,
}: {
  id: "password" | "confirmPassword";
  label: string;
  placeholder: string;
}) {
  const t = useTranslations("auth.register");
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs">
        {label}
      </Label>

      <div className={passwordClass}>
        <LockKeyhole aria-hidden className={`ms-3 ${iconClass}`} />

        <Input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          autoComplete="new-password"
          placeholder={placeholder}
          className={passwordInputClass}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? t("password.hide") : t("password.show")}
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

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const [gender, setGender] = useState("male");

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

        <header className="mb-7 text-center">
          <h1 className="text-lg font-semibold text-text-primary">
            {t("title")}
          </h1>
          <p className="mt-1 text-xs text-text-secondary">{t("description")}</p>
        </header>

        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {(["firstName", "lastName"] as const).map((name) => (
              <IconField
                key={name}
                id={name}
                icon={User}
                label={t(`${name}.label`)}
                placeholder={t(`${name}.placeholder`)}
                autoComplete={
                  name === "firstName" ? "given-name" : "family-name"
                }
              />
            ))}
          </div>

          <IconField
            id="email"
            icon={Mail}
            type="email"
            autoComplete="email"
            label={t("email.label")}
            placeholder={t("email.placeholder")}
          />

          <IconField
            id="phone"
            icon={Phone}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            label={t("phone.label")}
            placeholder={t("phone.placeholder")}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="dateOfBirth" className="text-xs">
                {t("dateOfBirth.label")}
              </Label>

              <DatePicker
                id="dateOfBirth"
                name="dateOfBirth"
                autoComplete="bday"
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date()}
                labels={{
                  today: t("today"),
                  remove: t("remove"),
                  done: t("done"),
                  openCalendar: t("dateOfBirth.label"),
                }}
              />
              {/* <DateTimePicker
                id="departureDateTime"
                // minDate={new Date()}
                minuteStep={5}
                labels={{
                  today: "Now",
                  remove: "Remove",
                  done: "Done",
                  time: "Time",
                  openCalendar: "Choose date and time",
                }}
              /> */}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="gender" className="text-xs">
                {t("gender.label")}
              </Label>

              <Select
                value={gender}
                onValueChange={(value) => {
                  if (value) setGender(value);
                }}
              >
                <SelectTrigger id="gender" className="relative h-10 ps-9">
                  <Users
                    aria-hidden
                    className="pointer-events-none absolute inset-s-3 size-4 text-text-disabled"
                  />

                  <SelectValue>{t(`gender.${gender}`)}</SelectValue>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="male">{t("gender.male")}</SelectItem>
                  <SelectItem value="female">{t("gender.female")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <PasswordField
            id="password"
            label={t("password.label")}
            placeholder={t("password.placeholder")}
          />

          <PasswordField
            id="confirmPassword"
            label={t("confirmPassword.label")}
            placeholder={t("confirmPassword.placeholder")}
          />

          <Button type="button" className="h-10 w-full">
            {t("submit")}
          </Button>
        </div>

        <p className="mt-5 text-center text-xs text-text-secondary">
          {t("haveAccount")}{" "}
          <Link href="/login" className={linkClass}>
            {t("login")}
          </Link>
        </p>
      </Card>
    </div>
  );
}
