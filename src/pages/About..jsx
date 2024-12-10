import React from "react";

function About() {
  return (
    <>
    {/* <div className="container-fluid p-0 m-0"><img className="w-100" height="400vh" src="banner.jpg"></img></div> */}
    <div className="container pt-3">    

    <div className="row featurette px-4 px-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-md-7 my-auto">
        <h1 class="display-4 fst-italic">
            Christ in You, the Hope of Glory
          </h1>
          <p class="lead my-3">
          To them God has chosen to make known among the Gentiles the glorious riches of this mystery, which is Christ in you, the hope of glory. 
          </p>
          <p class="lead mb-0 text-end me-5">
              Colossians 1:27
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="./service.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto object-fit-contain"
            alt="church family"
          ></img>
        </div>
      </div>

      <article className="blog-post py-3">
        <h2 className="display-5 link-body-emphasis mb-1 pb-2">About the Church</h2>
        <p>Hope of Glory Christian Church (HGCC) is a church located in San Cristobal Calamba, Laguna Philippines. It was established on November 1996 by its founder, Rev. Ptr. Vincent Clarito.</p>
        <p>It was formed based on the greatest commandment (Matthew 22:37-40) and the great commission (Matthew 28:19-20).</p>
        <hr></hr>
        <h2 className="pt-3">Mission</h2>
        <p>To grow and lead people into fully devoted spiritually mature followers of Christ. (Colossians 1:27-28)</p>

        <h2 className="pt-3">Vision</h2>
        <p>We become Christ-centered, Bible-believing community where the glory of the Lord is manifesting through excellent worship, service, fellowship, evangelism and discipleship.</p>

        <h2 className="pt-3">Values</h2>
        <p>The following are the qualities we embody:</p>
        <ul>
          <li>A Christ-centered church - Jesus ath the center (2 Corinthians 5:17)</li>
          <li>Life rooted in the Scripture - We believe the bible is God's Word to us and our basis for understanding who God is (Matthew 4:4)</li>
          <li>Relationship formed in Community (John 13:35)</li>
          <li>MIssion - Church is created by God and empowered by the Holy Spirit for the benefit of the entire world including those not in the church (Micah 6:8)</li>
        </ul>

        <h2 className="pt-3">Core Values</h2>
        <p>The following are the core values that are followed by each church member:</p>
        <ul>
          <li><strong>H</strong>onesty (Hands) - Proverbs 12:22</li>
          <li><strong>O</strong>bedience (Head) - John 14:23</li>
          <li><strong>P</strong>urity (Heart) - Matthew 5:8</li>
          <li><strong>E</strong>xcellence in Service - Ecclesiastes 9:10</li>
        </ul>

      </article>
    </div>
    </>
  );
}

export default About;
