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
import { Button } from "@/components/ui/button";
import { Post } from "@/types/post";
import { getLinkCardItem } from "@/data/get-link-card-item";
import { LinkCard } from "./link-card";
import { CopyButton } from "@/components/client/copy-button";
import { codeToHtml } from "shiki";
import Image from "next/image";
import path from "path";
import { visit } from "unist-util-visit";
import fs from "fs";

export async function MarkdownRenderer({ post }: { post: Post }) {
  const { title, tags, content, createdAt, updatedAt } = post;

  const parsedMarkdown = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node: any) => {
          if (node.tagName == "img" && node.properties.src.startsWith("/")) {
            node.properties.src = "/" + post.slug + node.properties.src;
          }
        });
      };
    })
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
        pre: CustomPre,
        p: CustomP,
        img: CustomImage,
        a: CustomA,
      },
    })
    .process(content || "");

  return (
    <div>
      <div className="mb-6  border-b flex flex-col justify-between items-center px-3">
        <div className="flex flex-col justify-center items-center flex-1 py-20">
          <h1 className="font-bold text-3xl text-center">
            {title || "タイトルを入力してください"}
          </h1>
        </div>
        <div>created at: {createdAt}</div>
        <div>updated at: {updatedAt}</div>
        <div className="flex flex-wrap items-center justify-center pb-1">
          {tags?.map((tag: string, idx: number) => (
            <Button
              asChild
              variant="ghost"
              className="p-1 h-max text-zinc-500"
              key={idx}
            >
              <Link href={`/posts/tags/${tag}`}>{tag}</Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="text-zinc-700 dark:text-zinc-300 text-lg tracking-wide">
        {parsedMarkdown.result}
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

async function CustomPre({ children }: { children: React.ReactElement }) {
  const meta: string = children.props.className?.toString();
  const language = meta?.startsWith("language-")
    ? meta?.split("-")[1].split(":")[0]
    : undefined;
  const filename = meta?.startsWith("language-")
    ? meta?.split(":")[1]
    : undefined;
  const code: string = children.props.children.toString();

  const highlightedHtml = await codeToHtml(code, {
    lang: language || "",
    theme: "github-dark",
  });

  return (
    <div className="py-2 rounded-lg overflow-hidden bg-[#242a2e] my-3 group relative">
      <div className="opacity-0 group-hover:opacity-50 absolute top-1 right-1 text-white z-10">
        <CopyButton text={code} />
      </div>
      <pre className="mx-2 text-base">
        {filename && (
          <div className="text-white opacity-50 pb-2">{filename}</div>
        )}
        <div
          className="overflow-auto"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </pre>
    </div>
  );
}

function CustomA({
  children,
  href,
}: {
  children: React.ReactElement;
  href: string;
}) {
  return (
    <Link href={href} className="text-[#99c3ff]">
      linklinklink: {children}
    </Link>
  );
}

async function CustomP({ children }: { children: React.ReactElement }) {
  if (
    children?.props?.href &&
    children?.props?.children == children?.props?.href
  ) {
    const linkCardItem = await getLinkCardItem(children.props.href);
    return <LinkCard linkCardItem={linkCardItem} />;
  }
  return <p>{children}</p>;
}

function CustomImage({ src, alt }: { src: string; alt: string }) {
  if (!src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="mx-auto rounded-lg my-2"
      />
    );
  }
  const imagePath = path.join(process.cwd(), "contents", src);
  const image = fs.readFileSync(imagePath);
  return (
    <Image
      src={"data:image/jpg;base64," + image.toString("base64")}
      alt={alt}
      width={600}
      height={600}
      className="mx-auto rounded-lg my-2"
    />
  );
}
