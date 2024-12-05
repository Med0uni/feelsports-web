import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, Share2, Clock, User } from "lucide-react";

// Mock articles database (in a real app, this would come from a CMS or database)
const articl = [
  {
    title: "انتقال يوسف المساكني إلى الترجي: فصل جديد في مسيرته",
    description:
      "بعد فترة من المفاوضات، يوسف المساكني يعود إلى ناديه السابق الترجي في صفقة مثيرة",
    fullContent: `
      في تطور مثير لعشاق كرة القدم التونسية، أعلن نادي الترجي الرياضي رسميًا التعاقد مع نجمه السابق يوسف المساكني. 

      يعتبر هذا الانتقال علامة بارزة في مسيرة اللاعب، حيث يعود المساكني إلى النادي الذي صنع فيه مجده. 

      صرح المدير الفني للترجي قائلاً: "يوسف إضافة نوعية لفريقنا، وعودته ستعزز قدراتنا الهجومية بشكل كبير."

      من المتوقع أن يلعب المساكني دورًا محوريًا في الموسم الحالي، خاصة في منافسات دوري أبطال أفريقيا.
    `,
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940&auto=format&fit=crop",
    category: "انتقالات",
    date: "22-01-2024",
    author: "محمد الأمين",
    readTime: "4 دقائق",
    slug: "المساكني",
  },
  // Add more articles as needed
];

/*export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articl.find((a) => a.slug === params.slug);
  return {
    title: article?.title || "Article Not Found",
  };
}

export async function generateStaticParams() {
  return Object.keys(articl).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articl[params.slug as keyof typeof articl];

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">المقال غير موجود</h1>
        <p className="mt-4 text-muted-foreground">
          عذرًا، لم يتم العثور على المقال المطلوب
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-white hover:bg-brand-primary/90"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    );
  }

  return (
    <main className="container py-12">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
              العودة
            </Link>
            <button
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              aria-label="مشاركة المقال"
            >
              <Share2 className="h-5 w-5" />
              مشاركة
            </button>
          </div>

          <div className="space-y-4">
            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold text-foreground">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  {article.date} • {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p>{article.description}</p>
          {article.fullContent.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-8">
          <h3 className="mb-4 text-xl font-bold">مقالات ذات صلة</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-surface-1 p-4">
              <p className="text-muted-foreground">
                سيتم إضافة مقالات ذات صلة قريبًا
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
*/

export default function ArticlePage() {
  return (
    <div className="container py-12 text-center">
      <h1 className="text-2xl font-bold">المقال غير موجود</h1>
      <p className="mt-4 text-muted-foreground">
        عذرًا، لم يتم العثور على المقال المطلوب
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-white hover:bg-brand-primary/90"
      >
        العودة للصفحة الرئيسية
      </Link>
    </div>
  );
}
