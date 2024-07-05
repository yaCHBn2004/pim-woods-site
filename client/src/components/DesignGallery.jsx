import React from 'react';
import { designs } from '../content/designs';
import DesignCard from './DesingCard';

const DesignGallery = () => {
  return (
    <div className="flex phone:max-md:flex-col phone:max-md:space-y-[3rem] phone:max-md:items-center w-full justify-between">
      {designs.map(design => (
        <div key={design.id}> 
          <DesignCard 
            title={design.title}
            image={design.image}
            designer={design.designer}
          />
        </div>
      ))}
    </div>
  );
};

export default DesignGallery;
