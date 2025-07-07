"use server";
import { signIn } from "@/lib/auth";
interface authSigninProps {
  provider?: string;
  formData?: { email: string; password: string };
}
const authSignIn = async ({ provider, formData }: authSigninProps) => {
  await signIn(provider, formData);
};

export { authSignIn };
