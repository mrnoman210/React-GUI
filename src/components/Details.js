import React from "react";
import { FaGoogle, FaMicrosoft, FaAndroid, FaJava } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import "./details.css";
function Details() {
  const app = "Name:";
  const app2 = "Date of Birth:";
  const app3 = "Address:";
  const app4 = "Zip Code:";
  const app5 = "Email:";
  const app6 = "Phone:";
  return (
    <>
      <div>
        <div className="image_space"></div>
        <div className="Details_50">
          <p className="details">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <br />
          <p className="detailsarea">
            {app}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Noman
              Ahmed
            </span>
          </p>
          <p className="detailsarea">
            {app2}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;19-06-2000
            </span>{" "}
          </p>
          <p className="detailsarea">
            {app3}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karachi,
              Pakistan
            </span>
          </p>
          <p className="detailsarea">
            {app4}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2052
            </span>
          </p>
          <p className="detailsarea">
            {app5}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;na2458443@gmail.com
            </span>
          </p>
          <p className="detailsarea">
            {app6}{" "}
            <span className="det">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0315-1085521
            </span>
          </p>
        </div>
      </div>
      <div className="iconsafter">
        <h1 className="display_inline">
          <FaMicrosoft />
          <span className="size">Microsoft</span>
        </h1>
        <h1 className="display_inline">Google</h1>
        <h1 className="display_inline">
          <FaAndroid />
          <span className="size">Android</span>
        </h1>
        <h1 className="display_inline">
          <FaJava />
          <span className="size">Java</span>
        </h1>
        <h1 className="display_inline">
          <SiAdobe />
          <span className="size">Adobe</span>
        </h1>
      </div>
    </>
  );
}

export default Details;
