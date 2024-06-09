import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../../../assets/invest/invest.jpg";
import image2 from "../../../../assets/invest/invest2.jpg";
import { GrGroup } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";

const InvestmentCircle = () => {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        padding: { xs: "2rem 1rem", md: "4rem 0" },
        backgroundColor: "#e3fbfe",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST...
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              — BENJAMIN FRANKLIN
            </Typography>
            <Typography sx={{ mt: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Amet
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: { xs: 300, sm: 400, md: 500 },
                height: { xs: 300, sm: 400, md: 500 },
                boxShadow: "none",
              }}
            >
              <Grid container sx={{ height: "100%" }}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#1591A3",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                    overflow: "auto",
                  }}
                >
                  <HiOutlineLightBulb className="text-5xl text-gray-800" />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontSize: { xs: "0.75rem", md: "1rem" } }}
                  >
                    Our Expertise is earned through our experience
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ position: "relative" }}>
                  <Image
                    src={image1}
                    alt="Team meeting"
                    layout="fill"
                    objectFit="cover"
                  />
                </Grid>
                <Grid item xs={6} sx={{ position: "relative" }}>
                  <Image
                    src={image2}
                    alt="Person with coffee"
                    layout="fill"
                    objectFit="cover"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#1591A3",
                    color: "white",
                    p: 2,
                    textAlign: "center",
                    overflow: "auto",
                  }}
                >
                  <GrGroup className="text-5xl text-gray-800" />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, fontSize: { xs: "0.75rem", md: "1rem" } }}
                  >
                    Our Team for your management
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InvestmentCircle;
