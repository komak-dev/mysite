import { getAllPosts } from "@/data/posts";
import Search from "@/components/client/search";

export const runtime = "nodejs";
export const dynamic = "force-static";

async function Page() {
  const posts = getAllPosts();
  return (
    <div>
      <Search posts={posts} />
    </div>
  );
}

export default Page;
