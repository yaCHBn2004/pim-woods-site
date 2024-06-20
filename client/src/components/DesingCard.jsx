import React from 'react';
import { designs } from '../content/designs';

const DesignCard = ({ title, image, designer }) => {
  return (
    <div className="relative">
      <img src={image} alt={title} className="w-full h-auto cursor-pointer hover:opacity-45" />
      <h2 className="absolute top-4 left-4 text-2xl font-bold text-black">{title}</h2>
      <p className="absolute bottom-4 left-4 text-sm text-black">Design by {designer}</p>
    </div>
  );
};
export default DesignCard;