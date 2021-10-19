import React from "react";

const Card = (props) => {
  return (
    <div className="col s4" style={{ height: "350px" }}>
      <div className="card" style={{ height: "100%", boxShadow: "none" }}>
        <div
          className="card-image "
          style={{
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={props.image} style={{ background: "container" }} />
        </div>

        <div className="card-content" style={{ height: "50%", width: "100%" }}>
          <span className="card-title">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
