import "./CSS.css";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const EventPlace = () => {
  return (
    <div id="place">
      <Heading style={{ textAlign: "center" }}>EVENT LOCATION</Heading>
      <Description style={{ textAlign: "center", marginBottom: "25px" }}>join us!</Description>
      <div classNAME="mapouter">
        <div classNAME="gmap_canvas">
          <iframe
            title="event place"
            style={{ height: "600px", width: "100%", marginBottom: "30px" }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=El%20Mouradi%20Club%20Kantaoui,%20Sousse&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EventPlace;