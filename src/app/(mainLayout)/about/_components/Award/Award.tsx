import React from "react";
import "./Award.css";

import { Button } from "@mui/material";
import Container from "@/components/ui/HomePage/Container/Container";
const Award = () => {
  return (
    <div className="awardWraps sectionMargin ">
      <Container>
        <div className="awardContent">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-20 place-content-between justify-between  w-full ">
            <div>
              <h1 className="leading-10 w-full ">
                Don’t misread here we have random & interesting facts.
              </h1>
              <p className="mt-10 leading-8">
                Starfish can re-grow their arms. In fact, a single arm can
                regenerate a whole body. Google’s founders were willing to sell
                & consult.
              </p>
              <Button
                sx={{ background: "#fff", color: "#111", marginTop: "30px" }}
              >
                {" "}
                Get Membership{" "}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-10 relative ">
              <div className="awardCircle">
                <h3>105 +</h3>
                <h5>Team </h5>
                <h5>members</h5>
              </div>
              <div className="awardCircle ">
                <h3>105 +</h3>
                <h5>Team </h5>
                <h5>members</h5>
              </div>
              <div className="awardCircle">
                <h3>105 +</h3>
                <h5>Team </h5>
                <h5>members</h5>
              </div>
              <div className="awardCircle">
                <h3>105 +</h3>
                <h5>Team </h5>
                <h5>members</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Award;
