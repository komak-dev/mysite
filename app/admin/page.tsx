import { getAllPosts } from "@/data/posts";
import Link from "next/link";
import { sortByCreatedAt } from "@/lib/sort-post";

export default function Page() {
  const posts = getAllPosts();
  posts.sort(sortByCreatedAt);
  posts.reverse();
  return (
    <table className="mt-6 w-full border-collapse border border-slate-500">
      <thead>
        <tr>
          {KEYS.map((key) => (
            <th scope="col" className="border border-slate-600" key={key}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx1) => (
          <tr key={idx1}>
            {KEYS.map((key, idx2) => (
              <td key={`${idx1}-${idx2}`} className="border border-slate-700">
                <Link href={`/posts/post/${post.slug}`}>
                  {
                    //@ts-ignore
                    post[key]
                  }
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const KEYS = ["slug", "title", "createdAt", "updatedAt"];
