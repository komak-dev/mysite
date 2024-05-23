import Link from "next/link";

async function Page() {
  return (
    <div>
      Posts
      <br />
      <Link href="/posts/search">search</Link>
    </div>
  );
}

export default Page;
