import React from "react";
import "./BrandSection.css";
import developer from "../../../../assets/news/developer.webp";
import Image from "next/image";
import Container from "../Container/Container";
import { Button, Stack } from "@mui/material";
const BrandSection = () => {
  const buttonStyle = {
    width: {
      lg: "240x",
      md: "200px",
      xs: "140px",
    },
    height: {
      lg: "50px",
      xs: "40px",
    },
    borderRadius: "30px",
    fontSize: {
      lg: "12px",
      xs: "10px",
    },
    marginRight: "5px",
    marginBottom: {
      sm: 5,
    },
  };
  return (
    <Container className="sectionMargin">
      <div className="brandWraps grid grid-cols-1 lg:grid-cols-2 place-items-center ">
        <div className="brandImgWraps">
          <Image src={developer} alt="brand" />
        </div>
        <div className="brandContent">
          {/* <span>SEE HOW WP ENGINE EMPOWERS</span> */}
          <h3 className="text-3xl my-3">আমাদের প্রতিষ্ঠান</h3>
          <p className="md:w-[500px] my-8">
            আমরা একটি পেশাদার ব্যবসা পরামর্শদান সংস্থা, যার মূল উদ্দেশ্য হলো
            ব্যবসায়িক প্রতিষ্ঠানগুলিকে উন্নতির পথে সাহায্য করা। আমাদের দল দক্ষ
            ও অভিজ্ঞ পরামর্শদাতা দ্বারা গঠিত, যারা বিভিন্ন ক্ষেত্রের দক্ষতার
            মাধ্যমে আপনাদের ব্যবসার জন্য সঠিক সমাধান প্রদান করতে প্রস্তুত।
          </p>
          <div className="flex items-center">
            <Stack
              direction={{ sm: "row", xs: "column", md: "row", lg: "row" }}
              spacing={2}
            >
              <Button sx={buttonStyle}>Get Membership</Button>
              <Button sx={buttonStyle}>Read More</Button>
            </Stack>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BrandSection;
