import React from "react";
import tw from "twin.macro";

import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import Glide from "components/features/Glide";

const Container = tw.div`relative`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

export default ({
  subheading = (
    <>
      <center>
        <span tw="text-blue-700">Previous editions of </span>
      </center>
    </>
  ),
  heading = (
    <>
      <span>IEEE TSYP Congress</span>
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
      <Glide />
    </Container>
  );
};
