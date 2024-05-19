import { getRequestContext } from "@cloudflare/next-on-pages";
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
  const kv = getRequestContext().env.MY_KV;
  const auth_user = getRequestContext().env.AUTH_USER;
  const v = await kv.get("views");
  const views = v ? parseInt(v) : 0;
  await kv.put("views", views + 1);

  return (
    <>
      <Link href="/admin/blog/edit">edit</Link>
      <p>{views}</p>
      <p>{auth_user}</p>
    </>
  );
}
