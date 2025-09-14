"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";


interface TransitionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const Transition = ({ children, ...props }: TransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, ...props }: TransitionProps) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
