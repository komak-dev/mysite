import { getAllPosts } from "@/data/posts";
import { Post } from "@/types/post";
import Link from "next/link";

export default function Page() {
    const posts = getAllPosts();
    posts.sort(sortCmp);
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

function sortCmp(p1: Post, p2: Post) {
    const p1_created_at = Date.parse(p1.createdAt);
    const p2_created_at = Date.parse(p2.createdAt);
    if (p1_created_at < p2_created_at) {
        return -1;
    } else if (p1_created_at > p2_created_at) {
        return 1;
    } else {
        return 0;
    }
}

const KEYS = ["slug", "title", "createdAt", "updatedAt"];
