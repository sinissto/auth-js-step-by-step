import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        background: "radial-gradient(ellipse at top, #38bdf8, #1e3a8a)",
      }}
      className="h-full flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
