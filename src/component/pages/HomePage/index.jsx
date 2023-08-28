import React from "react";
import { Form, Navbar, ItemDet, ItemDes } from "../../organisms";
import { PageTemplate } from "../../templates/PageTemplate";

export const Homepage = () => {
  return (
    <PageTemplate>
      <Navbar className="navbar  " />
      <hr className="hr" />
      <div className=" flex mainWidth  flexDirection2  flexJustify2 ">
        <div className=" formWidth flexDirection flexJustify ">
          <Form className="Form " />
        </div>

        <div className="flex itemsWidth   gnavbar flexDirection    ">
          <div className="itemDetcov  ">
            <ItemDet className="itemDet  " />
          </div>

          <div className="itemDescov ">
            <ItemDes className=" itemDes" />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
