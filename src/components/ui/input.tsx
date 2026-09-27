import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input-border bg-input-bg px-2.5 py-1 text-base text-input-text outline-none transition-colors",
        "placeholder:text-input-placeholder",
        "hover:border-input-hover",
        "focus-visible:border-input-focus focus-visible:ring-3 focus-visible:ring-input-focus/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input-disabled disabled:opacity-50",
        "aria-invalid:border-border-error aria-invalid:ring-3 aria-invalid:ring-border-error/20",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-input-text",
        "md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };