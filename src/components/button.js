import React from "react";

const Button = ({ children, ...otherProps }) => {
  return <button className='custom-button'>{children}</button>;
};

export default Button;
