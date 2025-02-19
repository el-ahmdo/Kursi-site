import React from "react";
import "./Layout.css";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout">
      <h2>PRODUCTS</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
