import React from "react";
import about1 from "/src/assets/images/about1.jpg";
import PimBig from "/src/assets/logo-PIM-big.png";
import about2 from "/src/assets/images/about2.jpg";
import inarrow from "/src/assets/icons/arrows/in-arrow.svg";
import shop from "/src/assets/2Ds/shop.png";
import GoToFooter from '../../../utils/GoToFooter';
export const About = () => {
  return (
    <div className=" flex flex-col  ">
      <div className=" flex gap-24 pt-40 pb-12   h-1/2 ">
        <div className="flex flex-col basis-[40%]  pl-24  gap-8">
          <h1 className=" text-darkBrown text-6xl font-bold  flex flex-col gap-6">
            {" "}
            <p>À propos </p>
            <p> PimWoods</p>
          </h1>
        </div>
        <div className="felx flex-col w-1/2 font-bold text-darkBrown">
          <p>
            Vous avez des questions ou simplement envie de discuter ?
            Contactez-nous ! Contactez PimWoods par téléphone,
          </p>
          <br /> <br />
          <p>
            Vous avez des questions ou simplement envie de discuter ?
            Contactez-nous ! Contactez PimWoods par téléphone, e-mail ou réseaux
            sociaux, ou passez nous rendre visite dans notre atelier. Votre
            expérience avec notre mobilier nous importe, et nous sommes là pour
            la rendre exceptionnelle
          </p>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="w-screen">
          <img className="w-full" src={about1} alt="" />
        </div>
        <div className="flex ">
          <img className="w-3/5" src={about2} alt="" />
          <div className="w-1/3 flex flex-col bg-primary items-center justify-center gap-6 p-10">
            <img className="" src={shop} alt="" />
            <p className="text-bg ">accéder à l'atelier pimWoods</p>
            <div className="text-secondary flex align-baseline  gap-2 cursor-pointer hover:ml-4"> <GoToFooter/>
             <img className=""src={inarrow} alt="" />
             </div>
             
        </div>
        <div className="w-1/3 flex flex-col bg-secondary items-center justify-center gap-6 p-10">
            <img className="w-full" src={PimBig} alt="" />
            <p className="text-bg text-xl font-bold ">PIMWOODS</p>
            
          </div>
      </div>
    </div>
    </div>
  );
};
