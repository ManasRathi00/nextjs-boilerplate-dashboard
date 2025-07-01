"use client";
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Breadcrumbs from "../ui/breadcrumbs";
import { ThemeToggle } from "../theme/theme-toggle";
// import { Input } from "../ui/input";
import GlobalSearch from "./global-search";
import { UserNav } from "./dashboard/user-nav";

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
        <GlobalSearch />
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* User Profile Dropdown */}
        <UserNav />
      </div>
    </section>
  );
};

export default AppNavbar;
