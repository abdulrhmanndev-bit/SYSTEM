import ContentPage from "@/components/landing/home/ContentPage";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="h-screen flex justify-center items-center">
      <ContentPage />
    </div>
  );
}
