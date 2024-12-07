import React from "react";

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=""
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className=""
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-overlay carousel-item1"></div>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Let us celebrate!</h1>
              <p className="text-white">
              Join us for a blessed Sunday at church! Let's come together in worship and fellowship. 
              </p>
              <p>
                <a className="btn btn-lg text-white" href="#">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay carousel-item2"></div>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Pista sa Nayon</h1>
              <p className="text-white">
              Happy 28th Anniversary, Hope of Glory Christian Church and Ministries! 
              </p>
              <p>
                <a className="btn btn-lg text-white" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-overlay carousel-item3"></div>
         <div className="container">
            <div className="carousel-caption text-end">
              <h1>Congratulations, Pastora!</h1>
              <p className="text-white">
                Congratulations, Rev. Cecilia F. Clarito, on the triumphant completion of your Doctor of Christian Education at Bangkok Apostolic Ministry (BAM) Academy!
              </p>
              {/* <p>
                <a class="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
