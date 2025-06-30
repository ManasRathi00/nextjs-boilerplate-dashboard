"use client";

import React from "react";
import AppNavbar from "@/components/app/AppNavbar";
import { AppSidebar } from "@/components/app/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 flex-col gap-3">
        <AppNavbar />
        {children}
      </main>
    </>
  );
}
