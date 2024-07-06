import React from 'react';
import { scrollToBottom } from '../hooks/scrollToFooter';

function GoToFooter() {
  

  return (
    <button onClick={scrollToBottom} className="font-bold cursor-pointer phone:max-md:text-xs">
      Voir la localisation
    </button>
  );
}

export default GoToFooter;
