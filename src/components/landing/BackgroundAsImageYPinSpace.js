import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/yp.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 -mb-20 bg-center bg-cover`}
  background-image: url("https://gieseppmp.eu/wp-content/uploads/2021/10/webinar-free.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px", marginLeft: "0px" }}
        // onClick={() => window.scrollTo(0, 1000)}
        href="/#about us"
      >
        About us
      </NavLink>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px" }}
        href="/Young Professionals in SPACE"
      >
        YP In Space
      </NavLink>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px" }}
        href="/#speakers"
        //onClick={() => window.scrollTo(0, 4500)}
      >
        Speakers
      </NavLink>
      <NavLink style={{ fontSize: "20px", marginRight: "0px" }} href="/Program">
        Program
      </NavLink>
      <NavLink style={{ fontSize: "20px", marginRight: "0px" }} href="/Sponsor">
        Sponsors
      </NavLink>
      <NavLink style={{ fontSize: "20px" }} href="/#contact">
        Contact us
      </NavLink>
      <PrimaryLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSepIZ62uZVpqwhru7bKyG30855LdC6dhylNkyGRnd-m_bEW4Q/viewform"
        target="_black"
      >
        Register!
      </PrimaryLink>
      {/* <NavLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSepIZ62uZVpqwhru7bKyG30855LdC6dhylNkyGRnd-m_bEW4Q/viewform"
        target="_black"
      >
        Register!
      </NavLink> */}
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />

      <HeroContainer>
        <StyledHeader links={navLinks} />

        <TwoColumn>
          <LeftColumn>
            <Notification>"Guardians Of Tunisia."</Notification>
            <Heading>
              <span>Welcome to the </span>
              <br />
              <SlantedBackground>
                <span tw="text-blue-700">Young Professionals in SPACE</span>
              </SlantedBackground>
            </Heading>

            <PrimaryAction>
              <a target="_black" href="https://www.facebook.com/YPinSpace">
                <button tw="text-blue-700">EXPLORE</button>
              </a>
            </PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
