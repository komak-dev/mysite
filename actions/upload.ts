"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import matter from "gray-matter";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function upload(formData: FormData) {
  const headersList = headers();
  const basicAuth = headersList.get("authorization");
  if (!basicAuth) return;

  const authValue = basicAuth.split(" ")[1];
  const [user, password] = atob(authValue).split(":");

  const requestContext = getRequestContext();

  const envUser = requestContext.env.AUTH_USER;
  const envPassword = requestContext.env.AUTH_PASSWORD;

  if (!(user === envUser && password === envPassword)) {
    return;
  }

  console.log(user, password);

  const is_published = formData.get("publish") == "on";
  const content = formData.get("content");
  const title = matter(content as string).data.title as string;
  const idOrNew = formData.get("id-or-new");

  if (idOrNew != "new") {
    await getRequestContext()
      .env.D1.prepare(
        `UPDATE posts SET 
      title = ?,
      content = ?, 
      is_published = ?
      WHERE id = ?
    `
      )
      .bind(title, content, is_published, idOrNew)
      .run();
  } else {
    await getRequestContext()
      .env.D1.prepare(
        `INSERT INTO posts (title, content, is_published) VALUES (?, ?, ?)`
      )
      .bind(title, content, is_published)
      .run();
  }

  redirect("/admin/posts");
}
