"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface Transfer {
  playerName: string;
  playerImage?: string;
  type: "in" | "out";
  fromTeam?: string;
  toTeam?: string;
  fromTeamLogo?: string;
  toTeamLogo?: string;
  date: string;
  fee?: string;
}

const mockTransfers: Transfer[] = [
  {
    playerName: "يوسف المساكني",
    type: "in",
    fromTeam: "الدحيل",
    toTeam: "الترجي الرياضي",
    fromTeamLogo: "/logos/default.png",
    toTeamLogo: "/logos/est.png",
    date: "15 جانفي 2024",
    fee: "انتقال حر",
  },
  {
    playerName: "محمد علي بن رمضان",
    type: "out",
    fromTeam: "الترجي الرياضي",
    toTeam: "الاتحاد",
    fromTeamLogo: "/logos/est.png",
    toTeamLogo: "/logos/default.png",
    date: "10 جانفي 2024",
    fee: "5 مليون يورو",
  },
];

function TransferRow({ transfer }: { transfer: Transfer }) {
  return (
    <div className="flex items-center gap-4 rounded-lg p-4 hover:bg-card-hover transition-colors">
      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-surface-2">
        {transfer.playerImage ? (
          <Image
            src={transfer.playerImage}
            alt={transfer.playerName}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-surface-2" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium">{transfer.playerName}</h4>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5">
              <Image
                src={
                  transfer.type === "in"
                    ? transfer.fromTeamLogo!
                    : transfer.toTeamLogo!
                }
                alt={
                  transfer.type === "in" ? transfer.fromTeam! : transfer.toTeam!
                }
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {transfer.type === "in" ? transfer.fromTeam : transfer.toTeam}
            </span>
          </div>
          <ArrowLeftRight className="h-4 w-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5">
              <Image
                src={
                  transfer.type === "in"
                    ? transfer.toTeamLogo!
                    : transfer.fromTeamLogo!
                }
                alt={
                  transfer.type === "in" ? transfer.toTeam! : transfer.fromTeam!
                }
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {transfer.type === "in" ? transfer.toTeam : transfer.fromTeam}
            </span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm text-muted-foreground">{transfer.date}</div>
        {transfer.fee && (
          <div className="text-sm font-medium text-primary">{transfer.fee}</div>
        )}
      </div>
    </div>
  );
}

function TransferList({
  transfers,
  type,
}: {
  transfers: Transfer[];
  type: "in" | "out";
}) {
  const filteredTransfers = transfers.filter((t) => t.type === type);

  return (
    <Card>
      <div className="divide-y divide-border-subtle">
        {filteredTransfers.map((transfer, index) => (
          <TransferRow key={index} transfer={transfer} />
        ))}
        {filteredTransfers.length === 0 && (
          <div className="p-4 text-center text-muted-foreground">
            لا توجد انتقالات
          </div>
        )}
      </div>
    </Card>
  );
}

export function Transfers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">الانتقالات</h2>
        <select
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
          defaultValue="2023-24"
        >
          <option value="2023-24">موسم 2023-24</option>
          <option value="2022-23">موسم 2022-23</option>
          <option value="2021-22">موسم 2021-22</option>
        </select>
      </div>

      <Tabs defaultValue="in" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="in" className="flex-1">
            انتقالات واردة
          </TabsTrigger>
          <TabsTrigger value="out" className="flex-1">
            انتقالات صادرة
          </TabsTrigger>
        </TabsList>
        <TabsContent value="in" className="mt-6">
          <TransferList transfers={mockTransfers} type="in" />
        </TabsContent>
        <TabsContent value="out" className="mt-6">
          <TransferList transfers={mockTransfers} type="out" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
