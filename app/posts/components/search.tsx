"use client";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/post";
import Fuse from "fuse.js";
import { useState } from "react";
import { SearchBar } from "./search-bar";
import { useRouter } from "next/navigation";

export default function Search({ posts }: { posts: Post[] }) {
  const [word, setWord] = useState("");
  const options = {
    keys: ["id", "title"],
  };
  const fuse = new Fuse(
    posts.map((post) => ({ id: post.id, title: post.title })),
    options,
  );

  const router = useRouter()

  return (
    <>
      <SearchBar
        onChange={(e) => setWord(e.target.value)}
        onBlur={() => {
          if (!word) {
            router.push("/posts");
          }
        }}
      />
      {posts
        .filter((post) => {
          return fuse.search(word).find(({ item: { id } }) => id == post.id);
        })
        .map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
    </>
  );
}
