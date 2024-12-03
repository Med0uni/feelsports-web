import { ArticleCard } from "@/components/article-card"
import { Separator } from "@/components/ui/separator"

const internationalNews = [
  {
    title: "ريال مدريد يتصدر الليغا بفوز كبير",
    description: "فوز ساحق للفريق الملكي يعزز موقعه في صدارة الدوري الإسباني",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "الدوري الإسباني",
    date: "24-01-2024",
    slug: "real-madrid-victory"
  },
  {
    title: "مانشستر سيتي يواصل حملة الدفاع عن لقبه",
    description: "فوز مهم للسيتي في سعيه للحفاظ على لقب البريميرليغ",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "الدوري الإنجليزي",
    date: "24-01-2024",
    slug: "city-premier-league"
  },
  {
    title: "بايرن ميونيخ يستعد لمواجهة مصيرية",
    description: "الفريق البافاري يكثف تحضيراته لمباراة دوري الأبطال",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "دوري الأبطال",
    date: "23-01-2024",
    slug: "bayern-champions-league"
  }
]

export default function InternationalNewsPage() {
  return (
    <main className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">أخبار عالمية</h1>
          <p className="mt-2 text-muted-foreground">آخر أخبار كرة القدم العالمية</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internationalNews.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </main>
  )
}
