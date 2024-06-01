import Image from "next/image";
import Container from "./Container/Container";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div className="bg-header">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="col-span-7 flex flex-col justify-evenly relative">
            <Image
              src="/assets/banner/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px] lg:top-[-40px] lg:right-[30px]"
            />
            <Image
              src="/assets/banner/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px] lg:top-[-40px] lg:right-[30px]"
            />
            <Typography
              component="h2"
              variant="h1"
              sx={{
                color: "#002140",
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              }}
            >
              Muissa Business Consulting Ltd.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Elevate your business with our expert support in Product, Sales,
              Marketing, Delivery, IT, Funding, and Investment. Transform
              potential into performance with seamless, tailored solutions.
            </Typography>
            <div className="mx-auto lg:mx-0">
              <Button
                variant="contained"
                sx={{
                  background: "#002140",
                  color: "#fff",
                  padding: "0.75rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="col-span-5 flex justify-center 2xl:-mb-32 2xl:-mr-32 pt-10 lg:pt-0">
            <Image
              src="/assets/banner/banner.png"
              alt="banner-image"
              width={1000}
              height={805}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
