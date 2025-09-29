"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button
      variant={"link"}
      className={"w-full text-center font-normal"}
      asChild={true}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
