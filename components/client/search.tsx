"use client";
import { Post } from "@/types/post";
import Fuse from "fuse.js";
import { useState } from "react";
import { SearchBar } from "./search-bar";
import { useRouter } from "next/navigation";
import { PostCard } from "@/components/server/post-card";

export default function Search({ posts }: { posts: Post[] }) {
  const [word, setWord] = useState("");
  const options = {
    keys: ["slug", "title"],
  };
  const fuse = new Fuse(
    posts.map((post) => ({ slug: post.slug, title: post.title })),
    options,
  );

  const router = useRouter();

  return (
    <>
      <SearchBar
        onChange={(e) => setWord(e.target.value)}
        onBlur={() => {
          if (!word) {
            router.back();
          }
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-9">
        {posts
          .filter((post) => {
            return fuse
              .search(word)
              .find(({ item: { slug } }) => slug == post.slug);
          })
          .map((post) => (
            <PostCard post={post} key={post.slug} />
          ))}
      </div>
    </>
  );
}
