import React, { useState } from "react";
import styles from "./home.module.css";
import Birds from "../../components/Birds/birds";
import Nav from "../../components/Navigation/Nav/Nav";
import Sun from "../../components/Sun/Sun";
import Loading from "../../components/loading-start/loading-start";

const Home = () => {
  const [loadingEnd, setLoadingEnd] = useState(false);

  const [coord, setCoord] = useState({ x: "200", y: "100" });
  const [visibleText, setVisibleText] = useState(false);

  const updateSunPostion = (e) => {
    setCoord({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const showHiddenText = () => {
    if (visibleText === false) setVisibleText(true);
  };

  const hideText = () => {
    if (visibleText === true) setVisibleText(false);
  };
  return (
    <React.Fragment>
      {loadingEnd === false ? (
        <Loading end={() => setLoadingEnd(true)} />
      ) : null}
      <Nav contact about projects />
      <div onClick={(e) => updateSunPostion(e)} className={styles.container}>
        <Sun coord={coord} hide={hideText} show={showHiddenText} />
        <Birds />
        <h1>
          <span>Moroccan,</span>
          <span>Developer,</span>
          <span>Freelance</span> .
        </h1>
        <p
          className={styles.hiddenText}
          style={{ visibility: visibleText === false ? "hidden" : "visible" }}
        >
          Made with love 🖤
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
