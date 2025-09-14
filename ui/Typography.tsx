"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps extends HTMLMotionProps<"span"> {
  children: ReactNode;
}

export const TextReveal = ({ children, ...props }: TextRevealProps) => {
  return (
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};


interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export const SectionHeading = ({ children, className = "", ...props }: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${className}`} {...props}>
      {children}
    </h2>
  );
};
