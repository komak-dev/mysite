import type { NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// ...

export async function GET(request: NextRequest) {
  // this is the KV binding you defined in the wrangler.toml file
  const myKv = getRequestContext().env.MY_KV;

  const cnt = await myKv.get("count");
  const counts = cnt ? parseInt(cnt) : 0;
  await myKv.put("count", counts + 1);

  return new Response(`The value of kvTest in MY_KV is: ${counts}`);
}
