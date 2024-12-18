import React from "react";

function Highlight() {
  return (
    <div className="container marketing my-2 view">
      <hr className="featurette-divider"></hr>

      <div className="row featurette py-3 block">
        <div className="col-md-7 my-auto">
          <h2 className="featurette-heading fw-normal lh-1">
            Belong, Grow, Thrive Together
          </h2>
          <p className="lead pt-2">
            Life is better when we walk it hand in hand, and there’s always a
            place for you here. Let’s build lasting relationships and thrive as
            a family united in God’s love.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="./assets/images/family.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="church family"
          ></img>
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette py-3 block">
        <div className="col-md-7 order-md-2 my-auto">
          <h2 className="featurette-heading fw-normal lh-1">
            Make a Difference, Be the Hands and Feet of Christ
          </h2>
          <p className="lead pt-2">
            Discover the joy and purpose of serving in the ministry! Whether
            you’re welcoming guests, leading worship, teaching kids, or helping
            behind the scenes, your unique gifts can impact lives for God’s
            glory.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="./assets/images/ministry.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="ministry"
          ></img>
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette py-3">
        <div className="col-md-7 my-auto">
          <h2 className="featurette-heading fw-normal lh-1">
            Be a Light, Share God’s Love
          </h2>
          <p className="lead pt-2">
            When we serve others, we become a living expression of Christ’s love
            and hope. Together, we can make a difference, transforming lives and
            communities for His glory.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="./assets/images/help.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="helping others"
          ></img>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
    </div>
  );
}
export default Highlight;
