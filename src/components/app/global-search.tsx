"use client";

import * as React from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

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

  // Update suggestions as you type (example logic)
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
          <Input type="text" placeholder="Search…" className="pr-16" readOnly />
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-muted text-xs text-muted-foreground rounded px-2 py-0.5 font-mono border"
            style={{ pointerEvents: "none" }}
          >
            ⌘ K
          </span>
        </div>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-background border-none shadow-2xl rounded-xl max-w-md w-full"
        style={{ outline: "none" }}
      >
        <DialogTitle className="hidden" />
        <div className="flex flex-col gap-0.5 px-4 py-3">
          <div className="flex items-center">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <Input
              autoFocus
              type="text"
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none shadow-none focus:ring-0 text-lg bg-transparent"
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false);
              }}
              style={{ boxShadow: "none" }}
            />
          </div>
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default GlobalSearch;
