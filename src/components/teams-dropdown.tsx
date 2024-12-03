"use client"

import { useState } from "react"
import { ChevronDown, Star, Heart } from "lucide-react"
import Link from "next/link"

const popularTeams = [
  { id: 1, name: "الترجي الرياضي", slug: "esperance", followed: true },
  { id: 2, name: "النادي الإفريقي", slug: "club-africain", followed: false },
  { id: 3, name: "النادي الصفاقسي", slug: "css", followed: false },
  { id: 4, name: "النجم الساحلي", slug: "ess", followed: true },
]

export function TeamsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/70 transition-colors"
      >
        <span>الفرق</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 rounded-lg border bg-card p-4 shadow-lg">
          <div className="mb-4">
            <h3 className="mb-2 font-bold">الفرق المفضلة</h3>
            <div className="space-y-2">
              {popularTeams
                .filter(team => team.followed)
                .map(team => (
                  <Link
                    key={team.id}
                    href={`/team/${team.slug}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-secondary/50 transition-colors"
                  >
                    <span>{team.name}</span>
                    <Heart className="h-4 w-4 fill-primary text-primary" />
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-bold">غيرها</h3>
            <div className="space-y-2">
              {popularTeams
                .filter(team => !team.followed)
                .map(team => (
                  <Link
                    key={team.id}
                    href={`/team/${team.slug}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-secondary/50 transition-colors"
                  >
                    <span>{team.name}</span>
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <Link
              href="/teams"
              className="block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              عرض جميع الفرق
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
