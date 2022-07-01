import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./header.css";
function Header() {
  return (
    <>
 <div class="header">
  <a href="#" class="logo">Ronaldo</a>
  <div class="header-right">
    <a href="#">Home</a>
    <a href="#">Contact</a>
    <a href="#">About</a>
    <a href="#">Resume</a>
    <a href="#">Services</a>
    <a href="#">Projects</a>
    <a href="#">My Blogs</a>
    <a href="#">Contacts</a>
  </div>
</div>

      {/* <div > */}

      {/* </div> */}

      {/* <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'black',
          fontWeight: 900,
          fontSize: '2em',
        }}
        startDelay={2000}
        cursorColor="red"
        multiText={[
          'I am Noman',
          'I am photographer',
          'I am Also web developer',
          'I am Also web graphic designer',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={20}
      /> */}
    </>
  );
}

export default Header;
