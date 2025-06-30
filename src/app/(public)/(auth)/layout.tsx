import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Public layout (e.g., header, footer) */}
      {children}
    </div>
  );
}
