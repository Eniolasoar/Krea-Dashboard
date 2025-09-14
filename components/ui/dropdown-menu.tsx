import * as React from "react"
import clsx from "clsx"

interface DropdownMenuProps {
  children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative inline-block">{children}</div>
}

export function DropdownMenuTrigger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  // If `asChild` is true, render children directly
  if (asChild) return <>{children}</>
  return <button className="px-2 py-1 bg-gray-200 rounded">{children}</button>
}

export function DropdownMenuContent({ children, align = "start" }: { children: React.ReactNode; align?: "start" | "end" }) {
  const alignment = align === "end" ? "right-0" : "left-0"
  return (
    <div className={clsx("absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md z-50", alignment)}>
      {children}
    </div>
  )
}

export function DropdownMenuItem({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {children}
    </button>
  )
}
