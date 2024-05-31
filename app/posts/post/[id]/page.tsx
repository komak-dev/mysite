import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllPosts, getPostsById } from "@/data/posts";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = getPostsById(id);
  return (
    <div>
      <MarkdownRenderer post={post} />
    </div>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}
