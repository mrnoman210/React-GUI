import React from 'react'
import AfterSubheagingComponent from '../components/AfterSubheadingComponent'
import {
     FaApple,
     Fa500Px,
     FaAd,
     FaAirbnb,
     FaAccusoft,
     FaAlignCenter,
     FaAddressBook,
   } from "react-icons/fa";
function Education() {
  return (
<>
<AfterSubheagingComponent
          years={"2014-2015"}
          qualification={"Diploma in Computer"}
          universityName={"Cambridge University"}
          description={
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
        >
          <FaApple />
        </AfterSubheagingComponent>
        <AfterSubheagingComponent
          years={"2014-2015"}
          qualification={"Bachelor of Science in Computer Science"}
          universityName={"Cambridge University"}
          description={
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
        >
          <Fa500Px />
        </AfterSubheagingComponent>

        <AfterSubheagingComponent
          years={"2014-2015"}
          qualification={"Computer Processing Systems/Computer Software"}
          universityName={"Cambridge University"}
          description={
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          }
        >
          <FaAd />
        </AfterSubheagingComponent>
</>
  )
}

export default Education