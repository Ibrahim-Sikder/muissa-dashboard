import { Button } from "@mui/material";
import {
  Inventory,
  ProductionQuantityLimits,
  Storefront,
  TrendingDown,
} from "@mui/icons-material";
import "./services.css";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import { TServices } from "@/types";

const Service = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/services/get-services`, {
    cache: "no-store",
  });
  const servicesData = await res.json();


  const sortedServices: TServices[] = servicesData?.data.services?.sort((a: TServices, b: TServices) => a.priority - b.priority);

  const iconStyle = {
    fontSize: {
      lg: "75px",
      md: "60px",
      sm: "40px",
      xs: "30px",
    },
  };
  const buttonStyle = {
    fontSize: {
      xs: "10px",
      md: "12px",
    },
    width: {
      xs: "100px",
    },
    height: "30px",
    padding: "0px",
  };

  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
          {sortedServices?.slice(0, 4).map((data: TServices, i: number) => (
            <div key={data._id} className="serviceCard">
              <div className="serviceIconWraps">
                {i === 0 ? (
                  <ProductionQuantityLimits sx={iconStyle} />
                ) : i === 1 ? (
                  <Inventory sx={iconStyle} />
                ) : i === 2 ? (
                  <TrendingDown className="rotate-[275deg]" sx={iconStyle} />
                ) : i === 3 ? (
                  <Storefront sx={iconStyle} />
                ) : null}
              </div>
              <div className="serviceContent">
                <h4>{data.category}</h4>
                <p className="my-2 md:my-5">
                  {data.short_description.slice(0, 100)}
                </p>
                <Button sx={buttonStyle} component={Link} href={`/services/${data._id}`}>
                  আরো দেখুন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
