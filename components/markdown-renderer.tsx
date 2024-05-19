import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import * as prod from "react/jsx-runtime";
import Link from "next/link";
import React from "react";
import matter from "gray-matter";
import { Button } from "./ui/button";

export function MarkdownRenderer({ md }: { md: string }) {
  let content: string = "";
  let title: string = "";
  let tags: string[] = [];
  try {
    const mdObj = matter(md);
    content = mdObj.content;
    title = mdObj.data.title as string;
    tags = mdObj.data.tags as string[];
  } catch {}
  return (
    <div>
      <div className="mb-6  border-b flex flex-col justify-between items-center px-3">
        <div className="flex flex-col justify-center items-center flex-1 py-20">
          <h1 className="font-bold text-3xl text-center">
            {title || "タイトルを入力してください"}
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center pb-1">
          {tags?.map((tag: string, idx: number) => (
            <Button
              asChild
              variant="ghost"
              className="p-1 h-max text-zinc-500"
              key={idx}
            >
              <Link href={`/posts/tag/${tag}`}>{tag}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="text-zinc-700 dark:text-zinc-300">
        {
          unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkMath)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeKatex)
            //@ts-ignore
            .use(rehypeReact, {
              Fragment: prod.Fragment,
              jsx: prod.jsx,
              jsxs: prod.jsxs,
              createElement: React.createElement,
              components: {
                h1: CustomH1,
                h2: CustomH2,
                h3: CustomH3,
                a: CustomLink,
              },
            })
            .processSync(content || "").result
        }
      </div>
    </div>
  );
}

function CustomH1({ children }: { children: React.ReactElement }) {
  return <h1 className="font-bold text-3xl py-3">{children}</h1>;
}
function CustomH2({ children }: { children: React.ReactElement }) {
  return <h2 className="font-bold text-2xl">{children}</h2>;
}
function CustomH3({ children }: { children: React.ReactElement }) {
  return <h3 className="font-bold text-xl">{children}</h3>;
}
function CustomLink({
  children,
  href,
}: {
  children: React.ReactElement;
  href: string;
}) {
  console.log(href);
  return (
    <Link className="text-[#1084fd]" href={href}>
      {children}
    </Link>
  );
}
