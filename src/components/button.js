import React from "react";

const Button = ({ children,isGooleSignIN, ...otherProps }) => {
  return <button className={`${isGooleSignIN ? "google-sigin" : ""} custom-button`} {...otherProps}>{children}</button>;
};

export default Button;
