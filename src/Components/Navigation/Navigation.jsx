import React from "react";
import logo from "../Assets/images/Frame 1618872969.png";
import dropdown from "../Assets/images/Vector.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Products"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sustainability"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              SUSTAINABILITY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="News"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              NEWS & MEDIA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Careers"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              MORE
              <img className="drop" src={dropdown} alt="" srcSet="" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
