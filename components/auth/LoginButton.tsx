"use client";

import React from "react";

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
  const onClick = () => {
    console.log(`Login button clicked `);
  };

  return (
    <span className={"cursor-pointer"} onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
