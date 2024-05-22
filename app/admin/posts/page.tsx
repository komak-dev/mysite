import { getAllTitleAndId } from "@/data/posts";
import Link from "next/link";

async function Page() {
  const results = await getAllTitleAndId();
  return (
    <>
      <Link href="/admin">admin</Link>
      <Link href="/admin/posts">posts</Link>
      {results.map((post: any, i) => (
        <Link key={i} href={`/admin/posts/edit?id=${post.id}`}>
          {post.id}: {post.title}
        </Link>
      ))}
    </>
  );
}

export default Page;
