"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import { useTransition } from "react";

const SettingsPage = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({ name: "New Name" }).then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <Card className={"w-[600px]"}>
      <CardHeader>
        <p className={"text-2xl font-semibold text-center"}>⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick}>Update name</Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
