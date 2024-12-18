import React from "react";

function HorizontalCard(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "30vw" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.image}
            className="rounded-start img-fluid"
            alt="card image"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <p className="card-text">
              <small className="text-body-secondary">{props.time}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
