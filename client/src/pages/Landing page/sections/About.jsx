import React from "react";
import about1 from "/src/assets/images/about/about1.jpg";
import about2 from "/src/assets/images/about/about2.jpg";
import PimBig from "/src/assets/pim-big-white.png";
import shop from "/src/assets/2Ds/shop.png";

import AboutText from "../../../components/AboutText";
import AboutVisit from "../../../components/AboutVisit";

export const About = () => {
  return (
    <div className="h-max">
      <AboutText />
      <div className="flex flex-col w-full" >
        <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${about1})` }}>
          <img src={about1} alt="abous-us1" />
        </div>

        <div className="flex w-full ">
          <img className="w-[50%] phone:max-md:w-0" src={about2} alt="" />

          <div className="w-[25%] phone:max-md:w-1/2 flex flex-col bg-primary items-center justify-center gap-6 phone:max-md:gap-2 p-6 phone:max-md:text-sm">
            <img className="" src={shop} alt="" />
            <p className="text-bg text-center ">accéder à l'atelier pimWoods</p>
            <AboutVisit />
          </div>

          <div className="w-[25%] phone:max-md:w-1/2 flex flex-col bg-secondary items-center justify-center gap-6 p-10 phone:max-md:p-5">
            <img src={PimBig} className="w-1/2 h-1/2" alt=" " />
            <p className="text-text-white text-3xl phone:max-md:text-base font-semibold tracking-wide ">PimWoods</p>
          </div>
        </div>
      </div>
    </div>
  );
};
