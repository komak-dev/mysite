import { Post } from "@/types/post";
import { ArrowRightFromLine } from "lucide-react";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/post/${post.slug}`}
      className="rounded-3xl border border-muted shadow-md overflow-hidden bg-muted/80 m-[3px] hover:m-0 transition-all group"
    >
      <div className="aspect-post-card flex flex-col justify-between group-hover:m-[3px] transition-all">
        <div className="opacity-80 text-3xl py-6 flex-1 flex items-center mx-10">
          <div className="mx-auto">{post.title}</div>
        </div>
        <div className="opacity-50 pb-8 mx-auto">{post.createdAt}</div>
      </div>
    </Link>
  );
}

export function ActivityPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/post/${post.slug}`}>
      <div className="aspect-auto border border-muted rounded-3xl shadow-md bg-muted/80 m-[3px] p-3 hover:p-[15px] hover:m-0 transition-all flex">
        <div className="w-10 flex items-center pr-2">
          <div className="h-7 w-7 border border-muted rounded-[14px] shadow-md shadow-inner bg-background" />
        </div>
        <div>
          <div className="opacity-50 flex gap-3">
            <p>{post.updatedAt}</p>
            <p>
              {post.createdAt == post.updatedAt
                ? "create a new post"
                : "update a post"}
            </p>
          </div>
          <div className="flex py-2 text-xl items-center gap-2 opacity-80">
            <ArrowRightFromLine />
            <p>{post.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
