interface Match {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  competition: string;
  venue: string;
  round: string;
}

const matches: Match[] = [
  {
    id: "match1",
    date: "السبت 27 جانفي",
    homeTeam: "الترجي الرياضي",
    awayTeam: "النادي الإفريقي",
    time: "14:30",
    competition: "الرابطة 1",
    venue: "رادس",
    round: "الجولة 15"
  },
  {
    id: "match2",
    date: "السبت 27 جانفي",
    homeTeam: "النجم الساحلي",
    awayTeam: "النادي الصفاقسي",
    time: "17:00",
    competition: "الرابطة 1",
    venue: "سوسة",
    round: "الجولة 15"
  },
  {
    id: "match3",
    date: "الأحد 28 جانفي",
    homeTeam: "الملعب التونسي",
    awayTeam: "الاتحاد المنستيري",
    time: "14:30",
    competition: "الرابطة 1",
    venue: "تونس",
    round: "الجولة 15"
  },
  {
    id: "match4",
    date: "الأحد 28 جانفي",
    homeTeam: "النادي البنزرتي",
    awayTeam: "مستقبل سليمان",
    time: "14:30",
    competition: "الرابطة 1",
    venue: "بنزرت",
    round: "الجولة 15"
  }
]

export function UpcomingMatches() {
  return (
    <div className="rounded-lg bg-[#2a2a2a] p-4">
      <h3 className="mb-4 text-lg font-bold text-white">مباريات الأسبوع القادم</h3>
      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="space-y-2 border-b border-white/10 pb-4 last:border-0 last:pb-0">
            <div className="text-sm text-gray-400">{match.date}</div>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="font-medium text-white">{match.homeTeam}</span>
              <span className="rounded bg-[#333333] px-2 py-1 text-xs text-primary">
                {match.time}
              </span>
              <span className="font-medium text-white">{match.awayTeam}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">{match.competition}</span>
              <span className="text-gray-400">{match.venue}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
