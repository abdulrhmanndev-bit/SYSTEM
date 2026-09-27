
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="h-screen flex justify-center items-center">
      main page
    </div>
  );
}
