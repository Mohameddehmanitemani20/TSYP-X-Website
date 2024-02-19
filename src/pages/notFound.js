import "./notFound.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    let starContainer = document.querySelector(".stars");
    for (let i = 0; i < 100; i++) {
      starContainer.innerHTML += `<div class="star"></div>`;
    }
  }, []);
  return (
    <div>
      <div class="background">
        <div class="stars stars1"></div>

        <div class="stars stars2"></div>
        <div class="planets"></div>
        <div class="shootingstars"></div>
        <div class="spaceship"></div>
      </div>
      <div class="text">
        <div class="container">
          <h2>Error</h2>
          <h1>404</h1>
          <h2>What you are trying to reach does not exist on this galaxy.</h2>
          <a href="/">go back to earth</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
