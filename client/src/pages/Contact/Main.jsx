import React from "react";
import Form from "./Form";
const Main = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        className="flex-1 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/images/contact.jpg')`,
          height: "100%",
        }}
      >
        <div className="text-left bg-gray-800 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">
          Artisanat Intemporel Solide
          </h1>
        </div>
      </div>
      <div className="flex-1">
      
        <Form />
      </div>
    </div>
  );
};

export default Main;
