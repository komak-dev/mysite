"use client";
import { Input } from "@/components/ui/input";
import Fuse from "fuse.js";
import { useState } from "react";

function Search({
  allTitleAndId,
}: {
  allTitleAndId: { id: number; title: string }[];
}) {
  const [word, setWord] = useState("");
  const options = {
    keys: ["id", "title"],
  };

  const fuse = new Fuse(allTitleAndId, options);

  return (
    <>
      <Input onChange={(e) => setWord(e.target.value)} />
      {allTitleAndId
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
