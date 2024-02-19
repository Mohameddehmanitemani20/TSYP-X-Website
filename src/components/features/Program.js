import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import { ReactComponent as Check } from "../../icons/check-square.svg";
import { ReactComponent as Open } from "../../icons/start.svg";
import { ReactComponent as Partner } from "../../icons/partner.svg";
import { ReactComponent as Mic } from "../../icons/mic.svg";
import { ReactComponent as Surprise } from "../../icons/surprise.svg";
import { ReactComponent as Break } from "../../icons/pause.svg";
import { ReactComponent as Display } from "../../icons/monitor.svg";
import { ReactComponent as Free } from "../../icons/show.svg";
import { ReactComponent as Dinner } from "../../icons/dinner.svg";
import { ReactComponent as Zoom } from "../../icons/zoom-in.svg";
import { ReactComponent as Party } from "../../icons/party.svg";
import { ReactComponent as Workshop } from "../../icons/workshop.svg";
import { ReactComponent as Gift } from "../../icons/gift.svg";
import { ReactComponent as Award } from "../../icons/award.svg";
import { ReactComponent as Presentation } from "../../icons/presentation.svg";
import { ReactComponent as CheckOut } from "../../icons/check-out.svg";
import { ReactComponent as Yp } from "../../icons/yp.svg";
import { ReactComponent as YpLunch } from "../../icons/lunch-yp.svg";
import { ReactComponent as Tour } from "../../icons/tour.svg";
import { ReactComponent as Close } from "../../icons/close.svg";
import { ReactComponent as BreakYp } from "../../icons/breakYp.svg";
import { ReactComponent as CheckOutYP } from "../../icons/check-outYP.svg";
import { ReactComponent as Transport } from "../../icons/transport.svg";
//import { ReactComponent as Logo } from "../../icons/dinner.png";
import { PrimaryButton } from "components/misc/Buttons";

const Program = () => {
  const [value, setValue] = React.useState("1");

  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const [show4, setShow4] = React.useState(false);
  const [show5, setShow5] = React.useState(false);
  const [show6, setShow6] = React.useState(false);
  const [show7, setShow7] = React.useState(false);








  const onButtonClickHandler = () => {
    setShow(!show); 
  };
  const onButtonClickHandler1 = () => {
    setShow1(!show1);
  };
  const onButtonClickHandler2 = () => {
    setShow2(!show2);
  };
  const onButtonClickHandler3 = () => {
    setShow3(!show3);
  };
  const onButtonClickHandler4 = () => {
    setShow4(!show4);
  };
  const onButtonClickHandler5 = () => {
    setShow5(!show5);
  };
  const onButtonClickHandler6 = () => {
    setShow6(!show6);
  };
  const onButtonClickHandler7 = () => {
    setShow7(!show7);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "Comic Sans MS" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs style={{ marginTop: "50px" }} value={value} onChange={handleChange} centered>
            <Tab label="19 DEC" value="1" />
            <Tab label="20 DEC" value="2" />
            <Tab label="21 DEC" value="3" />
            <Tab label="22 DEC" value="4" />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <VerticalTimeline>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10:00 - 14:00"
              /* contentStyle={{ background: "whiteSmoke", color: "red" }}*/
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Check />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Check in & IEEE student branches booths set up
              </h4>

             
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="15:00 - 15:45"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Open />}
            >
              <h4 className="vertical-timeline-element-subtitle">Opening ceremony</h4>
              
              <br></br>
              {show5 && <p>Tunisia National Anthem  <br></br><br></br> Opening video 
<br></br><br></br>Opening word by TSYP X & YPS Chair - Ala Chalghaf, TSYP X Chair 
 <br></br><br></br>Word by IEEE ESPRIT SB Chair - Fedi Naimi, ESPRIT SB Chair

<br></br><br></br>Word by Mekki Ksouri, IEEE ESPRIT SB Counselor<br></br><br></br>Word by Taher Bellakhdher, ESPRIT Director
 <br></br><br></br>Word by Ilhem Kallel, IEEE Tunisia Section Chair <br></br><br></br>Word by Oussema Fitouri, IEEE Tunisia section students activities Chair


<br></br><br></br>Word by Antonio Luque, IEEE Region 8 Director<br></br><br></br>Word by Anis Ben Arfi, YPS’22 honorary chair

</p> }
              <button onClick={onButtonClickHandler5}>see more</button>
  
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="15:45 - 16:05"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Partner />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Sponsors & partners intervention
              </h4>
              
              <br></br>
              {show6 && <p>GRSS intervention - Paolo Gamba, Past President of GRSS <br></br><br></br> Worldwide Studies Intervention
</p> }
              <button onClick={onButtonClickHandler6}>see more</button>
              

              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="16:05 - 16:35"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Award />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              IEEE Region 8 Awards
              </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="16:35 - 16:45"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Party />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Musical break 
              </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="16:45 - 17:05"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Mic />}
            >
              <h4 className="vertical-timeline-element-subtitle">YP in Space Keynote Speakers Conference </h4>
              
              <br></br>
              {show7 && <p>Quenton Bonds, NASA Engineer/ SBIR/STTR Program Management Office <br></br><br></br>Steven Reising, Professor of Electrical and Computer Engineering

    


</p> }
              <button onClick={onButtonClickHandler7}>see more</button>
              

              <p></p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="17:10 - 19:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Display />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Booths & TSYP Expo
              </h4>
              <p></p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="19:30 - 21:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Dinner />}
            >
              <h4 className="vertical-timeline-element-subtitle">Dinner </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="21:00 - 21:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Free />}
            >
              <h4 className="vertical-timeline-element-subtitle">Free time </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="21:30 - 23:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Party />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                IEEE TSYP X & YPS’22 Celebration + Surprise challenge Announcement {" "}
              </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="23:00 - 01:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Zoom />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Planets visualization with telescopes {" "}
              </h4>
              <p></p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel value="2">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="7:00 - 9:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Break />}
            >
              <h4 className="vertical-timeline-element-subtitle">Breakfast </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="9:00 - 10:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Session 1: Workshops & Challenges & YP Panel Discussion
              </h4>
              <br></br>
              {show && <p>Fundamentals of machine learning NVIDIA Certified, by Mourad Zerai,  Professor at ESPRIT - Part 1 <br></br><br></br> Applications of AI for Anomaly Detection (XGBoost, AutoEncoders and GANs), by Nahla Debbabi, Professor at ESPRIT  - Part 1
<br></br><br></br>History & Future of Radar & EW, by Lorenzo Lomonte, AESS Distinguished Lecturer & Chief Scientist at TELEPHONICS
 <br></br><br></br> 3D Printing, by Kais Alila, Mechanical engineer, founder and CEO of Fab619
<br></br><br></br> Workshop YP Technical by Kayoum Jedidi, Tunisia Section YP Webmaster
 <br></br><br></br>Getting involved with IEEE Humanitarian Technology, by Anis Ben Arfi, IEEE Senior Member & Senior Engineer at RF systems <br></br><br></br>5G and its potential to engage innovation in different fields and verticals, 
by Amin Zribi, ComSoc Tunisia Section & Director of Telecommunication Department at ISETCom

<br></br><br></br>
CS Challenge - Part 1 <br></br><br></br>WIE Star Program - Part 1 
<br></br><br></br>IAS Technical Challenge - Part 1 
<br></br><br></br>YP Panel discussion about the Aerospace , Mr. Mehmet Ogut ( Nasa JPL technologist)

</p> }
              <button onClick={onButtonClickHandler}>see more</button>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10:30 -10:45"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Break />}
            >
              <h4 className="vertical-timeline-element-subtitle">Break </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10:45 - 12:15"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Session 2: Workshops & Challenges & YP in Space Sessions
              </h4>
              <br></br>
              {show1 && <p>Fundamentals of machine learning NVIDIA Certified, by Mourad Zerai - Part 2<br></br><br></br> Applications of AI for Anomaly Detection (XGBoost, AutoEncoders and GANs), by Nehla Debbabi - Part 2
 <br></br><br></br> SIGHTing Up, by Asma Bellil, SIGHT Tunisia Vice-Chair <br></br><br></br> Workshop ERP,  by Yessine TRIGUI, Hassen BOUAICHA and Yasmine Ghorbel
<br></br><br></br> SB Vitality, by Oussama Laajili SAC Student Representative <br></br><br></br>Remote Sensing of earth and beyond by Mehmet Ogut, Nasa JPL technologist <br></br><br></br>CS Challenge - Part 2 
<br></br><br></br>WIE Star Program - Part 2 
<br></br><br></br>IAS Technical Challenge - Part 2 
<br></br><br></br>Panel discussion: Intro to AESS and services + Intro to GRSS <br></br> Braham Himed, IEEE Fellow, Division Research Fellow <br></br> Paolo Gamba, Past President of GRSS


</p> }
<button onClick={onButtonClickHandler1}>see more</button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="12:30 - 14:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Dinner />}
            >
              <h4 className="vertical-timeline-element-subtitle">Lunch </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="14:30 - 16:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Session 3: Workshops & challenges & YP in Space Sessions {" "}
              </h4>
              <br></br>
              {show2 && <p>Fundamentals of machine learning NVIDIA Certified, by Mourad Zerai - Part 3<br></br><br></br> Applications of AI for Anomaly Detection (XGBoost, AutoEncoders and GANs), by Nehla Debbabi - Part 3
<br></br><br></br>Graph neural networks and its industrial applications, by Houssem Eddine Souid, Data Scientist <br></br><br></br> Optimization of resources allocation within data centers for private cloud by using SDN controllers  , by Rouaa Touihri, Cloud Architect and Researcher
<br></br><br></br>Enabling Communication for Remote and Unconnected Areas: Focus on the Internet of Things, by Zied Bouaida, Senior Researcher and a Cisco Chair technical manager at the IoT Lab at Carleton University & IEEE Qatar YPs’16 Chair
<br></br><br></br>  YP Challenge  - Part 1 <br></br><br></br>IAS Non-technical challenge -Part 1 <br></br><br></br>Sight challenge - Part 1
<br></br><br></br> CIS Challenge - Part 1
<br></br><br></br>CAS Challenge - Part 1
<br></br><br></br>Panel discussion about Women in Engineering <br></br>Ilhem Kallel - Tunisia Section Chair & Education Tunisia Chapter Chair <br></br>Yasmine Chelly - CS Tunisia SG

</p> }
<button onClick={onButtonClickHandler2}>see more</button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="16:00 - 16:15"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Break />}
            >
              <h4 className="vertical-timeline-element-subtitle">Break</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="16:15 - 18:15"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Session 4: Workshops & challenges & YP in Space Sessions
              </h4>
              <br></br>
              {show3 && <p>Fundamentals of machine learning NVIDIA Certified, by Mourad Zerai - Part 4<br></br><br></br> Applications of AI for Anomaly Detection (XGBoost, AutoEncoders and GANs), by Nehla Debbabi - Part 4
<br></br><br></br>Autonomous robots: A look under the hood, by Radhi Sghaier Advanced technologies Engineer <br></br><br></br> Wireless Power Transmission for Space Exploration, an Energy Alternative, by Nuno Borges Carvalho, Director of DETI at Universidade de Aveiro, IEEE Fellow, IEEE MTT-S President Elect
<br></br><br></br> IEEE opportunities for students, by Donia Ammami, Electrical Engineering Ph.D.Student and IEEE young professional member within IEEE ENIG Student Branch <br></br><br></br>YP Challenge - Part 2 
<br></br><br></br> IAS Non-technical challenge - Part 2 
<br></br><br></br>Sight challenge - Part 2 
<br></br><br></br>CIS Challenge - Part 2 
<br></br><br></br>CAS Challenge - Part 2
<br></br><br></br>Panel discussion about IEEE Career <br></br>Seif Hajjem, MAC Tunisia Chair <br></br> Zied Bouida,  Senior Researcher and a Cisco Chair technical manager at the IoT Lab at Carleton University & IEEE Qatar YPs’16 Chair


</p> }
<button onClick={onButtonClickHandler3}>see more</button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="19:00 - 21:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Dinner />}
            >
              <h4 className="vertical-timeline-element-subtitle">Dinner</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="21:00 -21:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Gift />}
            >
              <h4 className="vertical-timeline-element-subtitle">TSYP Anniversary & SBs gifts exchange</h4>
            </VerticalTimelineElement>
            {/*<VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="21:30 - 23:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Show />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                IEEE Community Animated Talent Show + Surprise Challenge
              </h4>
            </VerticalTimelineElement>*/}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="21:30 - 23:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Party />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              IEEE Community Animated Talent Show 
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="23:30 - 00:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Award />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Awards Ceremony & Finalists Announcements
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel value="3">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="7:00 - 9:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Break />}
            >
              <h4 className="vertical-timeline-element-subtitle">Breakfast </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="09:00 - 09:45 "
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Award />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Section Awards Announcements {" "}
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="09:45 - 10:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Presentation />}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Finalist presentations 
              </h4>
              <br></br>
              {show4 && <p>SB 1 proposal: 15 min<br></br><br></br> SB 2 proposal: 15 min
<br></br><br></br>SB 3 proposal: 15 min 

</p> }
<button onClick={onButtonClickHandler4}>see more</button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10:30 - 10:55 "
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Display />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Q&A
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="10:55 - 11:25 "
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Display />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Voting
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="11:25 - 11:45"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              ARISS Testing Contact
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="11:45 - 12:05"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Workshop />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              ARISS Contact
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="12:05 - 12:15"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Display />}
            >
              <h4 className="vertical-timeline-element-subtitle">
              Votes announcements
              </h4>
            </VerticalTimelineElement>




            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="11:25 - 12:30"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Award />}
            >
              <h4 className="vertical-timeline-element-subtitle">Announcement of the winner </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="12:30 - 14:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<CheckOut />}
            >
              <h4 className="vertical-timeline-element-subtitle">Check out</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date=""
              iconStyle={{ background: "whiteSmoke", color: "blue" }}
              icon={<Yp />}
            >
              <h3 className="vertical-timeline-element-title">Only for the YPS participants</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="12:30 - 14:00"
              iconStyle={{ background: "whiteSmoke", color: "red" }}
              icon={<YpLunch />}
            >
              <h4 className="vertical-timeline-element-subtitle">Lunch</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="14:00 - 19:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Tour />}
            >
              <h4 className="vertical-timeline-element-subtitle">Tourstic tour</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="19:30 - 22:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<YpLunch />}
            >
              <h4 className="vertical-timeline-element-subtitle">Gala Dinner</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="22:00 - 23:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Close />}
            >
              <h4 className="vertical-timeline-element-subtitle">Closing Ceremony </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel value="4">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="7:00 - 9:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<BreakYp />}
            >
              <h4 className="vertical-timeline-element-subtitle">Breakfast </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="10:00 - 11:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<CheckOutYP />}
            >
              <h4 className="vertical-timeline-element-subtitle">Check-out </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whiteSmoke" }}
              date="11:00 - 13:00"
              iconStyle={{ background: "whiteSmoke", color: "#fff" }}
              icon={<Transport />}
            >
              <h4 className="vertical-timeline-element-subtitle">Departure to the airport </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Program;