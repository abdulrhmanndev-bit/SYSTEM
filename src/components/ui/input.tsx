"use client";

import type { ComponentProps } from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <InputPrimitive
      data-slot="input"
      type={type}
      className={cn(
        "flex h-10 w-full min-w-0 rounded-lg border border-input bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors",
        "placeholder:text-text-disabled",
        "hover:border-input-hover",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20",
        "aria-invalid:border-error aria-invalid:ring-3 aria-invalid:ring-error/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-text-disabled disabled:opacity-50",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
