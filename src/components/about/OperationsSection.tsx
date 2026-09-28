import {
  Bus,
  CalendarDays,
  CircleDollarSign,
  ContactRound,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";

const operations = [
  {
    key: "bookings",
    icon: CalendarDays,
  },
  {
    key: "vehicles",
    icon: Truck,
  },
  {
    key: "drivers",
    icon: ContactRound,
  },
  {
    key: "suppliers",
    icon: Bus,
  },
  {
    key: "accounting",
    icon: CircleDollarSign,
  },
] as const;

const partners = [
  "Logoipsum",
  "Logo Ipsum",
  "Logoipsum",
  "Logo Ipsum",
  "LOGOIPSUM",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "LOGO IPSUM",
];

export default function OperationsSection() {
  const t = useTranslations("about.operations");

  return (
    <section className="bg-background">
      <MainFlex>
        <div className="py-16 lg:py-20">
          <h2 className="text-center text-3xl leading-tight font-bold tracking-tight text-text-primary">
            {t("title")}
          </h2>

          {/* Operations */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {operations.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="flex min-h-28 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex size-10 items-center justify-center rounded-full border border-info bg-info-bg text-info">
                  <Icon className="size-4" strokeWidth={1.7} />
                </div>

                <span className="text-sm font-medium text-text-primary">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="mt-16 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {partners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex h-8 items-center justify-center"
              >
                <span className="text-base font-bold tracking-tight text-text-disabled">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MainFlex>
    </section>
  );
}