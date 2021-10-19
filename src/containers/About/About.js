import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import styles from "./About.module.css";
import Nav from "../../components/Navigation/Nav/Nav";
import Card from "../../ui/card/card";

import Carousel from "react-elastic-carousel";

let list = [
  {
    image: "../../assets/technologies/expressjs.png",
    title: "Express js",
  },
  {
    image: "../../assets/technologies/git.png",
    title: "Git",
  },
  {
    image: "../../assets/technologies/javascript.png",
    title: "Javascript",
  },
  {
    image: "../../assets/technologies/mongodb.jpg",
    title: "MongoDb",
  },

  {
    image: "../../assets/technologies/net.png",
    title: ".Net framework",
  },
  {
    image: "../../assets/technologies/nodejs.png",
    title: "Node js",
  },
  {
    image: "../../assets/technologies/react.png",
    title: "React js",
  },
  {
    image: "../../assets/technologies/sql.png",
    title: "SQL server",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
];

const About = () => {
  const tilteRef = useRef();
  const paragraphRef = useRef();
  const carouselRef = useRef();

  const [el, setEl] = useState(0);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const images = importAll(
    require.context("../../assets/technologies", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    gsap.fromTo(
      tilteRef.current,
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        opacity: 1,
        y: -50,

        ease: Power3.easeOut,
      }
    );

    gsap.fromTo(
      carouselRef.current,
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        opacity: 1,

        ease: Power3.easeOut,
      }
    );

    gsap.to(paragraphRef.current, {
      delay: 1,
      opacity: 1,
      y: 10,
      ease: Power3.easeOut,
    });
  }, [el]);

  useEffect(() => {
    list = list.map((e, index) => {
      return {
        ...e,
        image: images[index].default,
      };
    });
  }, []);

  const onChangeSectionHandler = (el) => {
    setEl(el);
    console.log(el);
  };

  return (
    <React.Fragment>
      <Nav home contact projects />
      <div className={styles.container}>
        <div className={styles.Left}>
          {el === 0 ? (
            <React.Fragment>
              <h1 ref={tilteRef} className={styles.Title}>
                About Me
              </h1>
              <p ref={paragraphRef}>
                My name is Achamrar Yassir, and i am a recent computer systems
                and software engineering graduate from School of Technology
                Essaouira. I am passionate about the IT world and i am endowed
                with a great curiosity that inspires me to become an autonomous
                person. I have carried out numerous programs and projects which
                have had as objectives to solve problems or to automate
                repetitive tasks in an information system.
              </p>
            </React.Fragment>
          ) : null}

          {el === 1 ? (
            <React.Fragment>
              <div className={styles.carouselwrapper}>
                <h1 ref={tilteRef} className={styles.Title}>
                  Skills
                </h1>

                <Carousel breakPoints={breakPoints}>
                  {list.map((item, index) => (
                    <Card
                      ref={carouselRef}
                      key={index}
                      title={item.title}
                      image={item.image}
                    ></Card>
                  ))}
                </Carousel>
              </div>
            </React.Fragment>
          ) : null}
        </div>
        <div className={styles.Right}>
          <ul>
            <li
              onClick={() => onChangeSectionHandler(0)}
              className={el === 0 ? styles.selected : ""}
            >
              Introduction
            </li>

            <li
              onClick={() => onChangeSectionHandler(1)}
              className={el === 1 ? styles.selected : ""}
            >
              Skills
            </li>

            <li
              onClick={() => onChangeSectionHandler(2)}
              className={el === 2 ? styles.selected : ""}
            >
              Languages
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
