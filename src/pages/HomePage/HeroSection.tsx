import React from "react";
import styled from "styled-components";

let Obilo = require("../../assets/heroLanding.jpg");
const HeroSection = () => {
  return (
    <Hero>
      <div className="content flex items-center justify-between w-[100%] pt-[3rem] gap-2 sm:flex sm:flex-col-reverse sm:px-[1rem] sm:pt-[2rem] sm:gap-10 relative ">
        <div className="w-[50%] sm:w-[100%] relative">
          <div className="insideHeroLeft flex flex-col gap-10 sm:gap-2">
            <h1 className="text-6xl text-[Secondary] font-bold sm:text-2xl">
              Get the Lastest Articles on{" "}
              <span className="text-primary">BlogXite</span>
            </h1>
            <p className="text-xl sm:text-[1rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nobis voluptates aut expedita cumque quaerat enim exercitationem,
              quam minus nostrum eveniet et nemo corrupti repellat pariatur.
              Amet ducimus quos cupiditate?
            </p>
            <p className="text-xl sm:text-[1rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nobis voluptates aut expedita cumque quaerat enim exercitationem,
              quam minus nostrum eveniet et nemo corrupti repellat pariatur.
              Amet ducimus quos cupiditate?
            </p>
            <div className="sm:w-[100%] flex gap-4 flex-col mt-4">
              <div>
                <input
                  type="text"
                  placeholder="search article"
                  className="border w-[100%] border-blue-500 px-4  py-2 rounded-full text-1xl"
                />
              </div>
              <button className="bg-primary border-blue-500 px-2 py-2 rounded-full text-white hover:bg-blue-500 hover:text-white transition-all duration-500 text-1xl">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] overflow-hidden flex justify-end items-end landingIMG sm:w-[100%] rounded">
          <img src={Obilo} alt="" />
        </div>
      </div>
      <div className="lowHero"></div>
    </Hero>
  );
};

const Hero = styled.div`
  .landingIMG {
    width: 50rem;
    border-radius: 6rem 0 0rem;
  }
  .content {
    padding: 5rem 0 1rem 10rem;
  }
  .lowHero {
  }

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1024px) {
    .landingIMG {
      width: 100%;
      border-radius: 1rem;
    }
    .content {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    .landingIMG {
      width: 100%;
      border-radius: 1rem;
    }
    .content {
      padding: 1rem;
    }
  }
`;
export default HeroSection;
