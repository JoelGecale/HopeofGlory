import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { featured, events } from "../data";
import FeaturedVideo from "../components/SmallCard";
import EventCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

function ViewMedia(props) {
  const { id } = useParams();
  const [media, setMedia] = useState({});

  useEffect(() => {
    loadMedia(id);
  }, []);

  function loadMedia(key) {
    if (props.type == "featured") {
      setMedia(featured[key]);
    } else {
      setMedia(events[key]);
    }
  }

  return (
    <div className="container">
      <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis pt-3">
        <div className="col-md-8">
          {media.type == "video" && (
            <iframe
              src={
                "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhgccofficial%2Fvideos%2F" +
                media.mediaID +
                "&show_text=false&&appId"
              }
              style={{ border: "none", overflow: "hidden" }}
              frameBorder="0"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>
          )}

          {media.type == "photo" && (
            <img
              src={"./assets/thumbnail/events/" + media.mediaID + ".jpg"}
              className="eventPhoto"
            ></img>
          )}
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
        <h4 className="fst-italic">
          Other {props.type == "featured" ? "videos" : "events"}
        </h4>
        <div className="row flex-nowrap overflow-auto border-bottom py-2">
          {props.type == "featured" &&
            (featured.filter((video) => video.id != id)).map((video) => (
              <div className="col-auto">
                <SmallCard
                  key={"featured-" + video.id}
                  id={video.id}
                  thumbnail={video.mediaID}
                  title={video.title}
                  date={video.date}
                  onReload={loadMedia}
                  reloadOnClick={true}
                  type="featured"
                />
              </div>
            ))}
          {props.type == "events" &&
            (events.filter((video) => video.id != id )).map((video) => (
              <div className="col-auto">
                <SmallCard
                  key={"events-" + video.id}
                  id={video.id}
                  thumbnail={video.mediaID}
                  title={video.title}
                  date={video.date}
                  onReload={loadMedia}
                  reloadOnClick={true}
                  type="events"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ViewMedia;
