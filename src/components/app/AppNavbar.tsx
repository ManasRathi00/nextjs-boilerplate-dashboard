"use client";
import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Breadcrumbs from "../ui/breadcrumbs";
import { ThemeToggle } from "../theme/theme-toggle";

const AppNavbar = () => {
  return (
    <section
      id="navbar"
      className="px-3 py-2 flex items-center justify-between"
    >
      <div className="flex divide-x divide-gray-300">
        <SidebarTrigger className="pr-3" />
        <Breadcrumbs className="pl-3" />
      </div>
      <ThemeToggle />
    </section>
  );
};

export default AppNavbar;
