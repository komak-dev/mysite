"use client";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { useWindowHeight, useWindowWidth } from "@/hooks/use-window-size";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import ReactCodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const md = `# hello markdown
- item1
- item2
- item3 

## header2
  `;

  const [editorValue, setEditorValue] = useState("");
  const onChange = useCallback((val: string, viewUpdate: ViewUpdate) => {
    setEditorValue(val);
  }, []);

  const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();

  // console.log(windowHeight);

  return (
    <div className="flex flex-row p-6">
      <div className="flex-1 rounded-3xl p-3 border shadow-lg bg-[#1a1c27]">
        <ReactCodeMirror
          value={editorValue}
          onChange={onChange}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          theme={tokyoNight}
          height={`${windowHeight - 250}px`}
          width={`${(windowWidth - 112) / 2}px`}
        />
      </div>
      <div className="w-3"></div>
      <div
        className="overflow-auto flex-1 border p-3 rounded-3xl shadow-lg"
        style={{ height: `${windowHeight - 202}px` }}
      >
        <div>
          <MarkdownRenderer md={editorValue} />
        </div>
      </div>
    </div>
  );
}
