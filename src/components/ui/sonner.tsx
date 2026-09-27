"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";

const icons = {
  success: <CircleCheckIcon className="size-4" />,
  info: <InfoIcon className="size-4" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <OctagonXIcon className="size-4" />,
  loading: <Loader2Icon className="size-4 animate-spin" />,
};

export function Toaster(props: ToasterProps) {
  const { resolvedTheme = "light" } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
      icons={icons}
      toastOptions={{
        classNames: {
          toast:
            "!rounded-lg !border-border-default !bg-background-elevated !text-text-primary !shadow-lg",

          title: "!text-text-primary",

          description: "!text-text-secondary",

          closeButton:
            "!border-border-default !bg-background-elevated !text-text-secondary hover:!bg-surface-hover hover:!text-text-primary",

          success:
            "!border-status-success-border !bg-status-success-bg !text-status-success-text [&_[data-icon]]:!text-status-success-icon",

          warning:
            "!border-status-warning-border !bg-status-warning-bg !text-status-warning-text [&_[data-icon]]:!text-status-warning-icon",

          error:
            "!border-status-error-border !bg-status-error-bg !text-status-error-text [&_[data-icon]]:!text-status-error-icon",

          info: "!border-status-info-border !bg-status-info-bg !text-status-info-text [&_[data-icon]]:!text-status-info-icon",
        },
      }}
      {...props}
    />
  );
}
