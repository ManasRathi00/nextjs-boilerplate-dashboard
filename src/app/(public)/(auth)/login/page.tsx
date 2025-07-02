import { Metadata } from "next";
import LoginForm from "@/components/app/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Example login page",
};

export default function LoginPage() {
  return (
    <main>
      <h1 className="text-2xl text-center font-semibold mb-4">Sign in</h1>
      <LoginForm />
    </main>
  );
}
