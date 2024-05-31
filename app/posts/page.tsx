import { Input } from "@/components/ui/input";
import { getAllPosts } from "@/data/posts";
import Link from "next/link";
import { SearchBarDummy } from "./components/search-bar";

export const runtime = "nodejs";
export const dynamic = "force-static";

async function Page() {
  const posts = getAllPosts();
  return (
    <div>
      <Link href="/posts/search">
      <SearchBarDummy/>
      </Link>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li>
              {post.id}: {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Page;
