import React from "react";

function SubHeading({ title }) {
  return (
    <>
      <h1
        style={{
          marginLeft: "30%",
          marginTop: "10rem",
          fontWeight: "800",
          fontSize: "30px",
          marginBottom: "30px",
          color: "#3e64ff",
          marginBottom: "2rem"
        }}
      >
        {title}
      </h1>
    </>
  );
}

export default SubHeading;
