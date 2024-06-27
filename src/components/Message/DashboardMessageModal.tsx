/* eslint-disable no-unused-vars */
"use client";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaLink, FaUserTie } from "react-icons/fa";
import logo from "../../assets/logo/logo.jpg";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { IoLinkOutline } from "react-icons/io5";

type TProps = {
  close: () => void;
};
const DashboardMessageModal = ({ close }: TProps) => {
  const [messages, setMessages] = useState([]);
  const [reload, setReload] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
  };


  return (
    <div className="w-[300px] md:w-[360px] md:h-[600px] h-[400px]  bg-white fixed right-3 md:right-8 bottom-24  rounded-2xl text-black shadow-xl z-[9999999999] overflow-hidden shadowStyle">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#1591A3] w-full h-[120px] text-white flex justify-center items-center ">
          <VscClose
            className="transition ease-in-out delay-75  cursor-pointer absolute right-4 top-4"
            onClick={close}
            size={30}
          />
          <div className="flex items-center">
            <div>
              <div className="flex flex-col text-center justify-center  items-center">
                <Image
                  src={logo}
                  width={30}
                  className="rounded-full"
                  alt="logo"
                />
                <small className="">Question ? </small>
                <small> chat with us !</small>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[250px] overflow-y-scroll pl-5 pr-3 pb-5"></div>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start "
          >
            <input
              type="text"
              //   name=""
              placeholder="Compose your message...."
              className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "
              {...register("message")}
            />
            <div className=" flex space-x-2 items-center text-[#707584] ">
              <SentimentSatisfiedAltIcon className="chatIcon" />
              <IoLinkOutline className=" chatIcon"  />
              <GraphicEqIcon className=" chatIcon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardMessageModal;
