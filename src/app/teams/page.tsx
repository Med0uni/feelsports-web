import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StandingsTable } from "@/components/sidebar/standings-table"
import { getAllTeams , division1Teams, division2Teams, type Team } from "@/lib/teams-data"


function TeamCard({ team }: { team: Team }) {
  return (
    <Link
      href={`/team/${team.slug}`}
      className="group relative flex items-center gap-4 rounded-xl bg-card p-4 transition-all hover:bg-card-hover"
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-lg">
        <Image
          src={team.logo}
          alt={team.name}
          fill
          className="object-contain p-2"
        />
      </div>
      <div>
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
          {team.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {team.city} • تأسس {team.founded}
        </p>
      </div>
    </Link>
  )
}

function TeamsGrid({ teams }: { teams: Team[] | undefined }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {(teams ?? []).map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}

export default function TeamsPage() {
	const teams = getAllTeams();

  return (
    <main className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">فرق كرة القدم التونسية</h1>
          <p className="mt-2 text-muted-foreground">
            جميع الفرق المحترفة في تونس
          </p>
        </div>

        <Tabs defaultValue="division1" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="division1" className="flex-1 sm:flex-none">
              الرابطة المحترفة الأولى
            </TabsTrigger>
            <TabsTrigger value="division2" className="flex-1 sm:flex-none">
              الرابطة المحترفة الثانية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="division1" className="space-y-6">
  <div className="rounded-xl border bg-card/50 p-4">
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="flex h-2 w-2 rounded-full bg-primary"></span>
      الرابطة المحترفة الأولى • موسم 2023/2024
    </div>
  </div>
  <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
    <div className="space-y-6">
      <StandingsTable />
    </div>
<TeamsGrid teams={teams.filter(team => team.league === "division1")} />
  </div>
</TabsContent>

          <TabsContent value="division2" className="space-y-6">
            <div className="rounded-xl border bg-card/50 p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                الرابطة المحترفة الثانية • موسم 2023/2024
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <div className="space-y-6">
                <StandingsTable />
              </div>
<TeamsGrid teams={teams.filter(team => team.league === "division2")} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}