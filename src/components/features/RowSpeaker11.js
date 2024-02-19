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
      imageSrc: "https://i.ibb.co/vm6Hhwq/Maha-Charfeddine.png",
      position:
        "Assistant Professor in  computer sciences and applied mathematics at ENIS",
      name: "Maha Charfeddine",
      links: [
        {
          url: "https://www.linkedin.com/in/maha-charfeddine-6864901a0/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/F5sZqvT/Boudour-Ammar.png",
      position:
        "Vice-Chair of chapter CIS Tunisia Section | Assistant Professor at National Engineering School of Sfax (ENIS)",
      name: "Boudour Ammar",
      links: [
        {
          url: "https://www.linkedin.com/in/boudour-ammar-27506b146/",
          icon: LinkedinIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.ibb.co/g4K8djh/kais-alila.png",
      position: "Mechanicial engineer, Founder Fab619",
      name: "Kais Alila",
      links: [
        {
          url: "https://www.linkedin.com/in/kais-alila-3a1b35163/",
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
