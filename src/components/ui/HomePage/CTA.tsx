import React from "react";
import Container from "./Container/Container";
import Image from "next/image";
import Link from "next/link";
import paymentImage from "../../../assets/payment/payment.png";
import businessImage from "../../../assets/business/business.png";
import { ArrowRight } from "@mui/icons-material";
import { Typography } from "@mui/material";

const CTA = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex justify-center">
            <Image src={paymentImage} alt="payment" width={600} height={600} />
          </div>

          <div className="col-span-6 flex flex-col justify-center mb-32">
            <Typography component="h2" variant="h4">
              Now its time to change payment method.
            </Typography>
            <Typography component="h3" variant="subtitle1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </Typography>
            <Link
              href={"/"}
              className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
            >
              Learn more{" "}
              <ArrowRight sx={{ color: "#2D9CDB", fontSize: "1.5rem" }} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Typography component="h2" variant="h4">
              Now its time to change payment method.
            </Typography>
            <Typography component="h3" variant="subtitle1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </Typography>
            <Link
              href={"/"}
              className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
            >
              Learn more{" "}
              <ArrowRight sx={{ color: "#2D9CDB", fontSize: "1.5rem" }} />
            </Link>
          </div>

          <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
            <Image
              src={businessImage}
              alt="business"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CTA;
