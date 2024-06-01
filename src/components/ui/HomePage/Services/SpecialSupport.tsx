/* eslint-disable react/no-unescaped-entities */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function SpecialSupport() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyles = {
    width: 130,
    height: "40px",
    margin: 1,
    backgroundColor: "#4168AB",
    color: "white",
    borderRadius: 5,
    padding: "0px",
    fontSize: "12px",
    lineHeight: "20px",
    minHeight: "unset",
    "&.Mui-selected": {
      backgroundColor: "#1591A3",
      color: "#fff",
    },
  };
  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "80px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: "none" }}>
          <TabList
            sx={{ ".MuiTabs-indicator": { display: "none" } }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Personal Care " value="1" sx={tabStyles} />
            <Tab label="Support Care " value="2" sx={tabStyles} />
            <Tab label="Guaranteed " value="3" sx={tabStyles} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <p>
           Tailored assistance fostering well-being and
            independence. Our compassionate services address individual needs,
            providing guidance and support for a fulfilling lifestyle.
            Empowering clients with holistic care solutions for physical,
            emotional, and mental health.
          </p>
          <p className="mt-5"> Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for a fulfilling lifestyle.</p>
        </TabPanel>
        <TabPanel value="2">
        <p > Personalized assistance fostering independence and well-being. Our dedicated services cater to individual needs, offering holistic support for a fulfilling lifestyle. Empowering clients with compassionate care solutions for optimal physical, emotional, and mental health.</p>
          <p className="mt-5">
           Tailored assistance fostering well-being and
            independence. Our compassionate services address individual needs,
            providing guidance and support for a fulfilling lifestyle.
            Empowering clients with holistic care solutions for physical,
            emotional, and mental health.
          </p>
         </TabPanel>
        <TabPanel value="3"><p>
           Tailored assistance fostering well-being and
            independence. Our compassionate services address individual needs,
            providing guidance and support for a fulfilling lifestyle.
            Empowering clients with holistic care solutions for physical,
            emotional, and mental health.
          </p>
          <p className="mt-5"> Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for a fulfilling lifestyle.</p></TabPanel>
      </TabContext>
    </Box>
  );
}
