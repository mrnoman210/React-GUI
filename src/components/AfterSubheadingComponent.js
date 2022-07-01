import React from "react";

import "./afterSubHeading.css";
function AfterSubheagingComponent({ children, years ,qualification ,universityName , description}) {
  return (
    <>

      <div className="AfterSubHEading">
        <div className="Childrenarea"><h1 className="colorchild">{children}</h1></div>
        <div className="righarea">
          <h3 className="years">{years}</h3>
          <h2 className="qualification">{qualification}</h2>
          <span className="universityName">{universityName}</span>
          <p className="description">{description}</p>
        </div>
      </div>
      <hr className="hraftercard"/>
    </>
  );
}

export default AfterSubheagingComponent;
