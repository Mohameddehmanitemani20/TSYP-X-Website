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
      imageSrc: "https://i.ibb.co/HPYBFpY/roua-touhiri.png",
      position:
        "IEEE ComSoc YP member & professor/researcher at polytech institute of Paris",
      name: "Rouaa Touihri",
      links: [
        {
          url: "https://www.linkedin.com/in/roua-touihri/",
          icon: LinkedinIcon,
        },
      ],
    },
    
    {
      imageSrc: "https://i.ibb.co/CJnV0xD/oussama-laajili.png",
      position: "SAC Student Representative",
      name: "Oussama Laajili",
      links: [
        {
          url: "https://www.linkedin.com/in/oussama-laajili/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
        imageSrc: "https://i.ibb.co/Jxds86D/seif-hajem.png",
        position: " MAC Tunisia Chair ",
        name: "Seif Hajjem",
        links: [
          {
            url: "https://www.linkedin.com/in/seif-el-hajjem-92091084/",
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
