import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/landing/BackgroundAsImage.js";
import ContactUsForm from "components/features/ContactUs";
import Footer from "components/footers/MiniCenteredFooter.js";
import AboutIEEETSYP from "components/features/AboutIEEETSYP.js";
import AboutYPinSpace from "components/features/AboutYPinSpace.js";
import AboutIEEETunisiaSection from "components/features/AboutIEEETunisiaSection.js";
import AboutIEEEESPRIT from "components/features/AboutIEEEESPRIT.js";
import Contributors from "components/features/Contributors";
import OldEditions from "components/features/OldEditions";
import Partners from "components/features/Partners";
import SpeakerRow1 from "components/features/RowSpeaker1";
import SpeakerRow2 from "components/features/RowSpeaker2.js";
import SpeakerRow3 from "components/features/RowSpeaker3.js";
import SpeakerRow4 from "components/features/RowSpeaker4.js";
import SpeakerRow5 from "components/features/RowSpeaker5";
import SpeakerRow6 from "components/features/RowSpeaker6";
import SpeakerRow7 from "components/features/RowSpeaker7";
import SpeakerRow8 from "components/features/RowSpeaker8";
import SpeakerRow9 from "components/features/RowSpeaker9";
import SpeakerRow10 from "components/features/RowSpeaker10";
import SpeakerRow11 from "components/features/RowSpeaker11";







import EventPlace from "components/features/EventPlace";
import Video from "components/features/video";
import tw from "twin.macro";



const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;
window.onload = (event) => {
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);
  if (id == "#about%20us") window.scrollTo(0, 1000);
  else if (id == "#speakers") window.scrollTo(0, 4800);
};

var is_first_time = sessionStorage.getItem("first_time");


const LandingPage = () => {


  const [load, setLoad] = useState(false);

  return (
    <>

      {!is_first_time ? (
        <Video />
      ) : (
        <AnimationRevealPage>
          <Hero />
          <AboutIEEETSYP textOnLeft={true} />
          <AboutYPinSpace textOnLeft={false} />
          <AboutIEEETunisiaSection textOnLeft={true} />
          <AboutIEEEESPRIT textOnLeft={false} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <EventPlace />

          {/* speakers */}
          <SpeakerRow1 />
          <SpeakerRow2 />
          {load &&
            <> <SpeakerRow3 />
              <SpeakerRow4 />
              <SpeakerRow5 />
              <SpeakerRow6 />
              <SpeakerRow7 />
              <SpeakerRow8 />
              <SpeakerRow9 />
              <SpeakerRow10 />
              <SpeakerRow11 />



              </>
          }
          <center>
          {!load &&
            <PrimaryAction onClick={() => setLoad(!load)}

              style={{ marginBottom: "20em", marginTop: "1em" }}
            >
               See More
              <br />
            </PrimaryAction>
            }
          </center>
          {/* contibutors */}
          <Contributors />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/*  event partners */}
          <Partners />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/*  previcous editions */}
          <OldEditions />
          <br />
          <br />
          <br />
          <br />
          


          <ContactUsForm />
          <Footer />
        </AnimationRevealPage>
      )}
    </>
  );
}
export default LandingPage;