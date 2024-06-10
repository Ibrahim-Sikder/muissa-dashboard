"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import Container from "../Container/Container";
import investment from "../../../../assets/invest/investment.jpg";
import investment2 from "../../../../assets/invest/investment2.jpg";
import investment3 from "../../../../assets/invest/investment3.jpg";
import investment4 from "../../../../assets/invest/ivestment4.jpg";
import investment5 from "../../../../assets/invest/investment5.jpg";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Investment.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Forward } from "@mui/icons-material";

export default function Investment() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabStyles = {
    border: "none",
    textAlign: "left",
    pl: 2,
    "& .MuiTab-wrapper": {
      justifyContent: "flex-start",
    },

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
  const buttonStyle = {
    marginTop: "15px",
    background: "#fff",
    border: "1px solid #000",
    borderRadius: "20px",
    width: "130px",
    height: "40px",
    color: "black",
    fontSize: "12px",
  };

  const tabData = [
    {
      value: "1",
      label: "প্রোডাক্ট সাপোর্ট ",
      image: investment.src,
      content: (
        <div className="investmentContent">
          <ul className="space-y-3">
            <li>
              {" "}
              ব্যবসায়ের Product যোগানে বিভিন্ন পাইকারি ও Third-Party এর নিকট এক
              স্থান থেকে অন্য স্থানে যাতায়েত করতে হয়। শুধু তাই নয় সঠিক মূল্যের
              চেয়ে বেশি দিয়ে Product সংগ্রহ করতে বাধ্য হন। যার ফলে প্রতিষ্ঠানের
              সময় ও অর্থের অপচয় হয়।
            </li>
            <li>
              {" "}
              ব্যবসায়ের Product যোগানে বিভিন্ন পাইকারি ও Third-Party এর নিকট এক
              স্থান থেকে অন্য স্থানে যাতায়েত করতে হয়। শুধু তাই নয় সঠিক মূল্যের
              চেয়ে বেশি দিয়ে Product সংগ্রহ করতে বাধ্য হন। যার ফলে প্রতিষ্ঠানের
              সময় ও অর্থের অপচয় হয়।
            </li>
            <li>
              {" "}
              ব্যবসায়ের Product যোগানে বিভিন্ন পাইকারি ও Third-Party এর নিকট এক
              স্থান থেকে অন্য স্থানে যাতায়েত করতে হয়। শুধু তাই নয় সঠিক মূল্যের
              চেয়ে বেশি দিয়ে Product সংগ্রহ করতে বাধ্য হন। যার ফলে প্রতিষ্ঠানের
              সময় ও অর্থের অপচয় হয়।
            </li>
          </ul>

          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "2",
      label: "সেলস সাপোর্ট ",
      image: investment2.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "3",
      label: "ডেলিভারি সাপোর্ট ",
      image: investment3.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "4",
      label: "আইটি সাপোর্ট ",
      image: investment4.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "5",
      label: "ফান্ডিং সাপোর্ট ",
      image: investment5.src,
      content: (
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
          {/* <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p> */}
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "6",
      label: "ইনভেস্টমেন্ট সাপোর্ট ",
      image: investment5.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
    {
      value: "7",
      label: "মার্কেটিং সাপোর্ট ",
      image: investment5.src,
      content: (
        <div className="investmentContent">
          <h3>ETIAM CURSUS PURUS VEL QUAM SOLLICITUDIN, SIT AMET SUSCIPIT</h3>
          <p className="my-3 leading-7">
            Ut nunc leo, sodales nec ullamcorper sit amet, pulvinar nec purus.
            Aliquam sit amet accumsan felis. Duis sollicitudin consectetur quam.
            In at lacus et tellus blandit tincidunt. Suspendisse id risus
            efficitur.
          </p>
          <Button sx={buttonStyle}>Know More</Button>
        </div>
      ),
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container className="sectionMargin">
      <SectionTitle
        title="আমাদের সেবা"
        subtitle="আমাদের ব্যবসা পরামর্শক প্রতিষ্ঠানটি আপনাকে সঠিক পরিকল্পনা এবং কৌশল প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমরা ব্যবসা উন্নয়ন, বাজার গবেষণা, আর্থিক বিশ্লেষণ, এবং পরিচালনায় দক্ষতা বৃদ্ধি করতে সহায়তা করি"
      />
      <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
        <TabContext value={value}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box sx={{ height: "100%" }}>
                <TabList
                  orientation={isSmallScreen ? "horizontal" : "vertical"}
                  scrollButtons="auto"
                  variant="scrollable"
                  onChange={handleChange}
                  aria-label="scrollable auto tabs example"
                  sx={{
                    borderRight: "none",
                    border: "none",
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  {tabData.map((tab) => (
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                      sx={tabStyles}
                    />
                  ))}
                </TabList>
              </Box>
            </Grid>

            <Grid item xs={12} md={9}>
              <TransitionGroup>
                {tabData.map(
                  (tab) =>
                    value === tab.value && (
                      <CSSTransition
                        key={tab.value}
                        timeout={500}
                        classNames="fade"
                      >
                        <TabPanel value={tab.value} sx={{ border: "none" }}>
                          <div
                            className="investmentCardWrap"
                            style={{ backgroundImage: `url(${tab.image})` }}
                          >
                            {tab.content}
                          </div>
                        </TabPanel>
                      </CSSTransition>
                    )
                )}
              </TransitionGroup>
            </Grid>
          </Grid>
        </TabContext>
      </Box>
    </Container>
  );
}
