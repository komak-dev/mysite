"use client";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/post";
import Fuse from "fuse.js";
import { useState } from "react";

function Search({ posts }: { posts: Post[] }) {
  const [word, setWord] = useState("");
  const options = {
    keys: ["id", "title"],
  };
  const fuse = new Fuse(
    posts.map((post) => ({ id: post.id, title: post.title })),
    options,
  );

  return (
    <>
      <Input onChange={(e) => setWord(e.target.value)} />
      {posts
        .filter((post) => {
          if (!word) {
            return true;
          } else {
            return fuse.search(word).find(({ item: { id } }) => id == post.id);
          }
        })
        .map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
    </>
  );
}

export default Search;
