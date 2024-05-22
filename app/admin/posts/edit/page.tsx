"use client";
import { upload } from "@/actions/upload";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getContentfromId } from "@/data/posts";
import { useWindowHeight } from "@/hooks/use-window-size";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const runtime = "edge";

export default function Page() {
  const [editorValue, setEditorValue] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const [createdAt, setCreatedAt] = useState<string | undefined>(undefined);
  const [updatedAt, setUpdatedAt] = useState<string | undefined>(undefined);

  const id = useSearchParams().get("id");

  async function setInitialContent() {
    if (!id) return;
    const res = await fetch(`/api/posts/from-id?id=${id}`);
    const data = (await res.json()) as any;
    setEditorValue(data.content);
    setIsPublished(data.is_published == "1");
    setCreatedAt(data.created_at);
    setUpdatedAt(data.updated_at);
  }

  useEffect(() => {
    setInitialContent();
  }, []);

  const windowHeight = useWindowHeight();

  return (
    <form action={upload}>
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link href="/admin">
            <MoveLeft size="icon" />
            Posts
          </Link>
        </Button>
        <div className="flex justify-end items-center">
          <label className="flex items-center space-x-2 pr-4">
            <p>id</p>
            <Input
              value={id || "new"}
              readOnly
              className="w-max"
              name="id-or-new"
            />
          </label>
          <div className="flex items-center space-x-2 pr-2">
            <Checkbox
              id="publish"
              name="publish"
              checked={isPublished}
              onClick={() => setIsPublished(!isPublished)}
            />
            <label
              htmlFor="publish"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              publish
            </label>
          </div>
          <Button className="m-2" variant="outline" type="submit">
            保存
          </Button>
        </div>
      </div>
      <div className="flex flex-row p-6 pt-0">
        <Textarea
          spellCheck="false"
          onChange={(e) => setEditorValue(e.target.value)}
          value={editorValue}
          className="overflow-auto flex-1 border p-3 rounded-3xl shadow-lg"
          style={{ height: `${windowHeight - 226}px` }}
          name="content"
        />
        <div className="w-3"></div>
        <div
          className="overflow-auto flex-1 border p-3 rounded-3xl shadow-lg"
          style={{ height: `${windowHeight - 226}px` }}
        >
          <div>
            <MarkdownRenderer
              md={editorValue}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
