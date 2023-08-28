import React from "react";
import { useState } from "react";
import { Icons, Text } from "../../atoms";

export const IconListItem = (props) => {
  const [open, setOPen] = useState(false);

  const handleOpen = () => {
    setOPen(!open);
  };

  const { type } = props;

  if (type === "logo") {
    return (
      <div className="flex iconTxtMArgin  ">
        <h6>logo</h6>
        <Text type="heading" className="IcontextMArgin">
          LOGO
        </Text>
      </div>
    );
  }

  if (type === "profile") {
    return (
      <div className="flex resize  profile alignListItems flexJustify ">
        <div className="flex   alignListItems ">
          <Icons name="blank" />
          <Text type="wcolText" className="profilemarginleft">
            {" "}
            d1gitalblink
          </Text>
        </div>
        <div>
          <Icons name="more" />
        </div>
      </div>
    );
  }

  if (type === "btn") {
    return (
      <div className="flex green buttonbg alignListItems flexJustify2 ">
        <Icons name="add" />
        <Text type="blcolText"> Create Tew Task</Text>
      </div>
    );
  }

  if (type === "Walletdisplay") {
    return (
      <div className="flex resize alignListItems walletdisplay flexJustify ">
        <div>
          <Text type="colText"> Wallet</Text>
          <Text type="bigText">$1418.67</Text>
        </div>
        <div>
          <Icons name="wallet" className="walleticonbg " />
        </div>
      </div>
    );
  }

  if (type === "services") {
    return (
      <div className="flex  iconTxtMArgin  ">
        <Icons name="services" />
        <Text type="colText" className="IcontextMArgin ">
          Services
        </Text>
      </div>
    );
  }

  if (type === "history") {
    return (
      <div>
        <div
          onClick={handleOpen}
          className="flex iconTxtMArgin walletdisplay  "
        >
          <Icons name="history" />
          <Text type="wcolText" className="IcontextMArgin">
            Order History
          </Text>
        </div>

        {open ? (
          <div className="drop">
            <Text type="colText" className="  dropin">
              Subscription
            </Text>
            <Text type="colText" className=" dropin ">
              Drip-feed
            </Text>
            <Text type="colText" className=" dropin ">
              Refill
            </Text>
          </div>
        ) : null}
      </div>
    );
  }

  if (type === "panels") {
    return (
      <div className="flex iconTxtMArgin  ">
        <Icons name="panels" />
        <Text type="colText" className="IcontextMArgin">
          Child Panels
        </Text>
      </div>
    );
  }

  if (type === "affilates") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="history" className=" " />
        <Text type="colText" className="IcontextMArgin ">
          Affiliates
        </Text>
      </div>
    );
  }

  if (type === "api") {
    return (
      <div className="flex  iconTxtMArgin  ">
        <Icons name="api" />
        <Text type="colText" className="IcontextMArgin">
          API
        </Text>
      </div>
    );
  }

  if (type === "add") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="add" />
        <Text type="colText" className="IcontextMArgin">
          Orders
        </Text>
      </div>
    );
  }

  if (type === "tick") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="tick" />
        <Text type="colText" className="IcontextMArgin">
          Wallets
        </Text>
      </div>
    );
  }

  if (type === "settings") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="settings" />
        <Text type="colText" className="IcontextMArgin">
          Settings
        </Text>
      </div>
    );
  }

  if (type === "more") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="more" />
        <Text type="colText" className="IcontextMArgin">
          Virtual Account
        </Text>
      </div>
    );
  }

  if (type === "help") {
    return (
      <div className="flex iconTxtMArgin ">
        <Icons name="help" />
        <Text type="colText" className="IcontextMArgin">
          Help
        </Text>
      </div>
    );
  }

  if (type === "telegram") {
    return (
      <div>
        <div
          onClick={handleOpen}
          className="flex iconTxtMArgin flexJustify alignListItems bge  "
        >
          <div className="flex alignListItems  ">
            {" "}
            <Icons name="ticon" />
            <Text type="wcolText" className="IcontextMArgin alignListItems">
              Telegram
            </Text>{" "}
          </div>
          <div>
            {" "}
            <Icons name="dropdown" />
          </div>
        </div>

        {open ? (
          <div className="dropdown">
            <Text type="colText" className="  dropin">
              Facebook
            </Text>
            <Text type="colText" className=" dropin ">
              Instagram
            </Text>
            <Text type="colText" className=" dropin ">
              Twitter
            </Text>
          </div>
        ) : null}
      </div>
    );
  }

  if (type === "telegramr") {
    return (
      <div>
        <div
          onClick={handleOpen}
          className="flex iconTxtMArgin flexJustify alignListItems bge  "
        >
          <div className="flex alignListItems  ">
            {" "}
            <Icons name="ticon" />
            <Text type="wcolText" className="IcontextMArgin alignListItems">
              Telegram Reaction
            </Text>{" "}
          </div>
          <div>
            {" "}
            <Icons name="dropdown" />
          </div>
        </div>

        {open ? (
          <div className="dropdown">
            <Text type="colText" className="  dropin">
              Telegram Subscribers
            </Text>
            <Text type="colText" className=" dropin ">
              Telegram Bots
            </Text>
            <Text type="colText" className=" dropin ">
              Telegram{" "}
            </Text>
          </div>
        ) : null}
      </div>
    );
  }

  if (type === "telegramm") {
    return (
      <div>
        <div
          onClick={handleOpen}
          className="flex iconTxtMArgin flexJustify alignListItems bge  "
        >
          <div className="flex alignListItems  ">
            {" "}
            <Icons name="ticon" />
            <Text type="wcolText" className="IcontextMArgin alignListItems">
              4820 - Telegram Mix POsitive Reaction
            </Text>{" "}
          </div>
          <div>
            {" "}
            <Icons name="dropdown" />
          </div>
        </div>

        {open ? (
          <div className="dropdown">
            <Text type="colText" className="  dropin">
              4820 - Telegram Mix POsitive Reaction
            </Text>
            <Text type="colText" className=" dropin ">
              4820 - Telegram Mix POsitive Reaction-feed
            </Text>
            <Text type="colText" className=" dropin ">
              4820 - Telegram Mix POsitive Reaction
            </Text>
          </div>
        ) : null}
      </div>
    );
  }

  if (type === "submit") {
    return (
      <div className="flex iconTxtMArgin green flexJustify2  {...props}">
        <Text type="blcolText"> Submit Order </Text>
      </div>
    );
  }

  return <div>check iconlist</div>;
};
