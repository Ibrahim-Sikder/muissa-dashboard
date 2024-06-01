import Container from "@/components/ui/HomePage/Container/Container";
import "../services.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  CheckCircle,
  Drafts,
  KeyboardArrowRight,
  LocalPhone,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import service from "../../../../assets/images/service4.jpg";
import service2 from "../../../../assets/images/service5.jpg";
import SpecialSupport from "@/components/ui/HomePage/Services/SpecialSupport";

const buttonStyles = {
  width: 380,
  height: 80,
  display: "flex",
  justifyContent: "space-between",
  fontSize: "16px",
  background: "#1591A3",
};
const page = () => {
  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="serviceContent">
          <h1>Marketing Support</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <div className="grid grid-cols-12 gap-10 ">
          <div className="col-span-8">
            <h1>We give the best Services</h1>
            <p className="mt-8 leading-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden.
            </p>
            <p className="mt-10 ">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <CheckCircle sx={{ color: "#00305C" }} /> Professional website
                design and development
              </li>
              <li>
                {" "}
                <CheckCircle sx={{ color: "#00305C" }} /> Search Engine
                Optimization (SEO)
              </li>
              <li>
                <CheckCircle sx={{ color: "#00305C" }} /> Website maintenance
                and updates
              </li>
              <li>
                <CheckCircle sx={{ color: "#00305C" }} /> Landing page creation
              </li>
            </ul>
            <div className="flex gap-3 mt-10 items-center">
              <div className="serviceImgWrap">
                <Image src={service2} alt="consulting" />
              </div>
              <div className="serviceImgWrap">
                <Image src={service} alt="consulting" />
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <Stack direction="column" gap={2}>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
              <Button sx={buttonStyles}>
                Product Support <KeyboardArrowRight sx={{ color: "#fff" }} />{" "}
              </Button>
            </Stack>
            <Box sx={{ marginTop: "30px" }}>
              <h1>Contact</h1>
              <div className="space-y-3">
                <div className="flex mt-5 items-center">
                  <LocationOn
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    House-08, Road-07, Block-C, <br /> Banasree,Dhka-1219
                  </p>
                </div>
                <div className="flex mt-5 items-center">
                  <LocalPhone
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    <b> Whats App:</b> 01403-852850 <br />
                    <b> Hot Line:</b> 09613-244844
                  </p>
                </div>
                <div className="flex mt-5 items-center">
                  <Drafts
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    muissaltd@gmail.com <br />
                  </p>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <SpecialSupport />
      </Container>
    </>
  );
};

export default page;
