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

export function MarkdownRenderer({ md }: { md: string }) {
  return (
    <div>
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
          .processSync(md).result
      }
    </div>
  );
}

function CustomH1({ children }: { children: React.ReactElement }) {
  return <h1 className="font-bold text-3xl">{children}</h1>;
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
