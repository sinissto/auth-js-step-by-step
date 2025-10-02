"use client";

import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => logout();

  return (
    <div>
      {JSON.stringify(session)}

      <button type="submit" onClick={onClick}>
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
