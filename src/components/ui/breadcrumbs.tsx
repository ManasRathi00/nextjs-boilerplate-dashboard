"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface BreadcrumbProps {
  className?: string;
}

function Breadcrumbs({ className }: BreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((seg, i, arr) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1),
      href: "/" + arr.slice(0, i + 1).join("/"),
    }));

  return (
    <nav
      className={clsx(
        "flex items-center space-x-2 text-sm text-muted-foreground",
        className
      )}
    >
      {segments.map((seg, i) => (
        <React.Fragment key={seg.href}>
          <a href={seg.href} className="hover:underline">
            {seg.name}
          </a>
          {i < segments.length - 1 && <span>{">"}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
export default Breadcrumbs;
