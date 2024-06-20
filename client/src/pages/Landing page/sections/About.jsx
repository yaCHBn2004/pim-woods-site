import React from "react";
import about1 from "/src/assets/images/about1.jpg";
import about2 from "/src/assets/images/about2.jpg";
import PimBig from "/src/assets/logo-PIM-big.png";
import shop from "/src/assets/2Ds/shop.png";

import AboutText from "../../../components/AboutText";
import AboutVisit from "../../../components/AboutVisit";

export const About = () => {
  return (
    <div className="h-max">
      <AboutText />

      <div className="flex flex-col" >
        <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${about1})` }}>
          <img src={about1} alt="abous-us1" />
        </div>

        <div className="flex">
          <img className="w-3/5" src={about2} alt="" />

          <div className="w-1/3 flex flex-col bg-primary items-center justify-center gap-6 p-10">
            <img className="" src={shop} alt="" />
            <p className="text-bg ">accéder à l'atelier pimWoods</p>
            <AboutVisit />
          </div>

          <div className="w-1/3 flex flex-col bg-secondary items-center justify-center gap-6 p-10">
            <img src={PimBig} alt="" />
            <p className="text-text-white text-3xl font-semibold ">PimWoods</p>
          </div>
        </div>
      </div>
    </div>
  );
};
