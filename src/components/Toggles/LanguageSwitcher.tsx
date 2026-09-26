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

type Locale = "en" | "ar" | "tr";

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
          <Button variant="outline" size="icon">
            <span className="uppercase">{locale}</span>
            <span className="sr-only">Change language</span>
          </Button>
        }
      />

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          disabled={locale === "en"}
        >
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          disabled={locale === "ar"}
        >
          Arabic
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => changeLanguage("tr")}
          disabled={locale === "tr"}
        >
          Türkçe
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
