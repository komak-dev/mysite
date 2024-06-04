import { LinkCardItem } from "@/types/linkcard";
import Image from "next/image";
import Link from "next/link";

export function LinkCard({ linkCardItem }: { linkCardItem: LinkCardItem }) {
  return (
    <div className="w-full py-3">
      <Link href={linkCardItem.href}>
        <div className="border rounded-xl overflow-hidden flex hover:bg-muted items-center max-h-[126px]">
          <div className="flex-1 px-4">
            {linkCardItem.ogTitle && (
              <div className="text-xl font-bold pb-1">
                {linkCardItem.ogTitle}
              </div>
            )}
            <div className="flex items-center gap-1">
              {linkCardItem.favicon && (
                <div className="aspect-square">
                  <Image
                    src={linkCardItem.favicon}
                    width={20}
                    height={20}
                    alt="favicon"
                  />
                </div>
              )}
              <p className="text-base">{linkCardItem.siteHostName}</p>
            </div>
          </div>
          {linkCardItem.ogImage && (
            <div className="aspect-square sm:aspect-video h-[126px] relative">
              <Image
                className="absolute"
                src={linkCardItem.ogImage}
                alt="alt"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
