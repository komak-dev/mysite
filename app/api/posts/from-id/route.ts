import { getRequestContext } from "@cloudflare/next-on-pages";
import Error from "next/error";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const { results } = await getRequestContext()
    .env.D1.prepare(
      `
  SELECT content,is_published,created_at,updated_at FROM posts where id = ?
  `
    )
    .bind(id)
    .all();
  console.log(results);
  return Response.json({
    content: results[0].content,
    is_published: results[0].is_published,
    created_at: results[0].created_at,
    updated_at: results[0].updated_at,
  });
}
