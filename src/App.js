import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import LandingPageSponsor from "pages/LandingPageSponsors";

import LandingPageTimeLine from "pages/LandingPageProgram";
import NotFound from "pages/notFound";
import Sponsors from "pages/Sponsors";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        <Route path="/card">
          <Sponsors />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/Sponsor">
          <LandingPageSponsor />
        </Route>
        {/*  <Route exact path="/Young Professionals in SPACE">
          <LandingPageYPS />
        </Route> */}
        <Route path="/Program">
          <LandingPageTimeLine />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
