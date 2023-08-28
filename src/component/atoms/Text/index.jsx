import React from "react";

export const Text = (props) => {
  const { type, children, className } = props;
  if (type === "heading") {
    return <h1 style={{ fontSize: "23px", color: "white" }}>{children}</h1>;
  }

  if (type === "bigText") {
    return (
      <p style={{ fontSize: "17px", color: "white" }} className={className}>
        {children}
      </p>
    );
  }

  if (type === "blcolText") {
    return (
      <p
        style={{ fontSize: "15px", color: "black", fontWeight: "bold" }}
        className={className}
      >
        {children}
      </p>
    );
  }

  if (type === "wcolText") {
    return (
      <p
        style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
        className={className}
      >
        {children}
      </p>
    );
  }

  if (type === "colText") {
    return (
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          color: "rgba(82,96,113,255)",
        }}
        className={className}
      >
        {children}
      </p>
    );
  }

  //mobile
  if (type === "Mheading") {
    return <h1 style={{ fontSize: "20px", color: "white" }}>{children}</h1>;
  }

  if (type === "MbigText") {
    return (
      <p style={{ fontSize: "17px", color: "white" }} className={className}>
        {children}
      </p>
    );
  }

  if (type === "MblcolText") {
    return (
      <p
        style={{ fontSize: "7px", color: "black", fontWeight: "bold" }}
        className={className}
      >
        {children}
      </p>
    );
  }

  if (type === "MwcolText") {
    return (
      <p
        style={{ fontSize: "10px", color: "white", fontWeight: "bold" }}
        className={className}
      >
        {children}
      </p>
    );
  }

  if (type === "McolText") {
    return (
      <p
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          color: "rgba(82,96,113,255)",
        }}
        className={className}
      >
        {children}
      </p>
    );
  }

  if (type === "p") {
    return <h2 style={{ ...props }}>{children}</h2>;
  }

  return (
    <>
      <span style={{ ...props }}>{children}</span>
    </>
  );
};
