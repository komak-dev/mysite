import { getAllTitleAndId } from "@/data/posts";
import Search from "../components/search";

export const runtime = "edge";

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
