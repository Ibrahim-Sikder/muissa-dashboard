"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "@/components/ui/HomePage/Container/Container";
import { useState } from "react";

export default function AskAndQuestion() {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title:
        "Why is Muissa Business Consulting Ltd. the best company for business consulting?",
      description:
        "Muissa Business Consulting Ltd. is the best business consulting company because of our commitment to delivering exceptional outcomes tailored to your needs. Our proven efficiency and results speak louder than words.",
    },
    {
      title: "What is business consulting?",
      description:
        "Business consulting involves various essential activities performed by consultants and experts to help businesses improve their performance. This includes researching, developing strategies, designing solutions, and implementing plans to achieve business goals.",
    },
    {
      title: "How does business consulting work?",
      description:
        "Our consultants analyze your business, identify areas for improvement, and develop customized strategies. We then implement and monitor these strategies to ensure your business achieves its goals.",
    },
    {
      title:
        "Can I protect my business idea with Muissa Business Consulting Ltd.?",
      description:
        "Yes, you can. If your idea is unique and new, we can assist you in taking the necessary steps to protect it. Confidentiality is guaranteed through our non-disclosure agreements.",
    },
    {
      title: "Can my business strategy be updated in the future?",
      description:
        "Absolutely. We ensure that your business strategies are flexible and can be updated according to your evolving needs.",
    },
    {
      title: "How to start with Muissa Business Consulting Ltd.?",
      description:
        "To start with us, follow these steps: Planning, Obtaining Information, Initial Consultation, Developing a Strategy, Implementing the Plan, and Continuous Improvement.",
    },
    {
      title: "How much time and budget is required to complete a project?",
      description:
        "The time and budget required depend on the complexity and scope of your project. After discussing every aspect, Muissa Business Consulting Ltd. provides the closest estimated time and budget.",
    },
    {
      title: "Is my business idea safe with Muissa Business Consulting Ltd.?",
      description:
        "Your privacy is our priority. All client information is protected under strict non-disclosure agreements, ensuring complete confidentiality.",
    },
    {
      title: "What is the biggest business consulting company in Bangladesh?",
      description:
        "With a dedicated team of experts and consultants, Muissa Business Consulting Ltd. is one of the leading business consulting companies in Bangladesh.",
    },
    {
      title: "Which is the best business consulting company in Bangladesh?",
      description:
        "Our team members have top-notch qualifications and extensive experience in business consulting. This makes Muissa Business Consulting Ltd. the best consulting firm in Bangladesh.",
    },
    {
      title: "How many consulting companies are there in Bangladesh?",
      description:
        "There are over 500+ registered consulting companies in Bangladesh. Muissa Business Consulting Ltd. stands out due to our exceptional service and client success stories.",
    },
    {
      title: "Which is the best software consulting company?",
      description:
        "With highly skilled consultants and competitive pricing, Muissa Business Consulting Ltd. offers the best software consulting services, making us the top choice in Bangladesh.",
    },
    {
      title: "Which tools and methodologies are best for business consulting?",
      description:
        "We utilize a variety of tools and methodologies including SWOT analysis, Lean Six Sigma, and various project management tools to ensure effective business consulting.",
    },
    {
      title: "What is a business consulting framework?",
      description:
        "A business consulting framework provides a structured approach for solving business problems and improving performance, reducing the time and cost required for achieving results.",
    },
    {
      title: "How many registered consulting firms are in Bangladesh?",
      description:
        "Currently, there are over 800+ registered consulting firms in Bangladesh.",
    },
    {
      title: "How many tech consulting companies are there in Bangladesh?",
      description:
        "There are around 1200 startup tech consulting companies in Bangladesh. Muissa Business Consulting Ltd. excels due to our highly skilled team and comprehensive service offerings, making us the best choice for your consulting needs.",
    },
  ];

  const toggle = (idx: any) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <Container>
      <div className="sectionMargin ">
        <div className="grid grid-cols-1  md:grid-cols-2 place-items-center  gap-10">
          <p className="lg:w-[400px] leading-9">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit sed do eiu smod tempor incididunt ut labore.
          </p>
          <div className="leading-8 relative">
            <div className="divider"></div>
            <h1> You can learn more</h1>
            <h1> from our asked questions</h1>
           
          </div>
        </div>
      </div>
      <div className="mx-4 mt-10 rounded-lg border font-sans my-10">
        {accordionsData.map((PerAccordion, idx) => (
          <div key={idx} className="border-b p-4">
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py text-black font-medium"
            >
              <span className="text-xl">{PerAccordion.title}</span>
              <span className="rounded-full bg-blue-100 p-2">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-[#00A2FF]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />{" "}
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-900 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">{PerAccordion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
