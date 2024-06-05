import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getAllPosts() {
  const posts: Post[] = [];
  const contentDir = path.join(process.cwd(), "contents");
  const postDirList = fs.readdirSync(contentDir);
  postDirList.forEach((postDirName) => {
    if (postDirName !== ".DS_Store") {
      const post = getPostsBySlug(postDirName);
      posts.push(post);
    }
  });
  return posts;
}

export function getPostsBySlug(slug: string) {
  const postDir = path.join(process.cwd(), "contents", slug);
  const { birthtime, mtime } = fs.statSync(postDir);
  const md = getMdBySlug(slug);
  let {
    data: { title, createdAt, updatedAt },
    content,
  } = matter(md);
  createdAt = new Date(createdAt).toDateString();
  updatedAt = new Date(updatedAt).toDateString();
  const post: Post = {
    slug,
    title,
    content,
    createdAt,
    updatedAt,
  };
  return post;
}

export function getMdBySlug(slug: string) {
  const postMdFile = path.join(
    path.join(process.cwd(), "contents", slug, "index.md"),
  );
  const md = fs.readFileSync(postMdFile, {
    encoding: "utf-8",
  });
  return md;
}
