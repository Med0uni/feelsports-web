import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { division1Teams, division2Teams, Team } from "@/lib/teams-data";
import { SeasonStats } from "@/components/team/season-stats";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TeamForm } from "@/components/team/team-form";
import { Squad } from "@/components/team/squad-section";
import { StandingsTable } from "@/components/sidebar/standings-table";
import { TeamStatsCard } from "@/components/team/team-stats-card";
import { TeamNews } from "@/components/team/team-news";
import { Transfers } from "@/components/team/transfers";
import { use } from "react";
import { getAllTeams, getTeamBySlug } from "@/lib/teams";

const teamTabs = [
  { id: "overview", label: "نظرة عامة" },
  { id: "table", label: "الترتيب" },
  { id: "fixtures", label: "المباريات" },
  { id: "squad", label: "التشكيلة" },
  { id: "stats", label: "إحصائيات" },
  { id: "transfers", label: "الانتقالات" },
  { id: "history", label: "التاريخ" },
  { id: "news", label: "الأخبار" },
];

// This function tells Next.js which pages to statically generate
export async function generateStaticParams() {
  const teams = getAllTeams(); // Combine division1Teams and division2Teams
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export default async function TeamPage(props: any) {
  const params = await props.params;

  console.log("Params:", params); // Debug log to check structure

  const team = await getTeamBySlug(params.slug);

  if (!team) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Team Header */}
      <div className="border-b border-card-border bg-card">
        <div className="container py-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-surface-2">
              {team.logo ? (
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="h-8 w-8 text-primary"
                />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{team.name}</h1>
              <p className="text-sm text-muted-foreground">
                {team.city} • {team.league}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="container">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="h-12 w-full justify-start space-x-2 rounded-none border-b border-card-border bg-card p-0">
              {teamTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="relative h-12 rounded-none border-b-2 border-transparent px-4 pb-3 pt-3 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-primary data-[state=active]:text-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                <div className="space-y-6">
                  <TeamForm />
                  <StandingsTable />
                  <TeamStatsCard />
                  <TeamNews />
                </div>
                <div>
                  <SeasonStats />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="rounded-lg border border-card-border bg-card p-6">
                <p className="text-center text-muted-foreground">
                  جدول الترتيب قريباً
                </p>
              </div>
            </TabsContent>

            <TabsContent value="fixtures">
              <div className="rounded-lg border border-card-border bg-card p-6">
                <p className="text-center text-muted-foreground">
                  جدول المباريات قريباً
                </p>
              </div>
            </TabsContent>

            <TabsContent value="squad">
              <Squad />
            </TabsContent>

            <TabsContent value="stats">
              <div className="rounded-lg border border-card-border bg-card p-6">
                <p className="text-center text-muted-foreground">
                  الإحصائيات قريباً
                </p>
              </div>
            </TabsContent>

            <TabsContent value="transfers">
              <Transfers />
            </TabsContent>

            <TabsContent value="history">
              <div className="rounded-lg border border-card-border bg-card p-6">
                <p className="text-center text-muted-foreground">
                  التاريخ قريباً
                </p>
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="rounded-lg border border-card-border bg-card p-6">
                <p className="text-center text-muted-foreground">
                  الأخبار قريباً
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
