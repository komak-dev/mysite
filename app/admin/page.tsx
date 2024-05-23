import Link from "next/link";

async function Page() {
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <div className="aspect-video w-80 rounded-lg border shadow-md">
        <Link href="/admin/posts" className="w-full h-full text-6xl">
          <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
            Posts
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Page;
