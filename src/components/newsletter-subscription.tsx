import { Mail } from 'lucide-react'

export function NewsletterSubscription() {
  return (
    <div className="rounded-lg bg-newsletter-bg p-6 text-foreground">
      <div className="flex flex-col items-center text-center">
        <Mail className="mb-4 h-12 w-12" />
        <h3 className="mb-2 text-xl font-bold">اشترك في نشرتنا الإخبارية</h3>
        <p className="mb-4 text-sm text-muted-foreground">احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني</p>
        <form className="w-full max-w-md space-y-2">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="w-full rounded-lg bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            dir="rtl"
          />
          <button className="btn-primary w-full">
            اشترك الآن
          </button>
        </form>
      </div>
    </div>
  )
}
