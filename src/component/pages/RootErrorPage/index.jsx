import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { PageTemplate } from "../../templates/PageTemplate";

export const RootErrorPage = () => {
  const error = useRouteError();

  return (
    <PageTemplate>
      <div className=" flex mainWidth  flexDirection2  flexJustify2 ">
        <div className="confirmation">
          <h2>An error occured while rendering your component</h2>

          <p>{error.statusText || error.message}</p>

          <Link to="/">
            <button className=" btn2  ">Return home</button>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};
