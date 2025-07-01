"use client";
import React from "react";
import { ThemeProvider } from "../theme/theme-provider";
import { SidebarProvider } from "../ui/sidebar";
import { Toaster } from "sonner";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
