import React from "react";
import logo from "../Assets/images/Frame 1618872969.png";
import dropdown from "../Assets/images/Vector.png";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="Products">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="sustainability">SUSTAINABILITY</NavLink>
          </li>
          <li>
            <NavLink to="News">NEWS & MEDIA</NavLink>
          </li>
          <li>
            <NavLink to="Careers">CAREERS</NavLink>
          </li>
          <li>
            <NavLink to="contact">MORE</NavLink>
            <img src={dropdown} alt="" srcset="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
