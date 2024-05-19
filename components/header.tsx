"use client";

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
  return (
    <header className="h-16 border-b p-3 flex items-center">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="w-full p-0 m-0 flex flex-row items-center justify-between">
        <div className="flex gap-4 items-center">
          <Button asChild variant="ghost">
            <Link href="/" className="pl-3 font-bold text-xl">
              Koma's web
            </Link>
          </Button>
          <div className="hidden md:flex">
            {NAVIGATION_TAGS.map((tag) => (
              <Button asChild variant="ghost" key={tag.id}>
                <Link href={tag.path}>{tag.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

function MobileNav() {
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
            <Button asChild variant="ghost" key={tag.id}>
              <Link href={tag.path}>{tag.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>{" "}
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
