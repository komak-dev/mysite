import { getAllTags } from "@/data/posts";

export default function Page({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  return <h1>{tag}</h1>;
}

export function generateStaticParams() {
  const tags = getAllTags();
  tags.push("__sample__tag__");
  console.log(tags);
  return tags.map((tag) => ({
    tag: tag,
  }));
}
