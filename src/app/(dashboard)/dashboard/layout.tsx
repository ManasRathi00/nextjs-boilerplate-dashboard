import React from "react";
import AppNavbar from "@/components/app/app-navbar";
import { AppSidebar } from "@/components/app/app-sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

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
