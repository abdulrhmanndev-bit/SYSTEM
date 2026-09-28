"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { locale: "en", label: "English" },
  { locale: "ar", label: "العربية" },
  { locale: "tr", label: "Türkçe" },
] as const;

type Locale = (typeof languages)[number]["locale"];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: Locale) => {
    if (newLocale === locale) return;

    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Change language">
            <span className="text-xs font-medium uppercase">{locale}</span>
          </Button>
        }
      />

      <DropdownMenuContent align="end">
        {languages.map(({ locale: value, label }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => changeLanguage(value)}
            disabled={locale === value}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
