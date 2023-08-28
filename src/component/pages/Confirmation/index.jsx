import React from "react";
import { PageTemplate } from "../../templates/PageTemplate";

import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <PageTemplate>
      <div className=" flex mainWidth  flexDirection2  flexJustify2 ">
        <div className="confirmation">
          <h2>Submission Confirmation</h2>
          <p>Your details has been recorded!</p>

          <Link to="/">
            <button className=" btn2  ">Return home</button>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};
