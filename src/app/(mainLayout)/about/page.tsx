import Container from "@/components/ui/HomePage/Container/Container";
import "./about.css";
import consult from "../../../assets/team/team6.png";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CircleProgressBar from "./_components/CircleProgressBar";
import BrandSection from "@/components/ui/HomePage/BrandSection/BrandSection";
import Company from "@/components/ui/HomePage/Company/Company";
import WorkingProcess from "./_components/WorkingProcess";
import Award from "./_components/Award/Award";
import TeamSection from "./_components/TeamSection/TeamSectin";
const About = () => {
  const value = 66;
  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="serviceContent">
          <h1>About Us</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <div className="grid grid-cols-1  xl:grid-cols-2 place-items-center  gap-10">
          <div className=" order-2 xl:order-1">
            <div className="leading-8 relative">
              <div className="divider"></div>
              <h1> Consulting is a law firm </h1>
              <h1> specialising in corporate</h1>
              <h1> finance work</h1>
            </div>

            <p className="mt-5 leading-9">
              We have spent 9 years working for one of Australia’s most
              recognised and successful retailers so we have many good review of
              works.
            </p>

            <div className="grid gap-10 mt-8 grid-cols-1 place-content-center place-items-center lg:grid-cols-3">
              <div className="text-center">
                <CircleProgressBar />
                <h4 className="mt-3">Work </h4>
                <h4 className="mt-3">Development </h4>
              </div>
              <div className="text-center">
                <CircleProgressBar />
                <h4 className="mt-3">Plan </h4>
                <h4 className="mt-3">Fulfilled </h4>
              </div>
              <div className="text-center">
                <CircleProgressBar />
                <h4 className="mt-3">Work </h4>
                <h4 className="mt-3">Development </h4>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-2">
            <Image src={consult} alt="consult" />
          </div>
        </div>
        <WorkingProcess />
      </Container>
      <Award />
      <TeamSection />
      <Company />
    </>
  );
};

export default About;
