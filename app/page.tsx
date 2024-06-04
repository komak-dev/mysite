import { ActivityPostCard } from "@/components/server/post-card";
import { getAllPosts } from "@/data/posts";
import { sortByUpdatedAt } from "@/lib/sort-post";

export default async function Page() {
  const posts = getAllPosts();
  posts.sort(sortByUpdatedAt);
  posts.reverse();
  return (
    <>
      <h1 className="text-3xl font-bold opacity-90 p-6">Recent Activity</h1>
      <div className="flex flex-col gap-5">
        {posts.map((post, idx) => (
          <ActivityPostCard post={post} key={idx} />
        ))}
      </div>
    </>
  );
}
