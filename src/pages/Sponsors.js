import "./Sponsors.css";
import back3 from "images/MARS-WEBSITE.png";
import back2 from "images/SUN-WEBSITE.png";
import back1 from "images/EARTH-WEBSITE.png";
import back4 from "images/VENUS-WEBSITE.png";

import { useState } from "react";

const Sponsors = (props) => {
  const [flip, setflip] = useState(false);
  return (
    <div className={"card " + (flip ? "flipped" : "")} onClick={() => setflip(!flip)}>
      <figure className="front">
        <img src={props.image} alt="front" />
        <div className="caption">
          <h2>{props.name}</h2>
        </div>
      </figure>
      <figure className="back">
        <img
          src={
            props.photo === 1
              ? back1
              : props.photo === 2
              ? back2
              : props.photo === 3
              ? back3
              : back4
          }
          alt="space"
        />
        <div className="caption">
          <dl>
            <dt>Contact:</dt>
            <dd> {props.email}</dd>

            
          </dl>
        </div>
      </figure>
    </div>
  );
};

export default Sponsors;
