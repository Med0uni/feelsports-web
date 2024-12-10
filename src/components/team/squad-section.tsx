"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Player {
  id: number;
  name: string;
  number?: number;
  nationality: string;
  age: number;
  matches: number;
  goals?: number;
  assists?: number;
  cleanSheets?: number;
  rating?: number;
  image?: string;
}

interface Coach {
  id: number;
  name: string;
  nationality: string;
  age: number;
  image?: string;
  matches?: number;
}

interface SquadSectionProps {
  title: string;
  players: Player[];
  isCoach?: boolean;
}

const mockCoach: Coach = {
  id: 1,
  name: "نبيل معلول",
  nationality: "تونس",
  age: 45,
  image: "/coaches/default.png",
  matches: 12,
};

const mockSquad = {
  defenders: [
    {
      id: 1,
      name: "محمد علي اليعقوبي",
      number: 4,
      nationality: "تونس",
      age: 28,
      matches: 15,
      goals: 1,
      assists: 2,
      rating: 7.2,
    },
    {
      id: 2,
      name: "بلال العيفة",
      number: 3,
      nationality: "تونس",
      age: 26,
      matches: 12,
      goals: 0,
      assists: 1,
      rating: 7.0,
    },
    {
      id: 3,
      name: "أيمن بن محمد",
      number: 2,
      nationality: "تونس",
      age: 24,
      matches: 14,
      goals: 0,
      assists: 3,
      rating: 7.4,
    },
  ],
  midfielders: [
    {
      id: 4,
      name: "فراس بالعربي",
      number: 8,
      nationality: "تونس",
      age: 25,
      matches: 16,
      goals: 3,
      assists: 5,
      rating: 7.8,
    },
    {
      id: 5,
      name: "محمد علي بن رمضان",
      number: 10,
      nationality: "تونس",
      age: 27,
      matches: 15,
      goals: 4,
      assists: 6,
      rating: 7.9,
    },
  ],
  forwards: [
    {
      id: 6,
      name: "حمدو الهوني",
      number: 7,
      nationality: "ليبيا",
      age: 29,
      matches: 14,
      goals: 8,
      assists: 3,
      rating: 7.7,
    },
    {
      id: 7,
      name: "رؤوف بن غربية",
      number: 9,
      nationality: "تونس",
      age: 26,
      matches: 13,
      goals: 6,
      assists: 2,
      rating: 7.5,
    },
  ],
};

function PlayerRow({
  player,
  isCoach,
}: {
  player: Player | Coach;
  isCoach?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg p-3 hover:bg-card-hover transition-colors">
      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-surface-2">
        {player.image ? (
          <Image
            src={player.image}
            alt={player.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-surface-2" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {"number" in player && (
            <span className="text-sm text-muted-foreground">
              {player.number}
            </span>
          )}
          <h4 className="font-medium truncate">{player.name}</h4>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{player.nationality}</span>
          <span>•</span>
          <span>{player.age} سنة</span>
        </div>
      </div>

      {!isCoach && "matches" in player && (
        <div className="hidden sm:grid grid-cols-4 gap-8 text-center text-sm">
          <div>
            <div className="text-muted-foreground">مباريات</div>
            <div className="font-medium">{player.matches}</div>
          </div>
          {"goals" in player && (
            <div>
              <div className="text-muted-foreground">أهداف</div>
              <div className="font-medium">{player.goals}</div>
            </div>
          )}
          {"assists" in player && (
            <div>
              <div className="text-muted-foreground">تمريرات</div>
              <div className="font-medium">{player.assists}</div>
            </div>
          )}
          {"rating" in player && (
            <div>
              <div className="text-muted-foreground">تقييم</div>
              <div className="font-medium text-primary">{player.rating}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SquadSection({ title, players, isCoach }: SquadSectionProps) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border-subtle px-4 py-3">
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className="divide-y divide-border-subtle">
        {players.map((player) => (
          <PlayerRow
            key={isCoach ? player.name : player.id}
            player={player}
            isCoach={isCoach}
          />
        ))}
      </div>
    </Card>
  );
}

export function Squad() {
  return (
    <div className="space-y-6">
      <SquadSection title="المدرب" players={[mockCoach]} isCoach />
      <SquadSection title="المدافعون" players={mockSquad.defenders} />
      <SquadSection title="لاعبو الوسط" players={mockSquad.midfielders} />
      <SquadSection title="المهاجمون" players={mockSquad.forwards} />
    </div>
  );
}
