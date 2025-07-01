"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  // Cmd+K (Mac) or Ctrl+K (Windows/Linux) to open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Example: update suggestions as you type (replace with real logic)
  React.useEffect(() => {
    if (query.length === 0) {
      setSuggestions([]);
    } else {
      setSuggestions([
        `Suggestion for "${query}" 1`,
        `Suggestion for "${query}" 2`,
        `Suggestion for "${query}" 3`,
      ]);
    }
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative w-52 hidden sm:inline-block">
          <Input
            type="text"
            placeholder="Search..."
            className="pr-16"
            readOnly
          />
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-muted text-xs text-muted-foreground rounded px-2 py-0.5 font-mono border"
            style={{ pointerEvents: "none" }}
          >
            ⌘ K
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Global Search</DialogTitle>
        <DialogClose
          asChild
          className="absolute right-4 top-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
        ></DialogClose>
        <Input
          autoFocus
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        />
        <div className="mt-2">
          {suggestions.length > 0 ? (
            <ul className="bg-muted rounded-md p-2">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="px-2 py-1 hover:bg-accent rounded cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-muted-foreground text-sm text-center">
              No suggestions
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GlobalSearch;
