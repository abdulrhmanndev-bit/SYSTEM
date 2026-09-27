"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { motion } from "motion/react";
import { cn } from "cn";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-sm border border-input outline-none",
        "transition-[background-color,border-color,box-shadow] duration-200",
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground",
        "group-has-disabled/field:opacity-50",
        "group-has-focus-visible/field-label:ring-0",
        "group-has-focus-visible/field-label:not-data-checked:border-input",
        "group-has-focus-visible/field-label:data-checked:border-primary",
        "dark:bg-input/30 dark:data-checked:bg-primary",
        "dark:aria-invalid:border-destructive/50",
        "dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-items-center text-current"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-3.5"
          aria-hidden="true"
        >
          <motion.path
            d="M3 8.5L6.5 12L13 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              pathLength: {
                duration: 0.25,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.08,
              },
            }}
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };