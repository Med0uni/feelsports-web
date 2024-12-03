import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Globe2, Download } from 'lucide-react'
import { Separator } from './ui/separator'

const competitions = [
  { name: 'الرابطة التونسية المحترفة 1', href: '/competitions/ligue1' },
  { name: 'كأس تونس', href: '/competitions/cup' },
  { name: 'دوري أبطال أفريقيا', href: '/competitions/caf-champions' },
  { name: 'كأس الكونفدرالية', href: '/competitions/caf-confederation' },
  { name: 'دوري أبطال أوروبا', href: '/competitions/champions-league' },
  { name: 'الدوري الأوروبي', href: '/competitions/europa-league' }
]

const teams = [
  { name: 'الترجي الرياضي', href: '/teams/esperance' },
  { name: 'النادي الإفريقي', href: '/teams/club-africain' },
  { name: 'النادي الصفاقسي', href: '/teams/css' },
  { name: 'النجم الساحلي', href: '/teams/ess' },
  { name: 'الاتحاد المنستيري', href: '/teams/usm' },
  { name: 'الملعب التونسي', href: '/teams/st' }
]

export function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-footer-border text-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">حمّل التطبيق</h4>
            <p className="text-sm text-muted-foreground">احصل على أخبار كرة القدم أينما كنت</p>
            <div className="flex flex-col gap-3">
              <Link href="#" className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                متجر آبل
              </Link>
              <Link href="#" className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                متجر جوجل
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">المسابقات</h4>
            <ul className="space-y-2">
              {competitions.map((competition) => (
                <li key={competition.href}>
                  <Link href={competition.href} className="nav-item">
                    {competition.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">الفرق</h4>
            <ul className="space-y-2">
              {teams.map((team) => (
                <li key={team.href}>
                  <Link href={team.href} className="nav-item">
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">تابعنا</h4>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-right">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              FeelSports
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/about" className="nav-item">من نحن</Link>
              <Link href="/contact" className="nav-item">اتصل بنا</Link>
              <Link href="/privacy" className="nav-item">سياسة الخصوصية</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe2 size={16} />
            <span>تونس</span>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FeelSports. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
