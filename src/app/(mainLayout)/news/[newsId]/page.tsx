
import Image from "next/image";
import news from "../../../../assets/news/news5.jpg";
import "../../news/news.css";
import Container from "@/components/ui/HomePage/Container/Container";
import { Button, Divider, Grid } from "@mui/material";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import facebook from "../../../../assets/icon/facebook.png";
import linkedIn from "../../../../assets/icon/linkedin.png";
import twitter from "../../../../assets/icon/twitter.png";
import user from "../../../../assets/news/user.jpg";
import instagram from "../../../../assets/icon/instagram.png";
import gallery from "../../../../assets/news/gallery.jpg";
import gallery2 from "../../../../assets/news/gallery2.jpg";
import gallery3 from "../../../../assets/news/gallery3.jpg";
import gallery4 from "../../../../assets/news/gallery4.jpg";
import gallery5 from "../../../../assets/news/gallery5.jpg";
import gallery6 from "../../../../assets/icon/instagram.png";
import { HiChevronRight } from "react-icons/hi";

import React from "react";
import CommentForm from "../_components/CommentForm";
import ReactHtmlParser from "react-html-parser";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-3xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    } 
    
    // else if (element.type === "img") {
    //   return (
    //     <img
    //       key={index}
    //       className="w-full h-auto object-cover mb-4 hidden "
    //       src={element.props.src}
    //       alt="Blog Image"
    //     />
    //   );
    // } 
    
    else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};



interface BlogId {
    params: {
        newsId: string
    }
}

// export const generateStaticParams = async ()=>{
//     const res = await fetch('http://localhost:5000/api/v1/blogs');
//     const blogs = await res.json();
//     return blogs.slice(0,3).map((blog:Blog)=>({
//         blogId:blog.id
//     }))
// }


const News = async ({ params }: BlogId) => {
    const { newsId } = params
    console.log('blog id erere',newsId)
    const res = await fetch(`http://localhost:5000/api/v1/blogs/${newsId}`, {
        cache: "no-store"
    });
    const blog = await res.json()
    console.log('blog data ',blog)


    const buttonStyle = {
        background: "#ddd",
        color: "black",
        borderRadius: "5px",
    };
    const commentData = [
        {
            id: 1,
            name: "Riva Collins",
            date: "Jun 9, 2024 - 2:07 am",
            description:
                "It’s no secret that the digital industry is booming. From   exciting startups to need ghor global and brands, companies    are reaching out.",
        },
        {
            id: 1,
            name: "Riva Collins",
            date: "Jun 9, 2024 - 2:07 am",
            description:
                "It’s no secret that the digital industry is booming. From   exciting startups to need ghor global and brands, companies    are reaching out.",
        },
    ];

    const formatDate = (dateString: string) => {
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("en-US",);
      };

    return (
        <>
            <div className="serviceDetailsWrap aboutWraps">
                <div className="aboutContent">
                    {/* <h1>What we are capable to usually discovered.</h1> */}
                    <h1>{blog?.data.title}</h1>
                </div>
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 mt-10  gap-10 ">
                    <div className="lg:col-span-4   ">
                        <div className="px-10 ">
                            <h4 className="mb-5">Categories </h4>
                            <div className="space-y-5">
                                <div>
                                    <div className="flex items-center justify-between w-full ">
                                        <div className="flex items-center ">
                                            <HiChevronRight />
                                            <p>Business & Strategy </p>
                                        </div>
                                        <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                                            5
                                        </div>
                                    </div>
                                    <Divider sx={{ marginTop: "10px" }} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between w-full ">
                                        <div className="flex items-center ">
                                            <HiChevronRight />
                                            <p>Business & Strategy </p>
                                        </div>
                                        <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                                            10
                                        </div>
                                    </div>
                                    <Divider sx={{ marginTop: "10px" }} />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between w-full ">
                                        <div className="flex items-center ">
                                            <HiChevronRight />
                                            <p>Business & Strategy </p>
                                        </div>
                                        <div className="rounded-sm bg-[#ddd] border w-6 p-2  h-6  text-center flex justify-center items-center text-sm ">
                                            7
                                        </div>
                                    </div>
                                    <Divider sx={{ marginTop: "10px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 px-10 ">
                            <div>
                                <h4 className="mb-5">Recent News </h4>
                                <div className="space-y-5">
                                    <div className="space-y-8">
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
                                            <Image
                                                className="w-20 h-20 rounded-full object-cover "
                                                src={news}
                                                alt="news"
                                            />
                                            <div>
                                                <h5 className="font-semibold">
                                                    Strategy for Norway’s Peion to Fund Global.{" "}
                                                </h5>
                                                <small>June 5, 2024</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
                                            <Image
                                                className="w-20 h-20 rounded-full object-cover "
                                                src={news}
                                                alt="news"
                                            />
                                            <div>
                                                <h5 className="font-semibold">
                                                    Strategy for Norway’s Peion to Fund Global.{" "}
                                                </h5>
                                                <small>June 5, 2024</small>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
                                            <Image
                                                className="w-20 h-20 rounded-full object-cover "
                                                src={news}
                                                alt="news"
                                            />
                                            <div>
                                                <h5 className="font-semibold">
                                                    Strategy for Norway’s Peion to Fund Global.{" "}
                                                </h5>
                                                <small>June 5, 2024</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-100 px-10">
                            <h4 className="mb-5">Gallery </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <Image className="w-28" src={gallery2} alt="gallery" />
                                <Image className="w-28" src={gallery3} alt="gallery2" />
                                <Image className="w-28" src={gallery4} alt="gallery3" />
                                <Image className="w-28" src={gallery5} alt="gallery4" />
                                <Image className="w-28" src={gallery} alt="gallery5" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 ">
                        <div className="newsDetailsRightSideWrap text-[15px]">
                            <Image src={news} className="rightSideImg" alt="news" />
                            <div className="my-5 px-5 ">
                                <div className="flex items-center space-x-3 ">
                                    <FaCalendarAlt />
                                    <span>{formatDate(blog?.data?.createdAt)}</span>
                                    <FaUser />
                                    <span> {blog?.data?.author}</span>
                                </div>
                                <Divider sx={{ marginTop: "2px" }} />
                            </div>

                            <div className="blogContent px-5 space-y- py-5 rounded-md ">
                            {renderContent(blog?.data?.description)}
                                {/* <div>
                                    <p>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum The man, who is
                                        in a stable condition in hospital, has “potentially
                                        life-changing injuries” after the overnight attack in
                                        Garvagh, County Lono donderry. He was shot in the arms and
                                        legs.”What sort of men would think it is accepttable to sub
                                        ject a young girl to this level of brutality and violence?
                                    </p>
                                    <p className="mt-5 ">
                                        “Every child has the right to feel safe and protected in
                                        their own home – how is this poor child going to sleep
                                        tonight or in coming nights? What are the long term effects
                                        on her going to be?”
                                    </p>
                                </div>
                                <div>
                                    <h3>Content without backward-compatible data.</h3>
                                    <p className="mt-2 leading-6">
                                        Their community. I wonder how they wou if their own child
                                        witnessed such a level of violence?
                                    </p>
                                    <p className="mt-2 leading-6">
                                        “There is absolutely no justification for an attack like
                                        this in our communities and we must all work together to
                                        bring those responsible to justice and to stop this from
                                        happening to another child.”
                                    </p>

                                    <p className="mt-2 leading-6">
                                        Earlier this month, the PSNI launched a hard-hitting
                                        advertisement campaign aimed at changing public attitudes to
                                        paramilitary attacks.
                                    </p>
                                </div>
                                <div>
                                    <h3>A Kentucky woman who was accused last year.</h3>
                                    <p className="mt-2 leading-6">
                                        Their community. I wonder how they wou if their own child
                                        witnessed such a level of violence?
                                    </p>
                                    <p className="mt-2 leading-6">
                                        The intruders chased the girl in the house and threatened
                                        her when she hid from them, according to the PSNI Limavady
                                        Facebook page.
                                    </p>

                                    <p className="mt-2 leading-6">
                                        “She came out petrified with her Piggy Bank, HER PIGGY BANK!
                                        hoping that the men would take it and leave her dad alone,”
                                        one outraged officer wrote.
                                    </p>
                                </div>
                                <div>
                                    <h3>A Kentucky woman who was accused last year.</h3>
                                    <p className="mt-2 leading-6">
                                        The intruders chased the girl in the house and threatened
                                        her when she hid from them, according to the PSNI Limavady
                                        Facebook page.
                                    </p>
                                    <p className="mt-2 leading-6">
                                        “She came out petrified with her Piggy Bank, HER PIGGY BANK!
                                        hoping that the men would take it and leave her dad alone,”
                                        one outraged officer wrote. especially in capital projects
                                        and the suppliers and consultants that work for you know the
                                        value of a customer like that. As a consultant executing two
                                        projects for a large multinational, I realise how very
                                        difficult it sometimes can be on the receiving.
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        <div className="socialMedia flex-col md:flex-row gap-5 lg:gap-0  flex justify-between   mt-10 ">
                            <div className="flex flex-wrap gap-2 space-x-2 items-center ">
                                <b>Tags:</b>
                                <Button sx={buttonStyle}>Builder </Button>
                                <Button sx={buttonStyle}>Cloud </Button>
                                <Button sx={buttonStyle}>Map</Button>
                            </div>
                            <div className="flex  items-center space-x-3 ">
                                <span>Share: </span>
                                <Image className="w-10" src={facebook} alt="facebook" />
                                <Image className="w-10" src={instagram} alt="facebook" />
                                <Image className="w-10" src={twitter} alt="facebook" />
                                <Image className="w-10" src={linkedIn} alt="facebook" />
                            </div>
                        </div>
                        <Divider sx={{ marginTop: "20px" }} />
                        <div className="comment sectionMargin ">
                            <div className="mt-5">
                                <h4 className="mb-8 text-[#1591A3]">5 Comments </h4>
                            </div>
                            <div className="grid grid-rows-1 gap-10">
                                {commentData.map((data) => (
                                    <div
                                        key={data.id}
                                        className="flex flex-col  justify-between gap-10 "
                                    >
                                        <Image
                                            className="w-20 h-20 rounded-full "
                                            src={user}
                                            alt="user"
                                        />
                                        <div className="commentCard">
                                            <div className="absolute top-3 right-3">
                                                <Button sx={{ width: "70px", height: "35px" }}>
                                                    Reply <HiChevronRight className="text-[#fff]" />
                                                </Button>
                                            </div>
                                            <div>
                                                <h4>{data.name}</h4>
                                                <small>{data.date}</small>
                                            </div>
                                            <p className="mt-5 ">{data.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <CommentForm />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default News;
