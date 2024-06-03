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
import { Button } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Investment.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

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
      justifyContent: "flex-start", // Aligns the text to the left
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
      label: "Product Support",
      image: investment.src,
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
      value: "2",
      label: "Sale Support",
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
      label: "Marketing Support",
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
      label: "Delivery Support",
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
      label: "Investment Support",
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
      value: "6",
      label: "Funding Support",
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
      label: "IT Support",
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

  return (
    <Container className="sectionMargin">
      <SectionTitle
        title="KNOW THE FUTURE OF INVESTMENT"
        subtitle="
The future of investment lies in digitalization, sustainable ventures, and AI-driven strategies, reshaping portfolios for resilience and growth."
      />
      <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
        <TabContext value={value}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box sx={{ height: "100%" }}>
                <TabList
                // orientation={{
                //   xs: 'vertical',
                //   md: 'vertical',
                // }}
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
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
                        <TabPanel
                          value={tab.value}
                          sx={{ border: "none", }}
                        >
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
