"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Forward } from "@mui/icons-material";

const Services = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyle = {
    fontSize: "20px",
    fontWeight: "semibold",
    "&.Mui-selected": {
      borderLeft: "2px solid #1591A3",
      borderRight: "none",
      borderTop: "none",
      borderBottom: "none",
      color: "#1591A3",
      background: "#E9FDFF",
      opacity: "0.5",
    },
  };
  

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="services tabs" centered>
            <Tab sx={tabStyle} label="ফান্ডিং সাপোর্ট" value="1" />
            <Tab sx={tabStyle} label="মার্কেটিং সাপোর্ট" value="2" />
            <Tab sx={tabStyle} label="আইটি সাপোর্ট" value="3" />
            <Tab sx={tabStyle} label="প্রোডাক্ট সাপোর্ট" value="4" />
            <Tab sx={tabStyle} label="বিক্রয় সাপোর্ট" value="5" />
            <Tab sx={tabStyle} label="ডেলিভারি সাপোর্ট" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="investmentContent">
            <ul className="space-y-5">
              <li className="flex items">
                <Forward />
                <span className="ml-2">সরকারি অনুদান ও সহায়তা</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">ব্যাংক ও আর্থিক প্রতিষ্ঠান</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">বেসরকারি প্রতিষ্ঠান ও দাতা সংস্থা</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">উদ্যোক্তা ও স্টার্টআপ সহায়তা</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">আন্তর্জাতিক অনুদান ও সহায়তা</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">ব্যক্তিগত ও সামাজিক সহায়তা</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">শিক্ষা ও গবেষণা অনুদান</span>
              </li>
              <li className="flex items">
                <Forward />
                <span className="ml-2">অনলাইন ও ডিজিটাল মার্কেটিং সহায়তা</span>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="investmentContent">
            <ul className="space-y-3">
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  ব্যবসায়ের জরুরী ফান্ড তৈরিতে পরামর্শ ও সহযোগিতা করা।
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  প্রতিষ্ঠানের কাগজাদি তৈরিতে পরামর্শ ও সহযোগিতা করা।
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">ফান্ডিং প্রোপোজাল তৈরি করা।</span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  ইনভেস্টরের জন্য একটি শক্তিশালী বক্তব্য তৈরী ও পরামর্শ প্রদান।
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  ব্যবসায়ের মার্কেট Analysis এর মাধ্যমে বাজার তৈরি করা ও পরামর্শ
                  প্রদান
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  প্রতিষ্ঠানের Analysis Report তৈরিতে সহযোগিতা করা।
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  প্রতিষ্ঠানের Monitoring Report File তৈরি করা।
                </span>
              </li>
              <li className="flex items">
                {" "}
                <Forward />{" "}
                <span className="ml-2">
                  প্রতিষ্ঠানের কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদান।
                </span>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value="3">আইটি সাপোর্ট content</TabPanel>
        <TabPanel value="4">প্রোডাক্ট সাপোর্ট content</TabPanel>
        <TabPanel value="5">বিক্রয় সাপোর্ট content</TabPanel>
        <TabPanel value="6">ডেলিভারি সাপোর্ট content</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Services;
