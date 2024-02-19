import React from "react";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero1 from "components/landing/BackgroundAsImageYPinSpace";

import ContactUsForm from "components/features/ContactUs";
import Footer from "components/footers/MiniCenteredFooterYP";

import MainFeature1 from "components/features/AboutYPinSpace";

export default () => (
  <AnimationRevealPage>
    <Hero1 />

    <MainFeature1
      //subheading={<Subheading>About IEEE Tunisia Section</Subheading>}
      //heading="We are a modern design agency."
      buttonRounded={true}
      //primaryButtonText="See Portfolio"
      //imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
    />

    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
