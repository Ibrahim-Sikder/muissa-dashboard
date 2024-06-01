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
import ServiceSlider from "@/components/ui/HomePage/Services/ServiceSlider";

const buttonStyles = {
  width: "100%",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <Stack direction="column" gap={2}>
              <Button sx={buttonStyles}>
                Sale Support <KeyboardArrowRight sx={{ color: "#fff" }} />
              </Button>
              <Button sx={buttonStyles}>
                Marketing Support <KeyboardArrowRight sx={{ color: "#fff" }} />
              </Button>
              <Button sx={buttonStyles}>
                Delivery Support <KeyboardArrowRight sx={{ color: "#fff" }} />
              </Button>
              <Button sx={buttonStyles}>
                IT Support <KeyboardArrowRight sx={{ color: "#fff" }} />
              </Button>
              <Button sx={buttonStyles}>
                Funding Support <KeyboardArrowRight sx={{ color: "#fff" }} />
              </Button>
              <Button sx={buttonStyles}>
                Investment Support <KeyboardArrowRight sx={{ color: "#fff" }} />
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
              <div className="mt-5">
                <h1>Brochures </h1>
                <p className="mt-3">
                  View our 2024 Medical prospectus of brochure for an easy to
                  read guide on all of the services offer.
                </p>
              </div>
            </Box>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="capitalize">We give the best Services</h1>
            <p className="mt-8 leading-8">
              We provide unparalleled services, striving for excellence in every
              aspect. With a commitment to quality and customer satisfaction, we
              deliver the finest solutions tailored to your needs. Our dedicated
              team ensures top-notch support, aiming to exceed expectations and
              foster long-term relationships. Experience the difference with our
              superior services, setting the standard for excellence in every
              interaction.
            </p>
            <p className="mt-10">
              Experience exceptional service quality. Our commitment to
              excellence ensures unparalleled support tailored to your needs,
              fostering lasting satisfaction and trust.
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <CheckCircle sx={{ color: "#00305C" }} /> Professional website
                design and development
              </li>
              <li>
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
            <div className="flex flex-col md:flex-row gap-3 mt-10 items-center">
              <div className="serviceImgWrap">
                <Image src={service2} alt="consulting" />
              </div>
              <div className="serviceImgWrap">
                <Image src={service} alt="consulting" />
              </div>
            </div>

            <SpecialSupport />
            <ServiceSlider />
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
