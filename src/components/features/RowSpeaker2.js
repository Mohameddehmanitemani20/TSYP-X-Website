import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Our Speakers",
  subheading = "",
  description = "",
  cards = [
    {
      imageSrc: "https://i.ibb.co/dDbDdMZ/paolo.png",
      position:
        "Past President of GRSS",
      name: "Paolo Gamba",
      links: [
        {
          url: "https://www.linkedin.com/in/paolo-gamba-00a220b/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/0nwKJkN/nuno-burgoes.png",
      position:
        "Director of DETI at Universidade de Aveiro, IEEE Fellow, IEEE MTT-S President Elect",
      name: "Nuno Borges Carvalho",
      links: [
        {
          url: "https://www.linkedin.com/in/nuno-borges-carvalho-03980a/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/DMRxwrv/steven-c-rising.png",
      position: " Professor of Electrical and Computer Engineering ",
      name: "Steven C. Reising",
      links: [
        {
          url: "https://www.linkedin.com/in/stevenmreising/",
          icon: LinkedinIcon,
        },
      ],
    },

    /*
    {
      imageSrc: "https://i.ibb.co/3cLb0PD/sony-erkison.png",
      position: "R8 Former Director / Senior Information Security Specialist ",
      name: "Margaretha Eriksson",
      links: [
        {
          url: "https://www.linkedin.com/in/margaretha-eriksson-434819/",
          icon: LinkedinIcon,
        },
      ],
    },*/
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span
                  className="position"
                  style={{ textAlign: "center", height: "5em" }}
                >
                  {card.position}
                </span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a
                      target="_blank"
                      key={linkIndex}
                      rel="noreferrer"
                      className="link"
                      href={link.url}
                    >
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
