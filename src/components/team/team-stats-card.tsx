"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface StatPlayerProps {
  name: string;
  value: string | number;
  subValue?: string;
}

function StatPlayer({ name, value, subValue }: StatPlayerProps) {
  return (
    <div className="text-center">
      <div className="font-bold text-xl text-primary">{value}</div>
      <div className="font-medium mb-1">{name}</div>
      {subValue && <div className="text-sm text-muted-foreground">{subValue}</div>}
    </div>
  )
}

const mockStats = {
  topRated: { name: "حمزة رفيع", value: "7.8", subValue: "15 مباراة" },
  topScorer: { name: "محمد علي بن رمضان", value: "12", subValue: "هدف" },
  topAssists: { name: "عزمي البدوي", value: "8", subValue: "تمريرة حاسمة" }
}

export function TeamStatsCard() {
  return (
    <Card className="p-4">
      <h3 className="font-bold mb-4">إحصائيات الفريق</h3>
      <div className="grid grid-cols-3 divide-x divide-border-subtle">
        <StatPlayer {...mockStats.topRated} />
        <StatPlayer {...mockStats.topScorer} />
        <StatPlayer {...mockStats.topAssists} />
      </div>
    </Card>
  )
}
