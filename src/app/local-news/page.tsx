import { ArticleCard } from "@/components/article-card"
import { Separator } from "@/components/ui/separator"

const localNews = [
  {
    title: "الترجي يواصل صدارة الدوري بفوز ثمين",
    description: "فوز مهم للترجي الرياضي يعزز به صدارته للدوري التونسي لكرة القدم",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "الدوري التونسي",
    date: "24-01-2024",
    slug: "esperance-victory-league"
  },
  {
    title: "النادي الصفاقسي يستعد لمواجهة الأهلي المصري",
    description: "تحضيرات مكثفة للفريق قبل مباراة دوري أبطال أفريقيا",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "دوري الأبطال",
    date: "24-01-2024",
    slug: "sfax-preparing-ahly"
  },
  {
    title: "النجم الساحلي يضم لاعباً جديداً",
    description: "صفقة جديدة تعزز صفوف الفريق في الميركاتو الشتوي",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "23-01-2024",
    slug: "etoile-new-signing"
  }
]

export default function LocalNewsPage() {
  return (
    <main className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">أخبار محلية</h1>
          <p className="mt-2 text-muted-foreground">آخر أخبار كرة القدم التونسية</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localNews.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </main>
  )
}
