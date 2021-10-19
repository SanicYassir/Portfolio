import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./Contact.css";

import Nav from "../../components/Navigation/Nav/Nav";
import Loading from "../../components/loading-start/loading-start";

const Contact = () => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <React.Fragment>
      <Nav home projects aboutLeft />
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
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="message"
                  className="materialize-textarea"
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
                  Submit
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
