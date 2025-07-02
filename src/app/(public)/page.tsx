import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-background px-4">
      <h1 className="text-4xl font-extrabold text-primary text-center mb-4">
        The greatest landing page of all time
      </h1>
      <p className="text-muted-foreground text-center mb-8 max-w-lg">
        Welcome to your new favorite dashboard. Explore our prebuilt templates
        and get started in seconds!
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Button asChild className="w-full" variant="default">
          <Link href="/dashboard">🚀 Go to Dashboard</Link>
        </Button>
        <Button asChild className="w-full" variant="secondary">
          <Link href="/signup">✨ Sign Up (it’s magic!)</Link>
        </Button>
        <Button asChild className="w-full" variant="outline">
          <Link href="/login">🔑 Log In</Link>
        </Button>
      </div>
      <div className="text-xs text-muted-foreground text-center mt-6">
        Peek at our templates:&nbsp;
        <Link href="/dashboard" className="underline">
          Dashboard
        </Link>
        ,&nbsp;
        <Link href="/signup" className="underline">
          Signup
        </Link>
        ,&nbsp;
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </main>
  );
}
