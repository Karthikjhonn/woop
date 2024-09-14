import React from "react";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="font-poppins container mx-auto max-w-md">
      <Outlet />
    </div>
  );
}

export default RootLayout;
