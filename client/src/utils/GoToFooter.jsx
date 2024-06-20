import React from 'react';
import { scrollToBottom } from '../hooks/scrollToBottom';

function GoToFooter() {
  

  return (
    <button onClick={scrollToBottom} className="font-bold cursor-pointer">
      Voir la localisation
    </button>
  );
}

export default GoToFooter;
