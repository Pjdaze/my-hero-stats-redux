import React from "react";

const buttonStyle = {
  margin: "10px 10px 10px 0",
  padding: "20px"
};

const Button = () => {
  return (
    <button className="btn btn-default" style={buttonStyle}>
      Show Results
    </button>
  );
};

export default Button;
