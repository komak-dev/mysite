import { getRequestContext } from "@cloudflare/next-on-pages";
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
  const kv = getRequestContext().env.KV;
  const auth_user = getRequestContext().env.AUTH_USER;
  const v = await kv.get("views");
  const views = v ? parseInt(v) : 0;
  await kv.put("views", (views + 1).toString());

  // const { results } = await getRequestContext()
  //   .env.D1.prepare("SELECT * FROM Customers")
  //   .all();
  // console.log(results);
  // const { results } = await getRequestContext()
  //   .env.D1.prepare("SELECT 1")
  //   .all();
  // console.log(results);

  return (
    <>
      <p>{views}</p>
      <p>{auth_user}</p>
    </>
  );
}
