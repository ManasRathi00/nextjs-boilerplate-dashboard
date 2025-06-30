"use client";

import React from "react";
import Provider from "@/components/app/Provider";
import AppNavbar from "@/components/app/AppNavbar";
import { AppSidebar } from "@/components/app/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider>
        <AppSidebar />
        <main className="flex-1 flex-col gap-3">
          <AppNavbar />
          {children}
        </main>
      </Provider>
    </>
  );
}
