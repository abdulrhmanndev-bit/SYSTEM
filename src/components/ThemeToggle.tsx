"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun className="size-4 text-text-secondary" />

        <div className="h-5 w-9 rounded-full bg-input-disabled" />

        <Moon className="size-4 text-text-secondary" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="size-4 text-text-secondary" />

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
        aria-label="Toggle theme"
      />

      <Moon className="size-4 text-text-secondary" />
    </div>
  );
}
