"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import { useCounterStore } from "@/providers/counter-store-provider";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const SignInForm = () => {
  const [state, action] = useFormState(signIn, undefined);
  const { count } = useCounterStore((state) => state);
  console.log("count:", count);

  return (
    <form action={action}>
      <div className="flex flex-col gap-2 w-64">
        {state?.message && (
          <p className="text-sm text-red-500">
            {state.message}
          </p>
        )}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            type="email"
          />
        </div>
        {state?.error?.email && (
          <p className="text-sm text-red-500">
            {state.error.email}
          </p>
        )}

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="text"
            name="password"
          />
        </div>
        {state?.error?.password && (
          <p className="text-sm text-red-500">
            {state.error.password}
          </p>
        )}
        <Link className="text-sm underline" href="#">
          Forgot your password?
        </Link>

        <SubmitButton>Sign In</SubmitButton>
        <div className="flex justify-between text-sm">
          <p> Don't have an account? </p>
          <Link
            className="text-sm underline"
            href="/auth/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
