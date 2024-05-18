import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="./admin/blog/edit">edit</Link>
      <h1>Header1</h1>
      <h2>Header2</h2>
    </>
  );
}
