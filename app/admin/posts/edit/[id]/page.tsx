import Editor from "@/app/admin/components/editor";
import { getPostfromId } from "@/data/posts";

export const runtime = "edge";
// export const dynamicParams = false;

async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { content, isPublished, createdAt, updatedAt } =
    id == "new"
      ? { content: "", isPublished: false, createdAt: "", updatedAt: "" }
      : await getPostfromId(parseInt(id));
  return (
    <Editor
      initialState={{
        content,
        isPublished,
        createdAt,
        updatedAt,
        id: id == "new" ? id : parseInt(id),
      }}
    />
  );
}

export default Page;

// export const generateStaticParams = async () => {
//   const allTitleAndId = await getAllTitleAndId();
//   const slugs = allTitleAndId.map((post) => post.id);
//   return slugs.map((slug) => ({ params: { slug } }));
// };
