import React from 'react';

const DesignCard = ({ title, image, designer }) => {
  return (
    <div className="relative group cursor-pointer ">
        <img src={image} alt={title} className=" h-[20rem] transition ease-linear group-hover:opacity-75 group-hover:scale-105" />
        <h2 className="absolute top-4 left-4 text-sm font-bold text-black">{title}</h2>
        <p className="absolute bottom-4 left-4 text-[0.7rem] text-black">Design by {designer}</p>
    </div>
  );
};

export default DesignCard;
