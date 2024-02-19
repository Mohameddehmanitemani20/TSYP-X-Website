import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";

/*
import ala from "images/ala board.png";
import nawres from "images/nawres board.png";
import aziz from "images/aziz board.png";
import oumayma from "images/oumayma board.png";
import ines from "images/ines board.png";

import karim from "images/karim media.png";
import amir from "images/amir media.png";
import iness from "images/ines media.png";
import nour from "images/nour.png";
import iheb from "images/iheb.png";
import balkis from "images/balkis amba.png";

import dahmoun from "images/dahmoun it.png";
import youssef from "images/youssef it.png";
import houssem from "images/houssem it.png";
import salah from "images/salah it.png";

import abdel from "images/abdelmomen.png";
import yassine from "images/yassine.png";
import ghada from "images/ghada log.png";
import zmander from "images/zmander.png";
import malek from "images/malek ep.png";
import azizs from "images/aziz social.png";

import skander from "images/skander sponsor.png";
import balkise from "images/balkis email.png";



*/

















const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block bg-gray-200 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;



const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Meet our TEAM",
  tabs = {
    Board: [
      {
        imageSrc: "https://i.ibb.co/BzfW7dm/IMG-8868-Custom.png" ,
        title: "Ala Chalghaf ",
        content: "Chair", 
        //linkedin
        url: "https://www.linkedin.com/in/ala-chalghaf-07196a1b7/",
        //fcb
        url1:"https://www.facebook.com/ala.chalghaf"
      },
      {
        imageSrc: "https://i.ibb.co/P6rJBqr/IMG-9036-Custom.png" ,
        title: "Nawres Ben Rhouma",
        content: "Vice Chair", 
        //linkedin
        url: "https://www.linkedin.com/in/nawres-ben-rhouma21/",
        //fcb
        url1:"https://www.facebook.com/nawres.benrhouma.39"
      },
      {
        imageSrc: "https://i.ibb.co/zmw0fBH/IMG-8815-Custom.png" ,
        title: "Aziz Ben Kbaier",
        content: "Vice Chair", 
        //linkedin
        url: "https://www.linkedin.com/in/azizbenkbaier/",
        //fcb
        url1:"https://www.facebook.com/MeetatMaclarenspub"
      },
      {
        imageSrc: "https://i.ibb.co/342sP6Q/IMG-9008-Custom.png" ,
        title: "Oumayma Nefzi Madani",
        content: "Secretary General", 
        //linkedin
        url: "https://www.linkedin.com/in/nefzi-oumeyma-1aa69a194/",
        //fcb
        url1:"https://www.facebook.com/oumeyma.nefzi.madani"
      },
      {
        imageSrc: "https://i.ibb.co/jvqJB3y/IMG-8997-Custom.png" ,
        title: "Ines Bettaeib",
        content: "Treasurer", 
        //linkedin
        url: "https://www.linkedin.com/in/ines-bettaieb-459aba213/",
        //fcb
        url1:"https://www.facebook.com/iness.bettaieb"
      }, 
    ],
    Media_Unit: 
    [
      {
        imageSrc: "https://i.ibb.co/HByWqxk/IMG-8945-Custom.png" ,
        title: "Mohamed Karim Weslati ",
        content: "Media Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/oueslati-mohamed-karim-79527b172/",
        //fcb
        url1:"https://www.facebook.com/karim.daragi.3"
      },
      {
        imageSrc: "https://i.ibb.co/WsjMSjn/IMG-8989-Custom.png" ,
        title: "Amir Zouenkhi",
        content: "Media Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/amir-zouenkhi-095344176/",
        //fcb
        url1:"https://www.facebook.com/KiiNooX"
      },
      {
        imageSrc: "https://i.ibb.co/52bRRtS/IMG-8862-Custom.png" ,
        title: "Ines Lachiheb",
        content: "Media Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/ines-lachiheb-23a444189/",
        //fcb
        url1:"https://www.facebook.com/lach.ines.1998"
      },
      {
        imageSrc: "https://i.ibb.co/wwmtzyC/IMG-8984-Custom.png" ,
        title: "Nour El Imen Hassine",
        content: "Communication Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/nour-el-imen-209669220/",
        //fcb
        url1:"https://www.facebook.com/Nouurrelimen"
      },
      {
        imageSrc: "https://i.ibb.co/q9TyjmX/IMG-8966-Custom.png" ,
        title: "Iheb Debbech",
        content: "Video Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/iheb-debbech-8111b4243/",
        //fcb
        url1:"https://www.facebook.com/debbech.iheb"
      }, 
      {
        imageSrc: "https://i.ibb.co/ZTdpCt2/IMG-8978-Custom.png" ,
        title: "Balkis Ayari",
        content: "Ambassadors Coordinator", 
        //linkedin
        url: "https://www.linkedin.com/in/ayari-balkis-aaaa51236/",
        //fcb
        url1:"https://www.facebook.com/balkis.ayari.927"
      }, 
    ],
    IT_Unit: 
    [
      {
        imageSrc: "https://i.ibb.co/swJVwCB/IMG-8850-Custom.png" ,
        title: "Mohamed Dehmani Temani",
        content: "Webmaster", 
        //linkedin
        url: "https://www.linkedin.com/in/mohamed-dahmani-temani-78902b223/",
        //fcb
        url1:"https://www.facebook.com/dahmoun.challouftemani.75/"
      },
      {
        imageSrc: "https://i.ibb.co/3fJZxRr/IMG-8809-3-K.png" ,
        title: "Youssef Almia",
        content: "IT Unit", 
        //linkedin
        url: "https://www.linkedin.com/in/youssef-almia-193817183/",
        //fcb
        url1:"https://www.facebook.com/fvgbvnbvn"
      },
      {
        imageSrc: "https://i.ibb.co/GW0dhjY/IMG-9001-Custom.png" ,
        title: "Houssem Ouerghie",
        content: "IT Unit", 
        //linkedin
        url: "https://www.linkedin.com/in/houssem-ouerghie-1a26b719a/",
        //fcb
        url1:"https://www.facebook.com/ouerghie.houssem.9"
      },
      {
        imageSrc: "https://i.ibb.co/d7nRF5g/IMG-8971-Custom.png" ,
        title: "Salah Dabbech",
        content: "IT Unit", 
        //linkedin
        url: "https://www.linkedin.com/in/salah-dabbech/",
        //fcb
        url1:"https://www.facebook.com/salah.dabbech.37"
      },
     
    
    ],
    Program_Unit: 
    [
      {
        imageSrc: "https://i.ibb.co/nwJ2D0B/IMG-9029-Custom.png" ,
        title: "Abdelmomen Bouzarkouna ",
        content: "Program Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/abdelmomen-bouzarkouna/",
        //fcb
        url1:"https://www.facebook.com/abdelmomen.bouzarkouna"
      },
      {
        imageSrc: "https://i.ibb.co/JHxwQjB/IMG-8803-Custom.png" ,
        title: "Youssef Zmander",
        content: "Logistics Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/youssef-zmander-066994174/",
        //fcb
        url1:"https://www.facebook.com/youssef.zmander"
      },
      {
        imageSrc: "https://i.ibb.co/4T88qkN/IMG-9024-Custom.png" ,
        title: "Yassine Khanfir",
        content: "Logistics Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/yassine-khanfir-b5b90b208/",
        //fcb
        url1:"https://www.facebook.com/yassine1khanfir"
      },
      {
        imageSrc: "https://i.ibb.co/N1MngvV/IMG-9017-Custom.png" ,
        title: "Ghada Eladeb",
        content: "Logistics Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/ghada-eladeb-3b2854237/",
        //fcb
        url1:"https://www.facebook.com/ghada.ladeb.9"
      },
      {
        imageSrc: "https://i.ibb.co/87SjqtR/IMG-8801-Custom.png" ,
        title: "Mohamed Aziz Kharroubi",
        content: "Social activities Manager", 
        //linkedin
        url: "",
        //fcb
        url1:"https://www.facebook.com/med.aziz.9699523"
      }, 
      {
        imageSrc:  "https://i.ibb.co/q1hBYms/IMG-8955-Custom.png",
        title: "Malek Miri",
        content: "EP Buddy Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/malek-miri-5bbaa8248/",
        //fcb
        url1:"https://www.facebook.com/profile.php?id=100001949962339"
      }, 
    ],
    Sponsoring_Unit: 
    [
      {
        imageSrc: "https://i.ibb.co/jW7Q4d0/IMG-8844-Custom.png" ,
        title: "Skander Mahfoudh",
        content: "Sponsoring Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/skander-mahfoudh-a9325b162/",
        //fcb
        url1:"https://www.facebook.com/skander.mahfoud"
      },
      {
        imageSrc: "https://i.ibb.co/GdqvDGP/IMG-8960-Custom.png" ,
        title: "Balkis Ferjani",
        content: "Email Manager", 
        //linkedin
        url: "https://www.linkedin.com/in/balkis-ferjani-3a4b22192/",
        //fcb
        url1:"https://www.facebook.com/balkiss.ferjani"
      },
     
      
     
    
    ],

  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <div id="oc">

    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    {/*
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    */}
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      
                      <SocialLinksContainer>
            <SocialLink
              href={card.url1}
              target="_blank"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href={card.url}
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>
            
           
          </SocialLinksContainer>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
    </div>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
