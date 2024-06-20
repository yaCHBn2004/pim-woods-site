import React from 'react'

const AboutText = () => {
    return (
        <div className=" flex items-end gap-6 mt-20 mb-6 px-12 py-8">
            <div className="basis-[50%]">
                <h1 className=" text-darkBrown text-7xl font-bold flex flex-col gap-6">
                    <p>À propos </p>
                    <p>de PimWoods</p>
                </h1>
            </div>

            <div className=" basis-[45%] flex flex-col gap-[3rem] font-bold text-darkBrown">
                <p>
                    Welcome to PimWoods,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
            </div>
        </div>
    )
}

export default AboutText