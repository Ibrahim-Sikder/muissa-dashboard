import { Button } from "@mui/material";
import React from "react";
import Container from "../Container/Container";
import { BusinessCenter } from "@mui/icons-material";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "Product Services ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 1,
      title: "Product Services ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 1,
      title: "Product Services ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 1,
      title: "Product Services ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
  ];
  return (
    <Container>
      <div className="serviceCardWraps">
       <div className="grid grid-cols-4">
        <div className="serviceCard">
          <div className="serviceIconWraps">

          </div>
          <div className="serviceContent">
            <h1>ASSET MANAGEMENT</h1>
            <p className="my5"></p>
          </div>
        </div>
       </div>
      </div>
    </Container>
  );
};

export default Service;
