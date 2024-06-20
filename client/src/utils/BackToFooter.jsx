import React from 'react';

function BachToFooter() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollToBottom} className="font-bold cursor-pointer">
      Voir la localisation
    </button>
  );
}

export default BachToFooter;
