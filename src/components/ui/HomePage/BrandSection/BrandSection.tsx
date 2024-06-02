import React from "react";
import "./BrandSection.css";
import developer from "../../../../assets/news/developer.webp";
import Image from "next/image";
import Container from "../Container/Container";
import { Button, Stack } from "@mui/material";
const BrandSection = () => {
  return (
    <Container>
      <div className="brandWraps grid grid-cols-1 lg:grid-cols-2 place-items-center ">
        <div className="brandImgWraps">
          <Image src={developer} alt="brand" />
        </div>
        <div className="brandContent">
          <span>SEE HOW WP ENGINE EMPOWERS</span>
          <h1 className="text-6xl my-3">Brands</h1>
          <p className="md:w-[500px] my-8">
            Red Door Interactive helps luxury kitchen appliance retailer
            Thermador achieve dramatic performance improvements by migrating its
            WordPress site to WP Engine’s fully managed platform.
          </p>
          <div className="flex items-center">
            <Stack direction={{sm:'column',md:'row'}}   spacing={2}>
            <Button
              sx={{
                width: "2405x",
                height: "50px",
                borderRadius: "30px",
                fontSize: "12px",
                marginRight: "5px",
                marginBottom: {
                    sm: 2
                }
              }}
            >
              Explore Enterprise Solution{" "}
            </Button>
            <Button
              sx={{
                width: "200px",
                height: "50px",
                borderRadius: "30px",
                fontSize: "12px",
                background: "#fff",
                color: "#00305C",
                border: "1px solid #00305C",
                marginTop:{xs: '10px', lg:0}
              }}
            >
              View Case Studies{" "}
            </Button>
            </Stack>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BrandSection;
