import React from "react";
import "./Card.css";
function Card({ titleBody, percentage ,subper }) {
  return (
    <div className="progressArea">
      <h2 className="titleBody">{titleBody}</h2>

      {/* Progress Bar  */}
      <div class="circle-wrap">
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          <div class="inside-circle"> {percentage}% </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="percentage">
          <h4 className="HeadingPercentage">28%</h4>
          <p className="HeadingPercentagePTag">Last week</p>
        </div>
        <div>
          {" "}
          <h4 className="HeadingPercentage">{subper}%</h4>
          <p className="HeadingPercentagePTag">Last week</p>
        </div>
        {/* flex end div */}
      </div>
    </div>
  );
}

export default Card;
