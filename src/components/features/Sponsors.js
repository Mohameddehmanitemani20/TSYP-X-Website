import React from "react";
import tw from "twin.macro";

import Sponsors from "pages/Sponsors";
import nvidia from "images/Nvidia-back-01.png";
import world from "images/wws-back-01.png";



let data = [
  {
    name: "NVIDIA",
    email: "info@nvidia.com",
    photo: 1,
    image:
    nvidia, 
  },
  {
    name: "Worldwide Studies",
    email: "INFO@WORLDWIDE-STUDIES.COM",
    photo: 1,
    image:
    world,
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