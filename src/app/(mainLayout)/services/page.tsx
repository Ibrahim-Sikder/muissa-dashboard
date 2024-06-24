"use client";
import Container from "@/components/ui/HomePage/Container/Container";

import ServiceData from "./_component/Services/ServiceData";

const Page = () => {

  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>Our Services</h1>
        </div>
      </div>

      <Container className="sectionMargin">
        <ServiceData />
      </Container>
    </>
  );
};

export default Page;
