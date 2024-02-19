import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero1 from "components/landing/BackgroundAsImageProgram";

import ContactUsForm from "components/features/ContactUs";
import Footer from "components/footers/MiniCenteredFooter";
import Program from "components/features/Program";

export default () => (
  <AnimationRevealPage>
    <Hero1 />
    <br />
    <br />

    <Program />

    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
