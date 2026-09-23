import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex">
        <div>{t("hello")}</div>
        <div>
          <LanguageSwitcher />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
