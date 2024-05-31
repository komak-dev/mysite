import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const isDevMode = process.env.NODE_ENV == "development";
  return (
    <header className="h-16 border-b p-3 flex items-center">
      <div className="md:hidden">
        <MobileNav isDevMode={isDevMode} />
      </div>
      <div className="w-full p-0 m-0 flex flex-row items-center justify-between">
        <div className="flex gap-4 items-center">
          <Button asChild variant="ghost">
            <Link href="/" className="pl-3 font-bold text-xl">
              Koma&apos;s web
            </Link>
          </Button>
          <div className="hidden md:flex">
            {NAVIGATION_TAGS.map((tag) => (
              <Button asChild variant="ghost" key={tag.id}>
                <Link href={tag.path}>{tag.label}</Link>
              </Button>
            ))}
            {isDevMode && (
              <Button asChild variant="ghost">
                <Link href="/admin">Admin</Link>
              </Button>
            )}
          </div>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

function MobileNav({ isDevMode }: { isDevMode: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col pt-6">
          {NAVIGATION_TAGS.map((tag) => (
            <SheetClose asChild key={tag.id}>
              <Button asChild variant="ghost">
                <Link href={tag.path}>{tag.label}</Link>
              </Button>
            </SheetClose>
          ))}
          {isDevMode && (
            <SheetClose asChild>
              <Button asChild variant="ghost">
                <Link href="/admin">Admin</Link>
              </Button>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

const NAVIGATION_TAGS: TAG[] = [
  {
    label: "About",
    path: "/about",
    id: "about",
  },
  {
    label: "Posts",
    path: "/posts",
    id: "posts",
  },
];

type TAG = {
  label: string;
  path: string;
  id: string;
};
