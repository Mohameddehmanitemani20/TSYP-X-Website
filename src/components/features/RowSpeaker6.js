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
  cards = [
    {
      imageSrc: "https://i.ibb.co/G9Xjx67/Achref-Selmi.png",
      position: "IEEE IAS Tunisia General secretary and DL coordinator Tunisia section | Network Security Engineer at Network Associates",
      name: "Achref Selmi",
      links: [
        {
          url: "https://www.linkedin.com/in/achref-selmi-466473195/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/xGGcBCh/Arij.png",
      position: " IEEE IAS Tunisia Treasurer and WIE Tunisia General Secretary | Service Solution Responsible at Huawei Tunisia ",
      name: "Arij Souai",
      links: [
        {
          url: "https://www.linkedin.com/in/arij-souai/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/fk7nsMb/Hassene-Mnif.png",
      position: " IEEE CAS Chapter Chair | PROFESSOR AT ENET'Com ",
      name: "Hassene Mnif",
      links: [
        {
          url: "https://www.linkedin.com/in/hassene-mnif-57786911a/",
          icon: LinkedinIcon,
        },
      ],
    },
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
