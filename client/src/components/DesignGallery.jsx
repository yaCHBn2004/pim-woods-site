import React from 'react';
import { designs } from '../content/designs';
import DesignCard from './DesingCard';

const DesignGallery = () => {
  return (
    <div className="flex w-full justify-between">
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
