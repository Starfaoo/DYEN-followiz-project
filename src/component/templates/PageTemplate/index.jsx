import React from "react";
import { Header, Sidebar, Footer } from "../../organisms";

export const PageTemplate = ({ children }) => {
  return (
    <div className="flex  HomepageWidth fadeblack homepageHeight">
      <div className=" resize sidebarWidth  sidebarBackCol ">
        <Sidebar />
      </div>

      <div className="flex flexDirection flexJustify2 oppSideBarwidth   ">
        <div className=" navbarwidth ">
          <Header />

          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};
