import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
