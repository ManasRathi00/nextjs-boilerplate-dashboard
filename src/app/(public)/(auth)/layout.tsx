import AuthButton from "@/components/app/auth-button";
import { Aperture } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-screen flex">
      <div className="hidden md:inline-block relative flex-1 bg-secondary shrink-0">
        <div className="flex gap-1 items-center absolute top-4 left-4 text-xl">
          <Aperture className="" />
          ACME Inc
        </div>
      </div>
      {/* Public layout (e.g., header, footer) */}
      <div className="flex-1 bg-background flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4">
          <AuthButton />
        </div>
        <div className="w-full px-5 max-w-md mx-auto flex flex-col gap-4">
          {children}
          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              or continue with
            </span>
            <Separator className="flex-1" />
          </div>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            type="button"
            // TODO: Add onClick handler for Google OAuth
          >
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
