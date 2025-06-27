"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";

export const RegisterForm = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const name = String(formData.get("name"));
    if (!name) return toast.error("Please enter your name");

    const email = String(formData.get("email"));
    if (!email) return toast.error("Please enter your email");

    const password = String(formData.get("password"));
    if (!password) return toast.error("Please enter your password");

    await signUp.email(
      {
        name, // user display name
        email, // user email id
        password, // min 8 but i modified to 6 in auth.ts file
        // image, // optional
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => {
          console.log(ctx.error.message);
          toast.error(ctx.error.message);
        },
        onSuccess: () => {},
      }
    );
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};
