import React from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";

import logoIEEE1 from "images/TT.png";
import logoIEEE2 from "images/SAC.png";
import logoIEEE3 from "images/yp-tunisia-section.png";
import logoIEEE4 from "images/RGB-sponsors-05.svg";



const Container = tw.div`relative`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

export default ({
  subheading = (
    <>
      <center>
        <span tw="text-blue-700">Contributors</span>
      </center>
    </>
  ),
  heading = (
    <>
      <span>Powered By</span>
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

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a href="https://esprit.tn/" target="_blank" rel="noreferrer">
          <img src={logoIEEE4} width="280" height="400" alt="" />
        </a>
        <a href="https://ieee.tn/" target="_blank" rel="noreferrer">
          <img src={logoIEEE1} width="250" height="400" alt="" />
        </a>
        <a href="https://www.facebook.com/IEEETUNISIASAC/" target="_blank" rel="noreferrer">
          <img src={logoIEEE2} width="250" height="400" alt="" />
        </a>

        <a href="https://yp.ieee.tn/" target="_blank" rel="noreferrer">
          <img src={logoIEEE3} width="300" height="10" alt="" />
        </a>
      </div>
    </Container>
  );
};
