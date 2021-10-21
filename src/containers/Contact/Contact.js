import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./Contact.css";
import axios from "axios";
import Nav from "../../components/Navigation/Nav/Nav";
import Backdrop from "../../ui/Backdrop/Backdrop";
import Typewriter from "typewriter-effect";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [MSG, setMSG] = useState("");

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target)
      .map((e) => e.className)
      .splice(0, 4);

    let valid = true;
    inputs.forEach((el) => {
      if (!/valid$/.test(el)) {
        valid = false;
        return;
      }
    });
    if (valid === true) {
      const Model = {
        firstName,
        lastName,
        email,
        message,
      };
      axios
        .post("/api/v1/messages", Model)
        .then(function (response) {
          setMSG("Message was sent successfully !");
          console.log(response);
          setShowBackdrop(true);

          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        })
        .catch(function (error) {
          setMSG("Something went wrong !");
          console.log(error);
          setShowBackdrop(true);
        });
      console.log(Model);
    }
  };

  return (
    <React.Fragment>
      <Nav home projects aboutLeft />
      <Backdrop showBackdrop={showBackdrop}>
        {showBackdrop === true ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(55)
                .typeString(MSG)
                .pauseFor(400)
                .deleteAll()
                .callFunction(() => {
                  setShowBackdrop(false);
                })
                .start();
            }}
          />
        ) : null}
      </Backdrop>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="Title">Contact</h1>
        <div className="row" style={{ padding: "2rem" }}>
          <form className="col s12 validate" onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  value={firstName}
                  onInput={(e) => setFirstName(e.target.value)}
                  className="validate"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  value={lastName}
                  className="validate"
                  onInput={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  value={email}
                  className="validate"
                  onInput={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="message"
                  className="materialize-textarea validate"
                  value={message}
                  onInput={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  className="right btn waves-effect waves-light #212121 grey darken-4
              "
                  type="submit"
                  name="action"
                >
                  Send
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
