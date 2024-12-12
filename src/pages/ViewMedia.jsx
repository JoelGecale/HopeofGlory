import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { featured, events } from "../data";

function ViewMedia(props) {
  const { id } = useParams();
  const [media, setMedia] = useState({});

  useEffect(() => {
    if (props.type == "featured") {
      setMedia(featured[id]);
    } else {
      setMedia(events[id]);
    }
  }, []);

  return (
    <div className="container">
      <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis pt-3">
        <div className="col-md-8">
          {media.type == "video" &&
          <iframe
            src={
              "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhgccofficial%2Fvideos%2F" +
              media.mediaID +
              "&show_text=false&&appId"
            }
            style={{ border: "none", overflow: "hidden" }}
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe> }

            {media.type == "photo" && <img src={"./" + media.mediaID + ".jpg"} className="eventPhoto"></img>}

        </div>
        <div className="col-md-4 bg-body-secondary rounded pt-3">
          <h3 className="fst-italic">{media.title}</h3>
          <p className="lead my-3">{media.content}</p>
          <p className="mb-0">
            <small>{media.date}</small>
          </p>
        </div>
      </div>

      <div className="row px-4 px-md-5 mb-4 mx-4 rounded text-body-emphasis py-3 bg-body-secondary">
      <h3 className="fst-italic">Other videos</h3>
      </div>
    </div>
  );
}

export default ViewMedia;
