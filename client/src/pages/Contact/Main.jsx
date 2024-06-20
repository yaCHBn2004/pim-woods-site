import React from "react";
import Form from "./Form";

const Main = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div
        className="flex-1 min-h-screen  flex  "
        style={{
          backgroundImage: `url('/src/assets/images/contact.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
         <h1 className=' text-6xl pb-36 m-auto text-bg font-semibold w-[70%]'>Timeless Solid <br /> <br /> Crafts</h1>
      </div>
      <div className="flex-1 min-h-screen flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default Main;
