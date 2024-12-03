import Image from 'next/image'
import Link from 'next/link'
import { Card } from './ui/card'

interface ArticleCardProps {
  title: string
  description: string
  image: string
  category: string
  date: string
  slug: string
}

export function ArticleCard({ title, description, image, category, date, slug }: ArticleCardProps) {
  return (
    <Link href={`/article/${slug}`}>
      <Card className="card-base card-hover group h-full overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-sm">
            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary">
              {category}
            </span>
            <span className="text-text-tertiary">{date}</span>
          </div>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-text-primary">{title}</h3>
          <p className="line-clamp-2 text-sm text-text-secondary">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
