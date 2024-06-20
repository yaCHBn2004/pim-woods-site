import React from 'react';

const DesignCard = ({ title, image, designer }) => {
  return (
    <div className="relative m-auto cursor-pointer group">
      <img src={image} alt={title} className="w-full h-auto transition ease-linear group-hover:opacity-75 group-hover:scale-105" />
      <h2 className="absolute top-4 left-4 text-2xl font-bold text-black">{title}</h2>
      <p className="absolute bottom-4 left-4 text-sm text-black">Design by {designer}</p>
    </div>
  );
};

export default DesignCard;
