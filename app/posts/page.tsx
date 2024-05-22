import { Input } from "@/components/ui/input";
import { getAllTitleAndId } from "@/data/posts";
import Fuse from "fuse.js";
import { ChangeEvent } from "react";
import Search from "./components/search";

async function Page() {
  const allTitleAndId = await getAllTitleAndId();
  return (
    <div>
      Posts
      <Search allTitleAndId={allTitleAndId} />
    </div>
  );
}

export default Page;
