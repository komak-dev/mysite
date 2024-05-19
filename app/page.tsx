import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Link href="/admin/blog/edit">edit</Link>
    </>
  );
}
