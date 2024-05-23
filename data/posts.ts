import { getRequestContext } from "@cloudflare/next-on-pages";
import { cache } from "react";

export const getAllPosts = cache(async () => {});

export const getPostfromId = cache(async (id: number) => {
  const { results } = await getRequestContext()
    .env.D1.prepare(
      `
  SELECT content,is_published,created_at,updated_at FROM posts where id = ?
  `
    )
    .bind(id)
    .all();
  return {
    content: results[0].content as string,
    isPublished: !!results[0].is_published as boolean,
    createdAt: results[0].created_at as string,
    updatedAt: results[0].updated_at as string,
  };
});

export const getAllTitleAndId = cache(async () => {
  const D1: D1Database | undefined = process.env.D1 as any as D1Database;
  if (D1 == undefined) {
    console.log("d1 not found");
    return [];
  }
  const { results }: { results: { id: number; title: string }[] } =
    await D1.prepare(`SELECT id,title FROM posts`).all();
  return results;
});
