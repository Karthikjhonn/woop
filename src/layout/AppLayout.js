import React from "react";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AppLayout;
