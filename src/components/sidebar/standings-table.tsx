interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

const standings: TeamStanding[] = [
  {
    position: 1,
    team: "الترجي الرياضي",
    played: 14,
    won: 11,
    drawn: 3,
    lost: 0,
    gf: 25,
    ga: 7,
    gd: 18,
    points: 36
  },
  {
    position: 2,
    team: "النادي الصفاقسي",
    played: 14,
    won: 9,
    drawn: 5,
    lost: 0,
    gf: 20,
    ga: 8,
    gd: 12,
    points: 32
  },
  {
    position: 3,
    team: "النجم الساحلي",
    played: 14,
    won: 9,
    drawn: 3,
    lost: 2,
    gf: 19,
    ga: 10,
    gd: 9,
    points: 30
  },
  {
    position: 4,
    team: "الاتحاد المنستيري",
    played: 14,
    won: 8,
    drawn: 4,
    lost: 2,
    gf: 18,
    ga: 11,
    gd: 7,
    points: 28
  },
  {
    position: 5,
    team: "النادي الإفريقي",
    played: 14,
    won: 7,
    drawn: 5,
    lost: 2,
    gf: 17,
    ga: 12,
    gd: 5,
    points: 26
  },
  {
    position: 6,
    team: "الملعب التونسي",
    played: 14,
    won: 6,
    drawn: 4,
    lost: 4,
    gf: 15,
    ga: 14,
    gd: 1,
    points: 22
  },
  {
    position: 7,
    team: "مستقبل سليمان",
    played: 14,
    won: 5,
    drawn: 5,
    lost: 4,
    gf: 14,
    ga: 15,
    gd: -1,
    points: 20
  },
  {
    position: 8,
    team: "النادي البنزرتي",
    played: 14,
    won: 4,
    drawn: 6,
    lost: 4,
    gf: 13,
    ga: 16,
    gd: -3,
    points: 18
  }
]

interface StandingsTableProps {
  className?: string;
}

export function StandingsTable({ className }: StandingsTableProps) {
  return (
    <div className={`card-base p-4 ${className}`}>
      <h3 className="mb-4 text-lg font-bold text-foreground">ترتيب البطولة</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-right">
              <th className="pb-2 font-medium text-muted-foreground">#</th>
              <th className="pb-2 font-medium text-muted-foreground">الفريق</th>
              <th className="pb-2 font-medium text-muted-foreground">لعب</th>
              <th className="pb-2 font-medium text-muted-foreground">نقاط</th>
              <th className="pb-2 font-medium text-muted-foreground">فارق</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team) => (
              <tr key={team.position} className="border-b border-border-subtle last:border-0">
                <td className="py-2 text-muted-foreground">{team.position}</td>
                <td className="py-2 text-foreground">{team.team}</td>
                <td className="py-2 text-muted-foreground">{team.played}</td>
                <td className="py-2 font-medium text-foreground">{team.points}</td>
                <td className="py-2 text-muted-foreground">{team.gd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
