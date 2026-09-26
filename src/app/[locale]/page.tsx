import LanguageSwitcher from "@/components/Toggles/LanguageSwitcher";
import { ModeToggle } from "@/components/Toggles/ModeToggle";
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
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
