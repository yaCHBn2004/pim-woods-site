import React from 'react';
import { designs } from '../../../designs';
import DesignCard from './DesingCard';

const DesignGallery = () => {
  return (
    <div className="flex justify-around  ">
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
