"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const mockNews = [
  {
    id: 1,
    title: "فوز مهم على النادي الصفاقسي في الجولة الماضية",
    date: "22-01-2024",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "تدريبات خاصة استعداداً لمباراة دوري أبطال أفريقيا",
    date: "21-01-2024",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "عودة اللاعب المصاب إلى التدريبات الجماعية",
    date: "20-01-2024",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
  },
];

export function TeamNews() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">آخر الأخبار</h3>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-primary hover:text-primary/90"
        >
          <Link href="?tab=news" className="flex items-center gap-1">
            عرض المزيد
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {mockNews.map((news) => (
          <div key={news.id} className="flex gap-4">
            <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-md">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between py-1">
              <h4 className="font-medium line-clamp-2">{news.title}</h4>
              <p className="text-sm text-muted-foreground">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
