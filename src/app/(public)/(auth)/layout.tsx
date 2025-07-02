import AuthButton from "@/components/app/auth-button";
import { Aperture } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import TestimonialCards from "@/components/app/testimonial-cards";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex flex-col flex-1 bg-muted shrink-0 relative overflow-hidden">
        {/* Logo & Company Name */}
        <div className="flex gap-2 items-center mt-6 ml-8 text-2xl font-semibold text-primary">
          <Aperture className="w-7 h-7" />
          <span>ACME Inc</span>
        </div>
        {/* Testimonial Cards Bottom */}
        <div className="flex-1 flex flex-col justify-end">
          <div className="mb-10 ml-8">
            <TestimonialCards />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 bg-background flex flex-col items-center justify-center relative">
        {/* Logo + AuthButton Top Right */}
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <AuthButton />
        </div>
        <div className="w-full px-5 max-w-md mx-auto flex flex-col gap-5 py-10">
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
