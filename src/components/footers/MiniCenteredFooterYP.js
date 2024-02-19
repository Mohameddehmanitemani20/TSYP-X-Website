import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo1 from "../../images/foo.png";
import logo2 from "../../images/tsypwhite.png";

import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-96`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo2} />

            <LogoImg src={logo1} />
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            {/* <Link href="/Young Professionals in SPACE">YP In Space</Link> */}
            <Link href="/#speakers" onClick={() => window.scrollTo(0, 4500)}>
              Speakers
            </Link>
            <Link href="/Program">Program</Link>
            <Link href="/Sponsor">Sponsors</Link>
            <Link href="/#aboutus">About us</Link>

            <Link href="/#contact">Contact us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/YPinSpace" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/company/ieee-young-professionals-in-space-congress/about/?viewAsMember=true"
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/ieee_yps4?s=11&t=oR28S65OtmIgEs-4933brw&fbclid=IwAR0jeABkvLEl3E1nZmI9GhMHqO-1HvC-AN196SbJwJqjvkR8B28CFw-Ongw"
              target="_blank"
            >
              <TwitterIcon />
            </SocialLink>

            <SocialLink href="https://www.instagram.com/ieee.yps/" target="_blank">
              <Instagram />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, IEEE ESPRIT STUDENT BRANCH. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
