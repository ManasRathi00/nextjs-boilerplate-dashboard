import { Metadata } from "next";
import SignupForm from "@/components/app/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Example signup page",
};

export default function SignupPage() {
  return (
    <main>
      <h1 className="text-2xl text-center font-semibold mb-4">Sign up</h1>
      <SignupForm />
    </main>
  );
}
