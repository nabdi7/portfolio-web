import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  author: string;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="flex flex-col border-border border-b py-4">
      <div>
        <h2 className="text-lg font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground text-gray-500">
        <Link href={"/" + slug}>{description}</Link>
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dd className="text-sm sm:text-base font-medium flex items-center ">
            <time dateTime={date} className="text-sm text-gray-600 mt-1">
              {formatDate(date)}
            </time>
          </dd>
        </dl>
      </div>
    </article>
  );
}
