"use client"

import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        placeholder="ابحث عن الأخبار، الفرق، اللاعبين..."
        className="h-9 w-full rounded-full bg-secondary/50 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        dir="rtl"
      />
    </div>
  )
}
