"use client";
import React from "react";
import { ThemeProvider } from "../theme/theme-provider";
import { SidebarProvider } from "../ui/sidebar";

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
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;
