import { getAllTitleAndId } from "@/data/posts";
// import Link from "next/link";

// export const runtime = "edge";

export const runtime = "nodejs";
export const dynamic = "force-static";

export default async function Page() {
  const allTitleAndId = await getAllTitleAndId();

  return (
    <>
      home page
      {allTitleAndId.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      {/* <p>{auth_user}</p> */}
      {/* {results.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))} */}
    </>
  );
}
