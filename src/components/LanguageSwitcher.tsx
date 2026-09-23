"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href={pathname}
      locale={newLocale}
      className="rounded-lg border px-4 py-2"
    >
      {locale === "en" ? "AR" : "EN"}
    </Link>
  );
}
