"use server";
import fs from "fs";
import path from "path";

export async function createDir() {
  const id = Date.now().toString();
  const newDirPath = path.join(process.cwd(), "contents", id);
  fs.mkdirSync(newDirPath);
  const newMdPath = path.join(newDirPath, "index.md");
  fs.writeFileSync(newMdPath, TEMPLATE_MD);
  const newImageDirPath = path.join(process.cwd(), "public", "posts", id);
  fs.mkdirSync(newImageDirPath);
}

const TEMPLATE_MD = `---
title: sample_title
tags: []
---
`
