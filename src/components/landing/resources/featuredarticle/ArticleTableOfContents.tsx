"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "cn";

type Props = {
  title: string;
  items: {
    id: string;
    title: string;
  }[];
};

const OFFSET = 160;

export default function ArticleTableOfContents({ title, items }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => !!section);

    if (!sections.length) return;

    let current = sections[0].id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top > OFFSET) break;
      current = section.id;
    }

    setActive(current);
  });

  return (
    <aside className="hidden lg:block">
      <nav aria-label={title} className="sticky top-24">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-5 text-xs font-semibold tracking-widest text-text-tertiary uppercase"
        >
          {title}
        </motion.p>

        <div className="flex flex-col border-s border-border">
          {items.map(({ id, title }, index) => {
            const isActive = active === id;

            return (
              <motion.a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className={cn(
                  "relative px-4 py-2.5 text-xs leading-relaxed transition-colors",
                  "hover:text-primary",
                  isActive ? "font-medium text-primary" : "text-text-secondary",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-active"
                    className="absolute inset-y-1 inset-s-0 w-0.5 rounded-full bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
                {index + 1}. {title}
              </motion.a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
