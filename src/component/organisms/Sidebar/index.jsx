import React from "react";
import { IconListItem } from "../../molecules";
import logo from "../../atoms/Images/logo-white.png";

export const Sidebar = ({alt}) => {
  return (
    <div className=" flex height  flexDirection  flexJustify">
      <div>
        {/* <IconListItem  type="logo"/> */}
        <div className="logo">
          {" "}
          <img width="150px" src={logo} alt={alt}></img>
        </div>
        <hr className="hrs" />
        <IconListItem  type="profile" />
        <IconListItem type="Walletdisplay" />
        <IconListItem type="services" />

        <IconListItem type="history" />
        <IconListItem type="panels" />
        <IconListItem type="affilates" />
        <IconListItem type="api" />
        <IconListItem type="btn" />
      </div>

      <div>
        <IconListItem type="settings" />
        <IconListItem type="help" />
      </div>
    </div>
  );
};
