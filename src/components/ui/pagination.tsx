import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { cn } from "cn";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      data-slot="pagination"
      className={cn("flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center justify-center gap-1.5", className)}
      {...props}
    />
  );
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type ButtonPaginationProps = React.ComponentProps<typeof Button> & {
  href?: never;
};

type LinkPaginationProps = React.ComponentProps<typeof Link> & {
  href: React.ComponentProps<typeof Link>["href"];
  disabled?: boolean;
};

type PaginationLinkProps = {
  isActive?: boolean;
  size?: React.ComponentProps<typeof Button>["size"];
} & (ButtonPaginationProps | LinkPaginationProps);

function PaginationLink({
  className,
  isActive = false,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  const styles = cn(
    "inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-sm text-text-secondary",
    "transition-colors hover:bg-surface-hover hover:text-text-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    isActive &&
      "border-primary bg-info-bg text-primary hover:bg-info-bg hover:text-primary",
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, disabled, ...linkProps } = props;

    if (disabled) {
      return (
        <span
          data-slot="pagination-link"
          aria-disabled="true"
          className={cn(styles, "pointer-events-none opacity-50")}
        >
          {linkProps.children}
        </span>
      );
    }

    return (
      <Link
        {...linkProps}
        href={href}
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        className={styles}
      />
    );
  }

  return (
    <Button
      {...props}
      type="button"
      size={size}
      variant="ghost"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={styles}
    />
  );
}

function PaginationPrevious({ className, ...props }: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="icon"
      className={cn("size-9", className)}
      {...props}
    >
      <ChevronLeftIcon className="size-4 rtl:rotate-180" />
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: PaginationLinkProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="icon"
      className={cn("size-9", className)}
      {...props}
    >
      <ChevronRightIcon className="size-4 rtl:rotate-180" />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center text-text-tertiary",
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
