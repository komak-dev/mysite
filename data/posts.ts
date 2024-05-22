import { getRequestContext } from "@cloudflare/next-on-pages";
import { cache } from "react";

export const getAllPosts = cache(async () => {});

export const getContentfromId = cache(async (id: number) => {
  const content = await getRequestContext()
    .env.D1.prepare(
      `
    SELECT content from posts where id = ?
    `
    )
    .bind(id)
    .run();
  console.log(content);
  return content;
});

export const getAllTitleAndId = cache(async () => {
  const { results }: { results: { id: number; title: string }[] } =
    await getRequestContext()
      .env.D1.prepare(`SELECT id,title FROM posts`)
      .all();
  return results;
});
