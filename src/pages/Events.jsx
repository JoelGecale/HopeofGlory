import React from "react";
import { Link } from "react-router-dom";
import FeaturedVideo from "../components/FeaturedVideo";
import EventCard from "../components/EventCard";
import { featured, events } from "../data";

function Events() {
  return (
    <div className="container page">
      <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-md-7 my-auto">
          <h1 className="display-6 fst-italic">This is the Lord's Day</h1>
          <p className="lead my-3">
            "This is the day the Lord has made; We will rejoice and be glad in
            it."
          </p>
          <p className="lead mb-0 text-end me-5">Psalms 118:24</p>
        </div>
        <div className="col-md-5">
          <img
            src="./calendar.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto object-fit-contain"
            alt="church family"
          ></img>
        </div>
      </div>

      <h2 className="py-3 mb-4 fst-italic border-bottom">News and Events</h2>
      <div className="row g-5">
        <div className="col-md-8">
          <div className="row mb-3 py-3 border-bottom">
            {events.map((event) => (
              <EventCard
                id={event.id}
                title={event.title}
                content={event.content}
                date={event.date}
                thumbnail={event.mediaID}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div>
              <h4 className="fst-italic">Featured videos</h4>
              <ul className="list-unstyled">
                {featured.map((video) => (
                  <li>
                    <FeaturedVideo
                      id={video.id}
                      thumbnail={video.mediaID}
                      title={video.title}
                      date={video.date}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
