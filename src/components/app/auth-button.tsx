"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  className?: string;
}

const AuthButton = ({ className }: AuthButtonProps) => {
  const pathName = usePathname();

  const isSignup = pathName === "/signup";
  const isLogin = pathName === "/login";

  let text = "";
  if (isSignup) {
    text = "Already have an account? Sign in";
  } else if (isLogin) {
    text = "Don't have an account? Sign up";
  } else {
    text = isSignup ? "Sign in" : "Sign up";
  }

  const targetPage = isSignup ? "/login" : "/signup";

  return (
    <Button asChild variant="link" className={className}>
      <Link href={targetPage}>{text}</Link>
    </Button>
  );
};

export default AuthButton;
