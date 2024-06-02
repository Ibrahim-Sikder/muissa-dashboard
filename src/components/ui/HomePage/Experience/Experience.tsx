import React from "react";
import "./Experience.css";
import Container from "../Container/Container";
import { EmojiEvents, InsertEmoticon } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
const Experience = () => {
  return (
    <>
      <div className="experienceWraps sectionMargin ">
        <Container>
          <div className="experienceContent">
            <SectionTitle title='We have over 10 years experience' subtitle="Consonantia, there live the blinds and Separated they live in
                Bookmarksgrove language ocean. A small river named Duden flows."/>
            {/* <div className=" px-5 w-full md:w-[600px] mx-auto">
              <h1 className="mb-5">We have over 10 years experience</h1>
              <p className="my-5">
                Far far away, behind the word mountains, far from the and
                Consonantia, there live the blinds and Separated they live in
                Bookmarksgrove language ocean. A small river named Duden flows.
              </p>
            </div> */}
            <div>
              <div className="grid grid-cols-1   lg:grid-cols-4 mt-16 place-content-between gap-10 justify-between lg:w-[1000px]  xl:w-[1280px] ">
                <div className="iconWraps ">
                  <FaReact size={90} />
                  <h1 className="text-6xl font-bold mt-5 mb-3 text-[#1491A3]">
                    250+
                  </h1>
                  <p className="tracking-[3px]">Successfull Project</p>
                </div>
                <div className="iconWraps ">
                  <InsertEmoticon sx={{ fontSize: "90px" }} />
                  <h1 className="text-6xl font-bold mt-5 mb-3 text-[#1491A3]">
                    250+
                  </h1>
                  <p className="tracking-[3px]">Happy Client </p>
                </div>
                <div className="iconWraps ">
                  <EmojiEvents sx={{ fontSize: "90px" }} />
                  <h1 className="text-6xl font-bold mt-5 mb-3 text-[#1491A3]">
                    250+
                  </h1>
                  <p className="tracking-[3px]">Business Awards </p>
                </div>
                <div className="iconWraps ">
                  <VscCoffee size={90} />
                  <h1 className="text-6xl font-bold mt-5 mb-3 text-[#1491A3]">
                    250+
                  </h1>
                  <p className="tracking-[3px]">Cup Coffe </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Experience;
