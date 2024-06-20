import React, { useEffect } from "react";
import Form from "./Form";
import contactPic from "../../assets/images/contact.jpg";
const Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex min-h-screen items-center ">
      <div
        className="flex flex-grow h-[140vh] w-full basis-[47%]  "
        style={{
          backgroundImage: `url('${contactPic}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <h1 className=' text-6xl m-auto text-bg font-semibold w-[70%] leading-[5rem]'>Timeless Solid Crafts</h1>
      </div>

      <div className=" h-[140vh] basis-[53%] flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default Main;
