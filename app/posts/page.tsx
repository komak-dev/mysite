import { getAllPosts } from "@/data/posts";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-static";

async function Page() {
  const posts = getAllPosts();
  return (
    <ul>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <li>
            {post.id}: {post.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Page;
