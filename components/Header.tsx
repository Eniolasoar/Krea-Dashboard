"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "../utils/cn";
import { 
  HiChevronDown, HiHome, HiPhotograph, HiVideoCamera, HiSparkles, HiPencil, 
  HiFolder, HiOutlinePhotograph, HiBell, HiCube 
} from "react-icons/hi";
import { FiHeadphones, FiCompass } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  title?: string;
  links?: NavLink[];
  avatarUrl?: string;
  username?: string;
  userIcon?: React.ReactNode;
}

export const Header = ({
  title = "Krea Dashboard",
  links = [
    { label: "Gallery", href: "/gallery", icon: <HiOutlinePhotograph /> },
    { label: "Support", href: "/support", icon: <FiHeadphones /> },
  ],
  avatarUrl,
  username = "benevolentremblebut",
  userIcon = <HiCube />,
}: HeaderProps) => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const middleIcons: { label: string; icon: React.ReactNode }[] = [
    { label: "Home", icon: <HiHome /> },
    { label: "Photos", icon: <HiPhotograph /> },
    { label: "Videos", icon: <HiVideoCamera /> },
    { label: "AI Sparkles", icon: <HiSparkles /> },
    { label: "Edit", icon: <HiPencil /> },
    { label: "Guide", icon: <FiCompass /> },
    { label: "View Folder", icon: <HiFolder /> },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/80 dark:bg-gray-900/70  dark:border-gray-800"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        

        <div className="flex items-center space-x-3">
          <svg
            aria-label="Krea Logo"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" />
            <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" />
          </svg>

          <span className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-900 dark:text-white">
            <motion.span
              className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span>{username}</span>
          </span>
        </div>


        <div className="hidden md:flex items-center space-x-2 bg-gray-100 p-2 rounded-2xl">
          {middleIcons.map(({ label, icon }, idx) => (
            <button
              key={idx}
              className={cn(
                "py-2 px-3 rounded-xl text-gray-700 text-xl hover:bg-gray-200 hover:cursor-pointer",
                idx === 0 && "bg-white rounded-sm"
              )}
            >
              {icon}
            </button>
          ))}
        </div>


        <div className="flex items-center space-x-2">
    
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 font-medium rounded-xl text-gray-700 hover:bg-gray-300"
              >
                {link.icon && <span className="text-base">{link.icon}</span>}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>


          <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-300">
            <HiBell className="text-gray-700 text-xl" />
          </button>
          <AnimatedThemeToggle />


          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HiChevronDown className={`text-xl transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
          </button>

                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400"
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
        </div>

        
      </div>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-2"
          >
            <div className="flex flex-col space-y-2">
              {middleIcons.map(({ label, icon }, idx) => (
                <button
                  key={idx}
                  className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-lg"
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </button>
              ))}

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-lg"
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
