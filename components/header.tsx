"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";
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

export default function Header() {
  return (
    <header className="h-16 border-b p-3 flex items-center">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="w-full p-0 m-0 flex flex-row items-center justify-between">
        <div>header</div>
        <ModeToggle />
      </div>
    </header>
  );
}
