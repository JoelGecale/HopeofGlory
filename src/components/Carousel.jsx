import React from "react";

function Carousel() {
  return (
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class=""
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="carousel-overlay carousel-item1"></div>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Come and join us!</h1>
              <p className="text-white">
                Welcome to our church! We would like to worship the Lord with you.
              </p>
              <p>
                <a class="btn btn-lg text-white" href="#">
                  Service Schedule
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="carousel-overlay carousel-item2"></div>
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p className="text-white">
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg text-white" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div className="carousel-overlay carousel-item3"></div>
          {/* <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p className="text-white">
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
