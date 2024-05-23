"use client";
import { upload } from "@/actions/upload";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWindowHeight } from "@/hooks/use-window-size";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type InitialState = {
  content: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  id: number | "new";
};

export default function Editor({
  initialState,
}: {
  initialState: InitialState;
}) {
  const [editorValue, setEditorValue] = useState(initialState.content);
  const [isPublished, setIsPublished] = useState(initialState.isPublished);
  const createdAt = initialState.createdAt;
  const updatedAt = initialState.updatedAt;
  const id = initialState.id;

  const windowHeight = useWindowHeight();

  return (
    <form action={upload}>
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link href="/admin/posts">
            <MoveLeft size={20} />
            Posts
          </Link>
        </Button>
        <div className="flex justify-end items-center">
          <label className="flex items-center space-x-2 pr-4">
            <p>id</p>
            <Input value={id} readOnly className="w-max" name="id-or-new" />
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
