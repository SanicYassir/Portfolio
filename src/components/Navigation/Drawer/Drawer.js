import React from "react";
import styles from "./Drawer.module.css";
import { NavLink } from "react-router-dom";

const Drawer = (props) => {
  console.log(props);

  const classes = [styles.Drawer, props.open ? styles.ShowDrawer : ""].join(
    " "
  );
  console.log(classes);
  return (
    <div className={classes}>
      <div className={styles.Container} onClick={props.click}>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.Selected} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName={styles.Selected} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName={styles.Selected} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName={styles.Selected} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
