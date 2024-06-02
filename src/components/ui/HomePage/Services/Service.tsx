import { Button } from "@mui/material";
import React from "react";
import Container from "../Container/Container";

const Service = () => {
  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="serviceCard">
          <div className="serviceIconWraps"></div>
          <h4>Asset management </h4>
          <p className="leading-8 my-5">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet.
          </p>
          <Button>Read More </Button>
        </div>
      </div>
    </Container>
  );
};

export default Service;
