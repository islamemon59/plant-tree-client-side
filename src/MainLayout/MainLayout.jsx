import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-120px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <div data-aos="fade-up">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
