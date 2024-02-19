import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/tsyp.js";
import image from "../../images/the-composition-of-the-space-of-time.jpg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
  background-image: url(${image});
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

//const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px", marginLeft: "0px" }}
        href="/"
      >
        Home
      </NavLink>

      <>
        <NavLink
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ fontSize: "20px", marginRight: "0px", cursor: "pointer" }}
        >
          Program ▼
        </NavLink>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
         style={{display:"flex" , flexDirection:'column'}}
        >
          <NavLink
            onClick={() => {
              window.scrollTo(0, 700);
              handleClose();
            }}
            style={{ cursor: "pointer" }}
            href="/Program"
          >
            Agenda
            
          </NavLink>
          <br></br>
         
          {/*<NavLink style={{ cursor: "pointer" }}>Challenges</NavLink>*/}
          <NavLink 
           onClick={() => {
            window.scrollTo(0, 700);
            handleClose();
          }}
           style={{ cursor: "pointer" }} 
           href="/#speakers">
            Speakers
          </NavLink>
        </Menu>
      </>

      <NavLink style={{ fontSize: "20px", marginRight: "0px" }} href="/Sponsor">
        Sponsors
      </NavLink>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px" }}
        onClick={() => window.scrollTo(0, 1000)}
        href="/#about us"
      >
        About us
      </NavLink>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px" }}
        onClick={() => window.scrollTo(0, 1000)}
        href="/#contact"
      >
        OC Team
      </NavLink>
      <NavLink
        style={{ fontSize: "20px", marginRight: "0px" }}
        href="/#contact"
      >
        Contact us
      </NavLink>
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
              <span>Check our </span>
              <br />
              <SlantedBackground>
                <span tw="text-blue-700">Program timeline!</span>
              </SlantedBackground>
            </Heading>
            <br />
            <br />
            <br />
            <br />

            {/*  <PrimaryAction>
              <a target="_black" href="https://www.facebook.com/YPinSpace">
                <button tw="text-blue-700">download</button>
              </a>
            </PrimaryAction> */}
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
