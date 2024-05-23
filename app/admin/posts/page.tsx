import { getAllTitleAndId } from "@/data/posts";
import Link from "next/link";

export const runtime = "edge";

async function Page() {
  const results = await getAllTitleAndId();
  return (
    <>
      <Link href="/admin">admin</Link>
      <br />
      <Link href="/admin/posts">posts</Link>
      <br />
      <Link href="/admin/posts/edit/new">create</Link>
      <div className="flex flex-col">
        {results.map((post: any, i) => (
          <Link key={i} href={`/admin/posts/edit/${post.id}`}>
            {post.id}: {post.title}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Page;
