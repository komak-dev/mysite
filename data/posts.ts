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
      const post = getPostsById(postDirName);
      posts.push(post);
    }
  });
  return posts;
}

export function getPostsById(id: string) {
  const postDir = path.join(process.cwd(), "contents", id);
  const postMdFile = path.join(postDir, "index.md");
  const { birthtime, mtime } = fs.statSync(postDir);
  const md = fs.readFileSync(postMdFile, {
    encoding: "utf-8",
  });
  const {
    data: { title, tags },
    content,
  } = matter(md);
  const createdAt = birthtime.toDateString();
  const updatedAt = mtime.toDateString();
  const post: Post = {
    id,
    title,
    tags,
    content,
    createdAt,
    updatedAt,
  };
  console.log(post);
  return post;
}

export function getAllTags() {
  const posts = getAllPosts();
  const tags: Set<string> = new Set();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(tag);
    });
  });
  return Array.from(tags);
}
