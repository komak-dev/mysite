"use clint";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEventHandler } from "react";

export function SearchBar({
  onChange,
  onBlur,
}: {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}) {
  return (
    <div className="py-6">
      <div className="relative w-full">
        <Input
          className="pl-10 text-md"
          autoFocus
          onChange={onChange}
          onBlur={onBlur}
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={20}
        />
      </div>
    </div>
  );
}

export function SearchBarDummy() {
  return (
    <div className="py-6">
      <div className="relative w-full">
        <Input className="pl-10 text-md" readOnly />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          size={20}
        />
      </div>
    </div>
  );
}
