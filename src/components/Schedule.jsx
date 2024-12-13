import React from "react";
import HorizontalCard from "./HorizontalCard";
import { schedule } from "../data";

function Schedule() {
  return (
    <div className="container pt-5">
      <div className="d-flex gap-3 view">
        {schedule.map((sched) => <HorizontalCard key={sched.id} image={"./assets/images/" + sched.image} title={sched.title} content={sched.content} time={sched.time} />)}
      </div>
    </div>
  );
}

export default Schedule;
