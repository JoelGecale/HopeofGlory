import React from "react";

function Ministries() {
  return (
    <div className="container page border-bottom mb-3">
      <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-md-7 my-auto">
          <h1 className="display-6 fst-italic">Be a Part of the Body of Christ</h1>
          <p className="lead my-3">
            "Christ chose some of us to be apostles, prophets, missionaries,
            pastors, and teachers, so that his people would learn to serve and
            his body would grow strong. This will continue until we are united
            by our faith and by our understanding of the Son of God. Then we
            will be mature, just as Christ is, and we will be completely like
            him."
          </p>
          <p className="lead mb-0 text-end me-5">Ephesians 4:11-13</p>
        </div>
        <div className="col-md-5">
          <img
            src="./ministries.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto object-fit-contain"
            alt="church family"
          ></img>
        </div>
      </div>

      <h2 className="py-3 mb-4 fst-italic border-bottom">Ministries</h2>
      <p>Put details here</p>
    </div>
  );
}

export default Ministries;
