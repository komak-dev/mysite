import { Input } from "@/components/ui/input";
import { getAllPosts } from "@/data/posts";
import Link from "next/link";
import { SearchBarDummy } from "@/components/client/search-bar";
import { PostCard } from "@/components/server/post-card";

export const runtime = "nodejs";
export const dynamic = "force-static";

async function Page() {
  const posts = getAllPosts();
  return (
    <div>
      <Link href="/posts/search">
        <SearchBarDummy />
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-9">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}

export default Page;
