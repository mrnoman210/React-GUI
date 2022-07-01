import React from "react";
import { FaAdversal } from "react-icons/fa";
import { SiCycling74, SiGraphql } from "react-icons/si";
import AfterSubheagingComponent from "../components/AfterSubheadingComponent";
import SubHeading from "../components/SubHeading";

function Awards() {
  return (
    <>
      <SubHeading title={"Awards"} />
      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Digital Marketing"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
          <FaAdversal/>
      </AfterSubheagingComponent>

      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Cyber Security"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
          <SiCycling74/>
      </AfterSubheagingComponent>

      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Graphics Designing"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
          <SiGraphql/>
      </AfterSubheagingComponent>
    </>
  );
}

export default Awards;
