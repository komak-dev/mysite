import { LinkCardItem } from "@/types/linkcard";
import { JSDOM } from "jsdom";

export async function getLinkCardItem(url: string) {
  const res = await fetch(url);
  const html = await res.text();
  const jsdom = new JSDOM();
  const domParser = new jsdom.window.DOMParser();
  const dom = domParser.parseFromString(html, "text/html");
  const ogp = Object.fromEntries(
    Array.from(dom.head.children)
      .filter(
        (element) =>
          element.tagName === "META" &&
          element.getAttribute("property")?.startsWith("og:"),
      )
      .map((element) => {
        return [
          element.getAttribute("property"),
          element.getAttribute("content"),
        ];
      }),
  );
  const linkCardItem: LinkCardItem = {
    ogImage: ogp["og:image"],
    ogTitle: ogp["og:title"],
    siteHostName: new URL(url).hostname,
    favicon: `http://www.google.com/s2/favicons?domain=${url}`,
    href: url,
  };
  return linkCardItem;
}
