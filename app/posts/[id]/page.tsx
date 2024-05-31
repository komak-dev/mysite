import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllPosts, getPostsById } from "@/data/posts";

export const runtime = "nodejs";
export const dynamic = "force-static";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = getPostsById(id);
  return (
    <div>
      <MarkdownRenderer post={post} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}
