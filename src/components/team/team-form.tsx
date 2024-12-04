"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const mockResults = [
  {
    result: "W",
    score: "2-0",
    opponent: "النجم الساحلي",
    date: "20/01",
    competition: "الرابطة 1",
    isHome: true,
    opponentLogo: "/logos/ess.png",
  },
  {
    result: "D",
    score: "1-1",
    opponent: "النادي الصفاقسي",
    date: "15/01",
    competition: "الرابطة 1",
    isHome: false,
    opponentLogo: "/logos/css.png",
  },
  {
    result: "W",
    score: "3-0",
    opponent: "الملعب التونسي",
    date: "10/01",
    competition: "الرابطة 1",
    isHome: true,
    opponentLogo: "/logos/st.png",
  },
  {
    result: "L",
    score: "0-1",
    opponent: "النادي الإفريقي",
    date: "05/01",
    competition: "الرابطة 1",
    isHome: false,
    opponentLogo: "/logos/ca.png",
  },
  {
    result: "W",
    score: "2-1",
    opponent: "اتحاد بن قردان",
    date: "01/01",
    competition: "الرابطة 1",
    isHome: true,
    opponentLogo: "/logos/usbg.png",
  },
];

const resultColors = {
  W: "bg-[#57ab6c] text-white",
  L: "bg-[#e06c75] text-white",
  D: "bg-[#9da5b4] text-white",
};

export function TeamForm() {
  return (
    <Card className="p-4">
      <h3 className="mb-4 font-bold">نتائج آخر المباريات</h3>
      <div className="space-y-2">
        {mockResults.map((match, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 rounded-lg border p-3"
          >
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md font-bold",
                resultColors[match.result as keyof typeof resultColors]
              )}
            >
              {match.result}
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image
                    src={match.opponentLogo}
                    alt={match.opponent}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium">{match.opponent}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {match.isHome ? "H" : "A"} {match.score}
              </div>
              <div className="text-sm text-muted-foreground">{match.date}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
