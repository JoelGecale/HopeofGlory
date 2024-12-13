import React from "react";

function About() {
  return (
    <>
      <div className="container pt-3 page border-bottom mb-3">
        <div className="row px-4 px-md-5 mb-4 rounded text-body-emphasis bg-body-secondary mt-2 py-3">
          <div className="col-md-7 my-auto">
            <h1 className="display-6 fst-italic">
            Christ in You, the Hope of Glory
            </h1>
            <p className="lead my-3">
            "To them God has chosen to make known among the Gentiles the
              glorious riches of this mystery, which is Christ in you, the hope
              of glory."
            </p>
            <p className="lead mb-0 text-end me-5">Colossians 1:27</p>
          </div>
          <div className="col-md-5">
            <img
              src="./assets/images/service.jpg"
              className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
              alt="church family"
            ></img>
          </div>
        </div>

        <h2 className="py-3 mb-4 fst-italic border-bottom">About the Church</h2>

        <article className="blog-post py-3">
          <h3 className="pt-3">Background</h3>
          <p>
            Hope of Glory Christian Church (HGCC) is a church located in San
            Cristobal Calamba, Laguna Philippines. It was established on
            November 1996 by its founder, Rev. Ptr. Vincent Clarito.
          </p>
          <p>
            It was formed based on the greatest commandment (Matthew 22:37-40)
            and the great commission (Matthew 28:19-20).
          </p>
          <h3 className="pt-3">Mission</h3>
          <p>
            To grow and lead people into fully devoted spiritually mature
            followers of Christ. (Colossians 1:27-28)
          </p>

          <h3 className="pt-3">Vision</h3>
          <p>
            We become Christ-centered, Bible-believing community where the glory
            of the Lord is manifesting through excellent worship, service,
            fellowship, evangelism and discipleship.
          </p>

          <h3 className="pt-3">Values</h3>
          <p>The following are the qualities we embody:</p>
          <ul>
            <li>
              A Christ-centered church - Jesus ath the center (2 Corinthians
              5:17)
            </li>
            <li>
              Life rooted in the Scripture - We believe the bible is God's Word
              to us and our basis for understanding who God is (Matthew 4:4)
            </li>
            <li>Relationship formed in Community (John 13:35)</li>
            <li>
              MIssion - Church is created by God and empowered by the Holy
              Spirit for the benefit of the entire world including those not in
              the church (Micah 6:8)
            </li>
          </ul>

          <h3 className="pt-3">Core Values</h3>
          <p>
            The following are the core values that are followed by each church
            member:
          </p>
          <ul>
            <li>
              <strong>H</strong>onesty (Hands) - Proverbs 12:22
            </li>
            <li>
              <strong>O</strong>bedience (Head) - John 14:23
            </li>
            <li>
              <strong>P</strong>urity (Heart) - Matthew 5:8
            </li>
            <li>
              <strong>E</strong>xcellence in Service - Ecclesiastes 9:10
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default About;
