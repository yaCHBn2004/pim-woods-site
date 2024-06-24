import React, { useEffect } from "react";
import Form from "./Form";
import contactPic from "../../assets/images/contact.jpg";

const Main = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex h-screen relative items-center ">
      <div
        className="flex flex-grow h-[100vh] w-full basis-[47%]  "
        style={{
          backgroundImage: `url('${contactPic}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <h1 className='absolute top-24 left-10 text-5xl text-bg font-semibold leading-[5rem] w-[30%] '>Timeless Solid Crafts</h1>
      </div>

      <div className=" h-[100vh] w-full basis-[53%] flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default Main;
