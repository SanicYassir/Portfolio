import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Hamburger from "../../Hamburger/Hamburger";
import Drawer from "../Drawer/Drawer.js";
const Nav = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.Desktop}>
        <Link to="/about">
          <div
            className={styles.Right}
            style={{ display: !props.about ? "none" : null }}
          >
            <span>About</span>
          </div>
        </Link>

        <Link to="/about">
          <div
            className={styles.AboutLeft}
            style={{ display: !props.aboutLeft ? "none" : null }}
          >
            <span>About</span>
          </div>
        </Link>

        <Link to="/home">
          <div
            className={styles.Right}
            style={{ display: !props.home ? "none" : null }}
          >
            <span>Home</span>
          </div>
        </Link>

        <Link to="/contact">
          <div
            className={styles.Left}
            style={{ display: !props.contact ? "none" : null }}
          >
            <span>Contact</span>
          </div>
        </Link>

        <Link to="/projects">
          <div
            className={styles.Bottom}
            style={{ display: !props.projects ? "none" : null }}
          >
            <span>Projects</span>
          </div>
        </Link>
      </div>

      <div className={styles.Mobile}>
        <Hamburger open={openDrawer} click={() => setOpenDrawer(!openDrawer)} />
        <Drawer open={openDrawer} click={() => setOpenDrawer(!openDrawer)} />
      </div>
    </React.Fragment>
  );
};

export default Nav;
