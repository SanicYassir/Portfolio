import React, { useState } from "react";
import "./loading-start.css";
import Typewriter from "typewriter-effect";

const Loading = (props) => {
  const [show, setShow] = useState(true);
  const loadingwrapper = ["loadingwrapper", show === false ? "end" : null].join(
    " "
  );

  return (
    <div className="overlay">
      <div className={loadingwrapper}>
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(55)
                .typeString("Achamrar Yassir's Portfolio")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(200)
                .deleteAll()
                .callFunction(() => {
                  setShow(false);
                  setTimeout(() => {
                    props.end();
                  }, 1000);
                })
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
