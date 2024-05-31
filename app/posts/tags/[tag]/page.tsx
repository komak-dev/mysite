import { getAllTags } from "@/data/posts";

export const runtime  = "nodejs";
export const dynamic = "force-static";

export default function Page({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  return <h1>{tag}</h1>;
}

export async function generateStaticParams(){
    const tags = getAllTags();
    return tags.map(tag=>({
        slug:tag,
    }))
}
