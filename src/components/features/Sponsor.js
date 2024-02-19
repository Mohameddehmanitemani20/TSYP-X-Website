import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import SponsorCover from "images/sponsoring.jpg";
import file from "images/Dossier de collaboration [TSYP X YPS 2022].pdf";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Contributors from "components/features/Contributors";
import Partners from "components/features/Partners";

import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import Sponsors from "./Sponsors";
import Sponsors1 from "./Sponsors1";


const OpacityOverlay = tw.div`z-10 absolute inset-0  opacity-100`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

export default ({
  subheading = "",
  heading = (
    <>
      Do you want to be part of the <span tw="text-blue-700">TSYP</span> in conjunction with
      <span tw="text-blue-700"> YP IN SPACE</span> ?
    </>
  ),
  description = "The Tunisian Students and Young Professionals, is the annual conference that brings together IEEE members in Tunisia. We are talking about the 10th edition which will be organized by IEEE ESPRIT SB. It is an excellent opportunity to discuss current and future challenges in science and engineering, to immerse in the IEEE national network and to exchange experiences.",
  description1 = "The Young Professionals in Space (YPinSpace) is an initiative to bring academics,scientists, professionals and students in the space industry from all over the world to one location to discuss recent research breakthroughs, technical advances, existing opportunities and emerging space technologies, with the aim of inspiring the new generations of engineers and of giving them the opportunity to get involved in such a thrilling field.",
  description2 = "If you're interested in being a part of TSYP 2022, find our sponsorship file below.",
  primaryButtonText = "DOWNLOAD",
  primaryButtonUrl = false,
  imageSrc = SponsorCover,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <>
      <Container>
        <OpacityOverlay />

        <HeroContainer>
        <Sponsors />
        <Sponsors1 />
          <AnimationRevealPage>
            <TwoColumn>
              <ImageColumn>
                <Image
                  css={imageCss}
                  src={imageSrc}
                  imageBorder={imageBorder}
                  imageShadow={imageShadow}
                  imageRounded={imageRounded}
                />
                {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
              </ImageColumn>
            
              <TextColumn textOnLeft={textOnLeft}>
                <TextContent>
                  <Subheading>{subheading}</Subheading>
                  <Heading>{heading}</Heading>
                  <Description>{description}</Description>
                  <br></br>
                  <Description>{description1}</Description>
                  <br></br>
                  <Description>{description2}</Description>
                  <PrimaryButton
                    buttonRounded={buttonRounded}
                    target="_blank"
                    as="a"
                    href={file}
                    download="Collaboration File TSYP X & YPS"
                  >
                    {primaryButtonText}
                  </PrimaryButton>
                </TextContent>
              </TextColumn>
            </TwoColumn>
            

            <Contributors
              //subheading={<Subheading>About IEEE ESPRIT Student Branch</Subheading>}
              // heading="We aim to disrupt the design space."
              buttonRounded={true}
              // primaryButtonText="Contact Us"
              // imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
              textOnLeft={false}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Partners
              //subheading={<Subheading>About IEEE ESPRIT Student Branch</Subheading>}
              // heading="We aim to disrupt the design space."
              buttonRounded={true}
              // primaryButtonText="Contact Us"
              // imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
              textOnLeft={false}
            />
          </AnimationRevealPage>
        </HeroContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};
