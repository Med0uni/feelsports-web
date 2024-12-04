import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

interface FeaturedArticleProps {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export function FeaturedArticle({
  title,
  description,
  image,
  category,
  date,
  slug,
}: FeaturedArticleProps) {
  return (
    <Link href={`/article/${slug}`}>
      <Card className="group relative overflow-hidden rounded-16 border-0 bg-[#2a2a2a]">
        <div className="relative h-[400px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-6 right-6 left-6 text-right">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium">
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                {category}
              </span>
              <span className="text-gray-300">{date}</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
