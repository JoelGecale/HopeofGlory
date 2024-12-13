import React from "react";
import { Link, useLocation } from "react-router-dom";

function SmallCard(props) {
  const currentLocation = useLocation();

  return (
    <Link
      key={"link-" + props.type + "-" + props.id}
      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
      to={"/" + props.type + "/" + props.id}
      onClick={() => {
        {
          props.reloadOnClick ? props.onReload(props.id) : null;
        }
      }}
    >
      <img
        src={
          "./assets/thumbnail/" + props.type + "/" + props.thumbnail + ".jpg"
        }
        height="96"
        width="100%"
        className="bd-placeholder-img"
      ></img>
      <div className="col-lg-8">
        <h6 className="mb-0">{props.title}</h6>
        <small className="text-body-secondary">{props.date}</small>
      </div>
    </Link>
  );
}

export default SmallCard;
