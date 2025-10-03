"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "@/components/auth/LoginForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent
          className={"p-0 w-auto bg-transparent border-none"}
          aria-describedby={undefined}
        >
          <VisuallyHidden>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span className={"cursor-pointer"} onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
