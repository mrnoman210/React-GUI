import React from "react";
import {
  FaAirbnb,
  FaAccusoft,
  FaAlignCenter,
  FaAddressBook,
} from "react-icons/fa";
import AfterSubheagingComponent from "../components/AfterSubheadingComponent";

function Experience() {
  return (
    <>
      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Wordpress Developer"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAirbnb />
      </AfterSubheagingComponent>

      <AfterSubheagingComponent years={"2014-2015"} qualification={"Wordpress Developer"} universityName={"Cambridge University"} description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."}>
        <FaAccusoft />
      </AfterSubheagingComponent>

      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Web Designer"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAlignCenter />
      </AfterSubheagingComponent>

      <AfterSubheagingComponent
        years={"2014-2015"}
        qualification={"Software Developer"}
        universityName={"Cambridge University"}
        description={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAddressBook />
      </AfterSubheagingComponent>
    </>
  );
}

export default Experience;
