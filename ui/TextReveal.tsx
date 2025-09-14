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
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.span>
  );
};
