import { Post } from "@/types/post";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="aspect-video rounded-3xl border">
      <Link href={`/posts/post/${post.slug}`}>{post.title}</Link>
    </div>
  );
}
