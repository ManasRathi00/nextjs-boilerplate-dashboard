"use client";
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Breadcrumbs from "../ui/breadcrumbs";
import { ThemeToggle } from "../theme/theme-toggle";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import Image from "next/image";

const AppNavbar = () => {
  return (
    <section
      id="navbar"
      className="px-3 py-2 flex items-center justify-between"
    >
      {/* Left: Sidebar Trigger + Breadcrumbs */}
      <div className="flex items-center gap-x-4">
        <SidebarTrigger />
        <Breadcrumbs />
      </div>
      {/* Right: Search, Theme Toggle, Profile */}
      <div className="flex items-center gap-x-3">
        {/* Global Search Input */}
        <Input type="text" placeholder="Search..." className="w-48" />
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 rounded-full overflow-hidden border border-gray-300 w-9 h-9 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary">
              <Image
                width={0}
                height={0}
                src="/vercel.svg"
                alt="User"
                className="w-8 h-8 object-cover"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default AppNavbar;
