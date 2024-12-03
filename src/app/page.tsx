import Link from "next/link";
import { FeaturedArticle } from "@/components/featured-article";
import { ArticleCard } from "@/components/article-card";
import { ArticleCardSmall } from "@/components/article-card-small";
import { StandingsTable } from "@/components/sidebar/standings-table";
import { UpcomingMatches } from "@/components/sidebar/upcoming-matches";
import { NewsletterSubscription } from "@/components/newsletter-subscription";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const featuredArticle = {
  title: "انتقال يوسف المساكني إلى الترجي: فصل جديد في مسيرته",
  description:
    "بعد فترة من المفاوضات، يوسف المساكني يعود إلى ناديه السابق الترجي في صفقة مثيرة",
  image:
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
  category: "انتقالات",
  date: "22-01-2024",
  slug: "msakni-return-to-esperance",
};

const articles = [
  {
    title: "الترجي يحقق فوزاً صعباً في دوري الأبطال",
    description:
      "حقق الترجي الرياضي فوزاً صعباً على نادي الرجاء المغربي في مباراة دوري أبطال أفريقيا، ليعزز موقعه في صدارة المجموعة.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "دوري أبطال أفريقيا",
    date: "23-01-2024",
    slug: "esperance-vs-rajah-champions-league",
  },
  {
    title: "النادي الإفريقي يستعد للمشاركة في البطولة العربية",
    description:
      "النادي الإفريقي يخوض استعداداته الأخيرة قبل انطلاق البطولة العربية للأندية، ويأمل في تقديم أداء قوي.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "بطولات عربية",
    date: "22-01-2024",
    slug: "club-africain-arab-tournament-preparations",
  },
  {
    title: "تألق لاعب منتخب تونس في الدوري الفرنسي",
    description:
      "قدم اللاعب التونسي في الدوري الفرنسي أداءً لافتًا خلال المباراة الأخيرة مع فريقه، ليحجز مكانه في التشكيلة الأساسية.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "محترفون",
    date: "21-01-2024",
    slug: "tunisian-player-france-performance",
  },
  {
    title: "النجم الساحلي يعلن عن تعاقد جديد",
    description:
      "أعلن النجم الساحلي عن توقيع عقد مع لاعب وسط دفاعي لتعزيز صفوف الفريق في فترة الانتقالات الشتوية.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "20-01-2024",
    slug: "safa-signing-new-player",
  },
];

const transferNews = [
  {
    title: "يوسف المساكني يقترب من العودة إلى الترجي",
    description: "مفاوضات متقدمة لعودة النجم التونسي إلى فريقه السابق",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "21-01-2024",
    slug: "msakni-esperance-return",
  },
  {
    title: "النادي الصفاقسي يتعاقد مع مدافع برازيلي",
    description: "صفقة جديدة لتعزيز خط الدفاع",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "20-01-2024",
    slug: "sfax-brazilian-defender",
  },
  {
    title: "عرض سعودي لنجم النادي الإفريقي",
    description: "مفاوضات جارية مع نادي من الدوري السعودي",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "19-01-2024",
    slug: "saudi-offer-club-africain",
  },
];

const tunisiansAbroad = [
  {
    title: "حنبعل المجبري يتألق مع مانشستر يونايتد",
    description: "أداء مميز في مباراة الفريق الأخيرة",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "محترفون",
    date: "21-01-2024",
    slug: "mejbri-united-performance",
  },
  {
    title: "إلياس السخيري يسجل هدفاً في الدوري الألماني",
    description: "هدف جميل في مرمى بايرن ميونيخ",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "محترفون",
    date: "20-01-2024",
    slug: "skhiri-bundesliga-goal",
  },
  {
    title: "علي معلول يقدم مستوى ثابتاً مع الأهلي المصري",
    description: "أداء متميز في دوري أبطال أفريقيا",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "محترفون",
    date: "19-01-2024",
    slug: "maaloul-ahly-performance",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-0 text-text-primary">
      <div className="container py-6">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-3">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="bg-surface-1 w-full justify-start">
                <TabsTrigger
                  value="news"
                  className="data-[state=active]:bg-brand-primary"
                >
                  آخر الأخبار
                </TabsTrigger>
                <TabsTrigger value="matches">المباريات</TabsTrigger>
                <TabsTrigger value="stats">إحصائيات</TabsTrigger>
              </TabsList>

              <TabsContent value="news" className="space-y-6">
                <section className="relative">
                  <FeaturedArticle {...featuredArticle} />
                </section>

                <section>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">أحدث المقالات</h2>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-6 sm:grid-cols-2">
                    {articles.map((article) => (
                      <ArticleCard key={article.slug} {...article} />
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">سوق الانتقالات</h2>
                    <Link
                      href="/transfers"
                      className="text-brand-primary hover:underline"
                    >
                      عرض المزيد
                    </Link>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-4 sm:grid-cols-3">
                    {transferNews.map((article) => (
                      <ArticleCardSmall key={article.slug} {...article} />
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">محترفونا في الخارج</h2>
                    <Link
                      href="/tunisians-abroad"
                      className="text-brand-primary hover:underline"
                    >
                      عرض المزيد
                    </Link>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-4 sm:grid-cols-3">
                    {tunisiansAbroad.map((article) => (
                      <ArticleCardSmall key={article.slug} {...article} />
                    ))}
                  </div>
                </section>

                <section>
                  <NewsletterSubscription />
                </section>
              </TabsContent>

              <TabsContent value="matches">
                <div className="rounded-lg border border-border-subtle p-6">
                  <p className="text-center text-text-tertiary">
                    قريباً - جدول المباريات المباشر
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="stats">
                <div className="rounded-lg border border-border-subtle p-6">
                  <p className="text-center text-text-tertiary">
                    قريباً - إحصائيات مفصلة
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <StandingsTable />
            <UpcomingMatches />
          </div>
        </div>
      </div>
    </main>
  );
}
