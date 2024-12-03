"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[40px] w-[70px] rounded-full bg-surface-2" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`
        relative h-[40px] w-[70px] rounded-full transition-colors duration-200
        ${theme === "dark" ? "bg-[#1B1D1E]" : "bg-[#F1F1F1]"}
      `}
      aria-label="Toggle theme"
    >
      <div
        className={`
          absolute top-1 h-[32px] w-[32px] transform rounded-full transition-all duration-200
          ${theme === "dark" 
            ? "right-1 bg-[#484848] text-white" 
            : "left-1 bg-white text-[#1B1D1E]"
          }
        `}
      >
        <div className="flex h-full w-full items-center justify-center">
          {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        </div>
      </div>
    </button>
  )
}
