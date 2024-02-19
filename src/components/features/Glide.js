import * as React from "react";

import Glider from "react-glider";
import Pane from "react-glider";

import "glider-js/glider.min.css";

import tsyp1 from "images/1.jpg";
import tsyp2 from "images/2.jpg";
import tsyp3 from "images/3.jpg";
import tsyp4 from "images/4.jpg";
import tsyp5 from "images/5.jpg";
import tsyp6 from "images/6.jpg";
import tsyp7 from "images/7.jpg";

const Glide = () => {
  return (
    <Glider
      slidesToShow={5}
      draggable
      hasArrows
      hasDots
      // slidesToShow={1}
      //slidesToScroll={3}
    >
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2021/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp7} alt="" />
        </a>
      </Pane>
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2020/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp6} alt="" />
        </a>
      </Pane>
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2019/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp5} alt="" />
        </a>
      </Pane>
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2018/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM#/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp4} alt="" />
        </a>
      </Pane>
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2017/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM#/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp3} alt="" />
        </a>
      </Pane>
      <Pane>
        <a
          href="https://past-tsyp.ieee.tn/2016/?fbclid=IwAR0a0J1JU0nLXZ_U2-3HTI2Db3zdRrw-oogGvSzGNxkoIHkcbHKZV-is4YM#/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tsyp2} alt="" />
        </a>
      </Pane>
      <Pane>
        <a href="https://past-tsyp.ieee.tn/2015/multi-about.html" target="_blank" rel="noreferrer">
          <img src={tsyp1} alt="" />
        </a>
      </Pane>
    </Glider>
  );
};

export default Glide;
