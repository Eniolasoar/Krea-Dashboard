"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { HiSun, HiMoon } from "react-icons/hi"

const themes: Array<"light" | "dark" > = ["light", "dark"]

export function AnimatedThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Map actual theme to our icon
  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "light":
        return <HiSun />
      case "dark":
        return <HiMoon />
  
    }
  }

  // Determine next theme in cycle
  const getNextTheme = (current: string) => {
    const currentIndex = themes.indexOf(current as any)
    return themes[(currentIndex + 1) % themes.length]
  }

  return (
    <button
      onClick={() => setTheme(getNextTheme(theme || "system"))}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors w-10 h-10 flex items-center justify-center hover:cursor-pointer"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ duration: 0.4 }}
        className="text-yellow-500 dark:text-white text-xl"
      >
        {getThemeIcon(theme || "")}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
