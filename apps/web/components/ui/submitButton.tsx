"use client";
import React, { PropsWithChildren } from "react";
import { Button } from "../../public/button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="w-full mt-2"
    >
      {pending ? "Submitting..." : children}
    </Button>
  );
};

export default SubmitButton;
