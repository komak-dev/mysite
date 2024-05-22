import { getAllTitleAndId } from "@/data/posts";
import { getRequestContext } from "@cloudflare/next-on-pages";
import Link from "next/link";

export const runtime = "edge";

async function Page() {
  return <Link href="/admin/posts">Posts</Link>;
}

export default Page;
