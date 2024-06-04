import React from "react";
import { FaArtstation } from "react-icons/fa";
import "../../about/about.css";
import icon from "../../../../assets/about/icon2.png";
import icon2 from "../../../../assets/about/icon3.png";
import icon3 from "../../../../assets/about/icon4.png";
import icon4 from "../../../../assets/about/icon5.png";
import icon5 from "../../../../assets/about/icon6.png";
import icon6 from "../../../../assets/about/icon.png";
import Image from "next/image";

const WorkingProcess = () => {
  const workingData = [
    {
      id: 1,
      title: "ব্যবসায়িক কৌশল বিশেষজ্ঞ",
      description:
        "দীর্ঘমেয়াদী কৌশলগত পরিকল্পনা এবং কার্যকরী সমাধান প্রদানকারী।",
      img: icon2,
    },
    {
      id: 1,
      title: "বাজার বিশ্লেষক",
      description: "বাজার গবেষণা এবং নতুন সুযোগ সনাক্ত করার বিশেষজ্ঞ।    ",
      img: icon,
    },
    {
      id: 1,
      title: "আইটি বিশেষজ্ঞ",
      description:
        "তথ্য প্রযুক্তি সংক্রান্ত সকল সমস্যার সমাধান প্রদানকারী এবং আইটি সেবা উন্নতকারী।",
      img: icon6,
    },
    {
      id: 1,
      title: "বিক্রয় ও মার্কেটিং বিশেষজ্ঞ",
      description:
        " বিক্রয় বৃদ্ধির কৌশল এবং কার্যকরী মার্কেটিং পরিকল্পনা প্রস্তুতকারী।",
      img: icon4,
    },
    {
      id: 1,
      title: "ফান্ডিং বিশেষজ্ঞ: ",
      description: "সঠিক বিনিয়োগ পরিকল্পনা এবং তহবিল সংগ্রহে সহায়ক।",
      img: icon3,
    },
    {
      id: 1,
      title: "ব্যবসায়িক কৌশল বিশেষজ্ঞ",
      description:
        "দীর্ঘমেয়াদী কৌশলগত পরিকল্পনা এবং কার্যকরী সমাধান প্রদানকারী।",
      img: icon2,
    },
  ];
  return (
    <div className="sectionMargin">
      <div className="grid grid-cols-1  md:grid-cols-2 place-items-center  gap-10">
        <p className="lg:w-[400px] leading-9">
          আমাদের বিশেষজ্ঞ দল বিভিন্ন ক্ষেত্রের দক্ষ ও অভিজ্ঞ পেশাদার দ্বারা
          গঠিত। তাদের অভিজ্ঞতা ও দক্ষতা আমাদের ক্লায়েন্টদের সেরা সেবা প্রদানে
          সক্ষম করে। আমাদের দলে রয়েছেন:
        </p>
        <div className="leading-8 relative">
          <div className="divider"></div>
          <h1>It’s always a joy to hear </h1>
          <h1> that the work we do, has</h1>
          <h1>positively reviews.</h1>
        </div>
      </div>
      <div className="workingWraps">
        <div className="grid grid-cols-1 place-content-center place-items-start lg:grid-cols-3 md:grid-cols-2  gap-5 mt-16">
          {workingData.map((data) => (
            <div key={data.id} className="workingCard ">
              <Image className="w-16" src={data.img} alt="icon" />
              {/* <FaArtstation className="text-[#1591A3]" size={50} /> */}
              <div className="space-y-3 mt-8">
                <h4>{data.title}</h4>
                <p className="text-s">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
