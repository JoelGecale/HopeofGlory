import React from "react";
import { Link } from "react-router-dom";

function BigCard(props) {
  return (
    <div className="col-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-2 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h4 className="mb-0">{props.title}</h4>
          <div className="mb-1 text-body-secondary">{props.date}</div>
          <p className="card-text mt-2 mb-auto">{props.content}</p>
          <Link
            key={"link-events-" + props.id}
            to={"/events/" + props.id}
            className="icon-link gap-1 icon-link-hover stretched-link"
          >
            View event
            <svg className="bi">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            src={"./assets/thumbnail/events/" + props.thumbnail + ".jpg"}
            className="bd-placeholder-img"
            width="180"
            height="180"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
