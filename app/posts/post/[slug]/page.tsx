import { MarkdownRenderer } from "@/components/server/markdown-renderer";
import { getAllPosts, getPostsBySlug } from "@/data/posts";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = getPostsBySlug(slug);
  return (
    <div>
      <MarkdownRenderer post={post} />
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
