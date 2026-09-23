import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <div>{t("hello")}</div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
