import { ArticleCard } from "@/components/article-card"
import { Separator } from "@/components/ui/separator"

const transfers = [
  {
    title: "مبابي يقترب من ريال مدريد",
    description: "تقارير تؤكد اقتراب النجم الفرنسي من الانتقال إلى النادي الملكي",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "24-01-2024",
    slug: "mbappe-real-madrid"
  },
  {
    title: "برشلونة يستهدف مدافع جديد",
    description: "النادي الكتالوني يسعى لتعزيز خط دفاعه في الميركاتو الشتوي",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "24-01-2024",
    slug: "barcelona-defender-target"
  },
  {
    title: "مانشستر يونايتد يفاوض مهاجماً جديداً",
    description: "الشياطين الحمر في محادثات متقدمة مع مهاجم بارز",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "23-01-2024",
    slug: "united-striker-talks"
  }
]

export default function TransfersPage() {
  return (
    <main className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">سوق الانتقالات</h1>
          <p className="mt-2 text-muted-foreground">آخر أخبار انتقالات اللاعبين والصفقات</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transfers.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </main>
  )
}
