"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const pipeEase = [0.4, 0, 0.2, 1] as const;

const spring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 16,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

type MotionProps = {
  children?: ReactNode;
  className?: string;
};

type DelayedMotionProps = MotionProps & {
  delay?: number;
};

type ScaleMotionProps = DelayedMotionProps & {
  scale: number;
};

type DirectionMotionProps = MotionProps & {
  isRTL: boolean;
};

type PipeMotionProps = {
  path: string;
  delay?: number;
};

type DotMotionProps = {
  index: number;
  opacity?: number;
};

/* =========================
   Shared
========================= */

export function MotionContainer({ children, className }: MotionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className }: MotionProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function MotionButton({ children, className }: MotionProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   Helpers
========================= */

function ScaleMotion({
  scale,
  delay = 0,
  children,
  className,
}: ScaleMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   Auth Visual
========================= */

export function BackgroundMotion(props: MotionProps) {
  return <ScaleMotion {...props} scale={0.88} />;
}

export function InnerCircleMotion(props: MotionProps) {
  return <ScaleMotion {...props} scale={0.9} delay={0.12} />;
}

export function SourceMotion({
  delay = 0,
  children,
  className,
}: DelayedMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ...spring,
        stiffness: 180,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PipeGradient() {
  return (
    <defs>
      <linearGradient
        id="pipeGradient"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="500"
        y2="0"
      >
        <stop offset="0%" stopColor="rgba(16, 75, 120, 0.85)" />
        <stop offset="50%" stopColor="rgba(32, 168, 120, 0.75)" />
        <stop offset="100%" stopColor="rgba(146, 64, 14, 0.8)" />

        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          values="-250 0; 250 0; -250 0"
          dur="5s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
  );
}

export function PipeMotion({ path, delay = 0 }: PipeMotionProps) {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke="url(#pipeGradient)"
      strokeWidth={20}
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
        duration: 1.9,
        delay,
        ease: pipeEase,
      }}
    />
  );
}

export function UsersMotion({
  isRTL,
  children,
  className,
}: DirectionMotionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isRTL ? -35 : 35,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        delay: 0.9,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContentMotion({ children, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 1.15,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DotMotion({ index, opacity = 1 }: DotMotionProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity, scale: 1 }}
      transition={{
        ...spring,
        damping: 15,
        delay: 1.35 + index * 0.1,
      }}
      className="size-2.5 rounded-full bg-white"
    />
  );
}
