import React from "react";

const Button = ({ name, handleBtn }) => {
  return <button onClick={handleBtn}>{name}</button>;
};

export default Button;
