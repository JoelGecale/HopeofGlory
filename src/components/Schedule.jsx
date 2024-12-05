import React from "react";
import HorizontalCard from "./HorizontalCard";

function Schedule() {
  return (
    <div className="container pt-5">
      <div className="d-flex gap-3">
        <HorizontalCard image="/sunday.jpg" title="Sunday Service" content="Let us come together for a time of worship, connection and inspiration. Discover a place where you belong and let’s grow together in faith and God’s love." time="Every Sunday at 9:00 AM"/>
        <HorizontalCard image="/prayer.jpg" title="Prayer Meeting" content="Join us for a powerful time of prayer as we seek God’s guidance and peace. Whether you’re carrying a heavy burden or celebrating a victory, let’s come together to lift our hearts in prayer." time="Every Wednesday at 6:30 PM"/>
        <HorizontalCard image="/kids.png" title="Kids Church" content="Bring your kids to an exciting, fun-filled adventure at Kids Church! They’ll enjoy engaging activities, uplifting music, and age-appropriate lessons about God’s love." time="Every Sunday at 10:00 AM"/>        
      </div>
    </div>
  );
}

export default Schedule;
