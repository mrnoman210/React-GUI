import React from "react";
import { FaAcquisitionsIncorporated, FaAlignJustify, FaAngry } from "react-icons/fa";
import Writing from "../components/Writing";
import SubCard from "./SubCard";
import "./SubCardCSS.css"

export default function Services() {
  return (
    <>
      <Writing namecomp={"Services"} />
      <p
        style={{
          color: "#999",
          textAlign: "center",
          marginBottom: "4rem",
          fontSize: "17px",
        }}
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div style={{display:"flex"}}>
      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAcquisitionsIncorporated />
      </SubCard>

      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAngry />
      </SubCard>

      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAlignJustify />
      </SubCard>

      
      </div>

      <div style={{display:"flex"}}>
      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAcquisitionsIncorporated />
      </SubCard>

      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAngry />
      </SubCard>

      <SubCard
        subcardHeading={"Web Designing"}
        Details={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
        }
      >
        <FaAlignJustify />
      </SubCard>

      
      </div>
    </>
  );
}
