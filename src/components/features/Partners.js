import React from "react";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

import logoIEEE1 from "images/grss-logo.png";
import logoIEEE2 from "images/MTT-S_Blue_Horizontal.png";
import logoIEEE3 from "images/aess.png";
import logoIEEE4 from "images/IEEE APS Logo.png";
import logoIEEE5 from "images/IEEE AP-S YP Logo.jpg";
import logoIEEE6 from "images/R8_SAC.png";
import logoIEEE7 from "images/IEEE R8.svg";







const Container = tw.div`relative`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

export default ({
  subheading = (
    <>
      <center>
        <span tw="text-blue-700">Event Partners</span>
      </center>
    </>
  ),
  heading = (
    <>
      <span>IEEE Partners</span>
    </>
  ),
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <Subheading>{subheading}</Subheading>

      <Heading>
        <center>{heading}</center>
      </Heading>
      <br></br>
      <br></br>
      <br></br>


      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a href="https://ieeer8.org/" target="_blank" rel="noreferrer">
        <br></br>
          <img src={logoIEEE7} width="250" height="400" alt="" />
        </a>
      <a href="https://ieeer8.org/student-activities/sa-committee/sac/" target="_blank" rel="noreferrer">
          <img src={logoIEEE6} width="200" height="300" alt="" />
        </a>
        <a href="https://www.grss-ieee.org/" target="_blank" rel="noreferrer">
          <img src={logoIEEE1} width="200" height="400" alt="" />
        </a>
        
       
        <a href="https://ieee-aess.org/" target="_blank" rel="noreferrer">
          <img src={logoIEEE3} width="200" height="400" alt="" />
        </a>
      </div>
      <br></br><br></br>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a
          href="https://mtt.org/"
          target="_blank"
          rel="noreferrer"
        >
            <br></br>
          <img src={logoIEEE2} width="250" height="400" alt="" />
        </a>
        <a href="https://ieeeaps.org/" target="_blank" rel="noreferrer">
          <img src={logoIEEE4} width="100" height="300" alt="" />
        </a>
        <a href="https://www.ieeeaps.org/committees/ypa" target="_blank" rel="noreferrer">
          <img src={logoIEEE5} width="350" height="400" alt="" />
        </a>

       
      </div>
    </Container>
  );
};
