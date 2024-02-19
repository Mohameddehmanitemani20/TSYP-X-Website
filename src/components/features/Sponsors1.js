import React from "react";
import tw from "twin.macro";

import Sponsors from "pages/Sponsors";
import amine from "images/amine-back.png";
import epi from "images/epi-back.png";
import ichbilia from "images/ichbilia-back.png";





let data = [
  {
    name: "PNEU AMINE",
    email: "contact@stip.com.tn",
    photo: 3,
    image:
      amine, 
  },
  {
    name: "ICHBILIA",
    email: "commercial.ichbilia@topnet.tn",
    photo: 3,
    image:
    ichbilia, 
  },
 
];
export default ({}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((Sponsor) => (
        <Sponsors
          name={Sponsor.name}
          poste={Sponsor.poste}
          email={Sponsor.email}
          photo={Sponsor.photo}
          image={Sponsor.image}
        />
      ))}
    </div>
  );
};