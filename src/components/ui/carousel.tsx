"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = CarouselProps & {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within <Carousel />");
  }

  return context;
}

function useCarouselState(api: CarouselApi) {
  const subscribe = React.useCallback(
    (callback: () => void) => {
      if (!api) return () => {};

      api.on("select", callback);
      api.on("reInit", callback);

      return () => {
        api.off("select", callback);
        api.off("reInit", callback);
      };
    },
    [api],
  );

  const getSnapshot = React.useCallback(() => {
    if (!api) return "00";

    return `${Number(api.canScrollPrev())}${Number(api.canScrollNext())}`;
  }, [api]);

  const state = React.useSyncExternalStore(subscribe, getSnapshot, () => "00");

  return {
    canScrollPrev: state[0] === "1",
    canScrollNext: state[1] === "1",
  };
}

function Carousel({
  orientation = "horizontal",
  opts,
  plugins,
  setApi,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );

  const { canScrollPrev, canScrollNext } = useCarouselState(api);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);

  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  const value = React.useMemo(
    () => ({
      carouselRef,
      api,
      opts,
      plugins,
      orientation,
      setApi,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [
      carouselRef,
      api,
      opts,
      plugins,
      orientation,
      setApi,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    ],
  );

  return (
    <CarouselContext.Provider value={value}>
      <div
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      data-slot="carousel-content"
      className="overflow-hidden"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "ps-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      type="button"
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        "absolute touch-manipulation rounded-full border-border bg-surface text-text-primary",
        "hover:bg-surface-hover disabled:text-text-disabled",
        orientation === "horizontal"
          ? "inset-y-0 -start-12 my-auto"
          : "-top-12 start-1/2 -translate-x-1/2 rotate-90 rtl:translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon className="size-4 rtl:rotate-180" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      type="button"
      data-slot="carousel-next"
      variant={variant}
      size={size}
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        "absolute touch-manipulation rounded-full border-border bg-surface text-text-primary",
        "hover:bg-surface-hover disabled:text-text-disabled",
        orientation === "horizontal"
          ? "inset-y-0 -end-12 my-auto"
          : "-bottom-12 start-1/2 -translate-x-1/2 rotate-90 rtl:translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ChevronRightIcon className="size-4 rtl:rotate-180" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};
