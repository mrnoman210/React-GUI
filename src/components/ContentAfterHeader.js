import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import './contentrafter.css'
function ContentAfterHeader() {
  return (
    <>
      <h4 className="hay_iam"> HEY! I AM </h4> 
      <h1 className="Ronaldo_heading">Ronaldo Fredrickson</h1>
      <div className="Ronaldo_heading_after"><TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 900,
          fontSize: '2rem',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, i am here',
          'it am a web designer',
          'i am also photographer',
          ,
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      /></div>
    </>
  );
}

export default ContentAfterHeader;
