import React from "react";

const Showcase = ({ boxShadowValue }) => {

  const showcaseStyle = {
    width: "250px",
    height: "250px",
    border: "5px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    boxShadow: boxShadowValue,
    WebkitBoxShadow: boxShadowValue,
    MozBoxShadow: boxShadowValue,
  };

  return (
    <div style={showcaseStyle}>
    </div>
  );
};

export default Showcase;