import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={classes.Backdrop}
      style={{ display: `${props.showBackdrop === true ? "" : "none"}` }}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
