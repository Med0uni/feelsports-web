"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const mockNextMatch = {
  opponent: "النادي الإفريقي",
  date: "27 جانفي 2024",
  time: "14:30",
  competition: "الرابطة 1",
  venue: "رادس",
  opponentLogo: "/logos/ca.png",
  isHome: true
}

export function NextMatch({ teamLogo }: { teamLogo: string }) {
  return (
    <Card className="p-4">
      <h3 className="mb-4 font-bold">المباراة القادمة</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center justify-end gap-3">
            <span className="font-medium">الترجي الرياضي</span>
            <div className="relative h-12 w-12">
              <Image
                src={teamLogo}
                alt="Team Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="mx-4 text-center">
            <div className="mb-1 rounded bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {mockNextMatch.time}
            </div>
            <div className="text-xs text-muted-foreground">VS</div>
          </div>
          <div className="flex flex-1 items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={mockNextMatch.opponentLogo}
                alt={mockNextMatch.opponent}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-medium">{mockNextMatch.opponent}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{mockNextMatch.competition}</span>
          <span>{mockNextMatch.venue}</span>
          <span>{mockNextMatch.date}</span>
        </div>
      </div>
    </Card>
  )
}
