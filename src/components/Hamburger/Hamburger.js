import React from "react";
import "./Hamburger.css";
const Hamburger = (props) => {
  return (
    <div
      onClick={props.click}
      className={`s-hamburger ${props.open ? "s-open" : "s-close"} `}
    >
      <div className={props.open ? "s-first" : ""}></div>
      <div className={props.open ? "s-sec" : ""}></div>
      <div className={props.open ? "s-third" : ""}></div>
    </div>
  );
};

export default Hamburger;
