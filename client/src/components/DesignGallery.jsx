import React from 'react';
import { designs } from '../content/designs';
import DesignCard from './DesingCard';

const DesignGallery = () => {
  return (
    <div className="flex justify-around gap-2 ">
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
