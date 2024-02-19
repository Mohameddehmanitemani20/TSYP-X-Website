import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

//import { Carousel } from "3d-react-carousal";

import tsyp1 from "images/1.jpg";
import tsyp2 from "images/2.jpg";
import tsyp3 from "images/3.jpg";
import tsyp4 from "images/4.jpg";
import tsyp5 from "images/5.jpg";
import tsyp6 from "images/6.jpg";
import tsyp7 from "images/7.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  //
  let slides = [
    <img src={tsyp1} alt="1" />,
    <img src={tsyp2} alt="2" />,
    <img src={tsyp3} alt="3" />,
    <img src={tsyp4} alt="4" />,
    <img src={tsyp5} alt="5" />,
    <img src={tsyp6} alt="6" />,
    <img src={tsyp7} alt="7" />,
  ];

  //
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  //
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div height="600">
      <Box
        sx={{
          bgcolor: "background.paper",
          justifyContent: "center",
        }}
      >
        <AppBar position="static">
          <Tabs
            sx={{
              bgcolor: "background.paper",
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              icon={
                <Avatar
                  alt="test avatar"
                  src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/278047460_114590621201207_4681012443332920014_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IXj05TuOXGwAX8n0EKK&_nc_ht=scontent.ftun15-1.fna&oh=00_AT9-g2brAqHcvxqGyP5GGuv9LUbeU_x_Ed6mbVX7lkbhZw&oe=631159F8"
                />
              }
              {...a11yProps(1)}
            />{" "}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/*  <TabPanel value={value} index={0} dir={theme.direction}>
            <Carousel slides={slides} autoplay={false} interval={10000} />
          </TabPanel> */}
        </SwipeableViews>
      </Box>
    </div>
  );
}
