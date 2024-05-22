import { getAllTitleAndId } from "@/data/posts";
import { getRequestContext } from "@cloudflare/next-on-pages";
import Error from "next/error";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const results = await getAllTitleAndId();
  return Response.json({
    results,
  });
}
