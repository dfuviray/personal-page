import React from "react";
import logo from "../images/logo.svg";
import Socials from "./socials";
import Menu from "./menu";

const sidebar = () => {
  return (
    <div
      className="col s12 m4 l3 hide-on-small-only dark-orangeyellow fixed"
      id="sidebar"
    >
      <div className="center-align  mt-8 mb-4" id="logo">
        <img src={logo} />
      </div>
      <Socials />
      <Menu />
    </div>
  );
};

export default sidebar;
