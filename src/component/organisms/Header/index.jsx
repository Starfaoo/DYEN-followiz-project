import React, { useState } from "react";
import { Sidebar } from "../Sidebar";
import logo from "../../atoms/Images/logo-white.png";
import { Icons } from "../../atoms";

export const Header = ( {alt}) => {
  const [open, setOPen] = useState(false);

  const handleOpen = () => {
    setOPen(!open);
  };

  return (
    <div>
      {open ? (
        <div className=" msidebar msidebarWidth  msidebarBackCol ">
          <Sidebar />
        </div>
      ) : null}

      <div className="mobnav flex ">
        <div>
          {" "}
          <img className="logo" alt={alt} width="80px" src={logo}></img>
        </div>
        <div>
          {" "}
          <Icons name="panels" onClick={handleOpen} />{" "}
        </div>
      </div>
    </div>
  );
};
