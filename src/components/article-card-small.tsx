import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

interface ArticleCardSmallProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export function ArticleCardSmall({
  title,
  description,
  image,
  category,
  date,
  slug,
}: ArticleCardSmallProps) {
  return (
    //<Link href={`/article/${slug}`}>
    <Card className="card-base card-hover group rounded-16 border-0 h-full overflow-hidden">
      <div className="relative h-32 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <div className="mb-1 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-xs text-brand-primary">
            {category}
          </span>
          <span className="text-text-tertiary">{date}</span>
        </div>
        <h3 className="mb-1 line-clamp-2 text-base font-bold text-text-primary">
          {title}
        </h3>
        <p className="line-clamp-1 text-xs text-text-secondary">
          {description}
        </p>
      </div>
    </Card>
    //</Link>
  );
}
