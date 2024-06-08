'use client'

import React, { useEffect } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const BackTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("button");
      if (button) {
        if (window.scrollY > 50) {
          button.classList.add("scrollToTopBtn");
        } else {
          button.classList.remove("scrollToTopBtn");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <button onClick={scrollToTop} id="button">
        <HiArrowNarrowUp className="size-8" />
      </button>
    </div>
  );
};

export default BackTopButton;
