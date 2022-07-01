import "./App.css";

// import { ProgressBar } from 'react-bootstrap'
// import {
//   FaApple,
//   Fa500Px,
//   FaAd,
//   FaAirbnb,
//   FaAccusoft,
//   FaAlignCenter,
//   FaAddressBook,
// } from "react-icons/fa";
import ContentAfterHeader from "./components/ContentAfterHeader";
import Header from "./components/Header";
import Writing from "./components/Writing";
import Details from "./components/Details";
import SubHeading from "./components/SubHeading";
// import AfterSubheadingComponent from "./components/AfterSubheadingComponent";
import Progress from "./Skills/Progress";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
// import Card from "./Skills/Card";
import Awards from "./Awards/Awards";
import Services from "./Services/Services";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container"></div>
        <ContentAfterHeader />
        <Writing namecomp="About Me" />
        <Details />
        <SubHeading title={"Education"} />
        <Education/>
        {/* Experience Area */}
        <SubHeading title={"Experience"} />
        <Experience />

        <SubHeading title={"Skills"} />
        <Progress/>
        <Awards/>
        <Services/>
      </div>
    </>
  );
}

export default App;
