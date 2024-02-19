import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero2 from "components/landing/BackgroundAsImageSponsors";

import Footer from "components/footers/MiniCenteredFooter";

import ContactUsForm from "components/features/ContactUs";
import Sponsor from "components/features/Sponsor";
import Sponsors from "components/features/Sponsors";

export default () => (
  <AnimationRevealPage>
    <Hero2 />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Sponsor buttonRounded={true} />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
