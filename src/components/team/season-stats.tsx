"use client";

import { Card } from "@/components/ui/card";
import cn from "clsx";
import Image from "next/image";

const mockTopPlayers = [
  {
    name: "محمد علي بن رمضان",
    position: "FW",
    rating: 7.8,
    goals: 12,
    assists: 5,
    matches: 14,
  },
  {
    name: "حمزة رفيع",
    position: "MF",
    rating: 7.5,
    goals: 6,
    assists: 8,
    matches: 15,
  },
  {
    name: "عزمي البدوي",
    position: "DF",
    rating: 7.3,
    goals: 1,
    assists: 2,
    matches: 13,
  },
];

const positionColors = {
  FW: "bg-[#e06c75]",
  MF: "bg-[#57ab6c]",
  DF: "bg-[#4fa6e3]",
  GK: "bg-[#c678dd]",
};

export function SeasonStats() {
  return (
    <Card className="p-4">
      <h3 className="mb-4 font-bold">إحصائيات الموسم</h3>

      <div className="relative mb-6 h-[200px] w-full">
        <Image
          src="/pitch-bg.png"
          alt="Football Pitch"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="space-y-4">
        {mockTopPlayers.map((player, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-lg border p-3"
          >
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium text-white",
                positionColors[player.position as keyof typeof positionColors]
              )}
            >
              {player.position}
            </div>
            <div className="flex-1">
              <div className="font-medium">{player.name}</div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{player.matches} مباراة</span>
                <span>{player.goals} هدف</span>
                <span>{player.assists} تمريرة</span>
              </div>
            </div>
            <div className="text-lg font-bold text-primary">
              {player.rating}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
