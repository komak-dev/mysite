"use client";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <Button
      className="hover:bg-white hover:text-black/70 h-8 w-8"
      variant="ghost"
      size="icon"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }}
    >
      {isCopied ? <Check /> : <Copy />}
    </Button>
  );
}
