import { Button } from "@mui/material";
import React from "react";
import Container from "../Container/Container";
import {
  BusinessCenter,
  Inventory,
  ProductionQuantityLimits,
  Storefront,
  TrendingDown,
} from "@mui/icons-material";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "Product Services ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 2,
      title: "Investment Support",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 3,
      title: "Sale Support ",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
    {
      id: 4,
      title: "Marketing Support",
      description:
        "Products quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet.",
    },
  ];
  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
          {serviceData.map((data, i) => (
            <div key={data.id} className="serviceCard">
              <div className="serviceIconWraps">
                {i === 0 ? (
                  <ProductionQuantityLimits sx={{ fontSize: "75px" }} />
                ) : i === 1 ? (
                  <Inventory sx={{ fontSize: "75px" }} />
                ) : i === 2 ? (
                  <TrendingDown sx={{ fontSize: "75px" }} />
                ) : i === 3 ? (
                  <Storefront sx={{ fontSize: "75px" }} />
                ) : null}
              </div>
              <div className="serviceContent">
                <h4>{data.title}</h4>
                <p className="my-5">{data.description}</p>
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
