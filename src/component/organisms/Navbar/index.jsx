import React from "react";
import { Text } from "../../atoms";

export const Navbar = () => {
  return (
    <div className="flex  navbar alignAtems ">
      <div className=" Mtext">
        <Text type="Mheading"> Create New Task</Text>
        <Text type="McolText">
          {" "}
          Mikrorade Logogyn, Osenade nalig, i rer on.{" "}
        </Text>
      </div>
      <div className="flex orderSwitch ">
        <div className="flex  masorder">
          <Text type="MwcolText">Mass Order</Text>{" "}
        </div>
        <div className="flex siorder">
          {" "}
          <Text type="McolText">Single Order</Text>{" "}
        </div>
      </div>
    </div>
  );
};
