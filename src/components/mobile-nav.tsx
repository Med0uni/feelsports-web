"use client"

import { useState } from "react"
import { Menu, X, Search, Star, Heart } from "lucide-react"
import Link from "next/link"
import { SearchBar } from "./search-bar"

const popularTeams = [
  { id: 1, name: "الترجي الرياضي", slug: "esperance", followed: true },
  { id: 2, name: "النادي الإفريقي", slug: "club-africain", followed: false },
  { id: 3, name: "النادي الصفاقسي", slug: "css", followed: false },
  { id: 4, name: "النجم الساحلي", slug: "ess", followed: true },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50 text-foreground"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between border-b">
            <Link href="/" className="font-bold text-primary" onClick={() => setIsOpen(false)}>
              FeelSports
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="container py-4">
            <div className="mb-4">
              <SearchBar />
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">الفرق المفضلة</h3>
              <div className="space-y-2">
                {popularTeams
                  .filter(team => team.followed)
                  .map(team => (
                    <Link
                      key={team.id}
                      href={`/team/${team.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-secondary/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{team.name}</span>
                      <Heart className="h-4 w-4 fill-primary text-primary" />
                    </Link>
                  ))}
              </div>
            </div>

            <nav className="space-y-4">
              <Link
                href="/local-news"
                className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-secondary/50"
                onClick={() => setIsOpen(false)}
              >
                أخبار محلية
              </Link>
              <Link
                href="/international-news"
                className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-secondary/50"
                onClick={() => setIsOpen(false)}
              >
                أخبار عالمية
              </Link>
              <Link
                href="/transfers"
                className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-secondary/50"
                onClick={() => setIsOpen(false)}
              >
                الانتقالات
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
