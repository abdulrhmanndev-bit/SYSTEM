"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

import MainFlex from "@/components/shared/MainFlex";
import { Link } from "@/i18n/navigation";

const footerGroups = [
  {
    key: "platform",
    links: [
      { key: "bookings", href: "/bookings" },
      { key: "fleetManagement", href: "/fleet-management" },
      { key: "driverManagement", href: "/driver-management" },
      { key: "supplierManagement", href: "/supplier-management" },
      { key: "analytics", href: "/analytics" },
    ],
  },
  {
    key: "solutions",
    links: [
      {
        key: "transportationCompanies",
        href: "/solutions/transportation-companies",
      },
      {
        key: "travelOperators",
        href: "/solutions/travel-operators",
      },
      {
        key: "fleetManagers",
        href: "/solutions/fleet-managers",
      },
      {
        key: "operationsTeams",
        href: "/solutions/operations-teams",
      },
    ],
  },
  {
    key: "company",
    links: [
      { key: "about", href: "/about" },
      { key: "contact", href: "/contact" },
      { key: "requestDemo", href: "/request-demo" },
    ],
  },
  {
    key: "resources",
    links: [
      { key: "documentation", href: "/documentation" },
      { key: "helpCenter", href: "/help-center" },
      { key: "blog", href: "/blog" },
    ],
  },
] as const;

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full overflow-hidden bg-sidebar text-sidebar-foreground">
      {/* Background Brand */}
      <div aria-hidden="true" className="@container w-full overflow-hidden">
        <span className="block w-full bg-linear-to-t from-white/7 via-white/3 to-transparent bg-clip-text text-center text-[18.3cqw] leading-none font-bold tracking-tighter whitespace-nowrap text-transparent select-none">
          TRANSORA
        </span>
      </div>

      {/* Main Footer */}
      <MainFlex>
        <div className="grid w-full gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(4,1fr)] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-sidebar-active-foreground"
            >
              <Image
                src="/about/linked.png"
                width={32}
                height={32}
                alt=""
                className="size-8 shrink-0 object-contain"
              />

              <span className="text-base font-bold">TRANSORA</span>
            </Link>

            <p className="mt-5 max-w-60 text-xs leading-relaxed text-sidebar-foreground">
              {t("description")}
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:hello@transora.io"
                className="flex w-fit items-center gap-2 text-xs text-sidebar-foreground transition-colors hover:text-sidebar-active-foreground"
              >
                <Mail className="size-3.5 shrink-0 text-trip-assigned" />

                <span>hello@transora.io</span>
              </a>

              <a
                href="tel:+15550218890"
                dir="ltr"
                className="flex w-fit items-center gap-2 text-xs text-sidebar-foreground transition-colors hover:text-sidebar-active-foreground"
              >
                <Phone className="size-3.5 shrink-0 text-trip-assigned" />

                <span>+1 (555) 021-8890</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-xs font-semibold text-sidebar-active-foreground">
                {t(`${group.key}.title`)}
              </h3>

              <nav className="mt-5 flex flex-col items-start gap-4">
                {group.links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-xs text-sidebar-foreground transition-colors hover:text-sidebar-active-foreground"
                  >
                    {t(`${group.key}.${link.key}`)}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </MainFlex>

      {/* Bottom */}
      <div className="border-t border-sidebar-border">
        <MainFlex>
          <div className="flex w-full flex-col gap-4 py-5 text-[10px] text-sidebar-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {t("copyright")}
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-sidebar-active-foreground"
              >
                {t("privacyPolicy")}
              </Link>

              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-sidebar-active-foreground"
              >
                {t("termsOfService")}
              </Link>
            </div>
          </div>
        </MainFlex>
      </div>
    </footer>
  );
}
