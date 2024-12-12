import React from "react";
import {Link} from "react-router-dom";

function FeaturedVideo(props) {
    return(
        <Link
        className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
        to={"/featured/" + props.id}
      >
        <img src={"./" + props.thumbnail + ".jpg"} height="96" width="100%" className="bd-placeholder-img"></img>
        <div className="col-lg-8">
          <h6 className="mb-0">{props.title}</h6>
          <small className="text-body-secondary">
          {props.date}
          </small>
        </div>
      </Link>
    );
}

export default FeaturedVideo;