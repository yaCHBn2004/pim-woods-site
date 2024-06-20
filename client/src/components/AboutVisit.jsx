import React from 'react'
import GoToFooter from '../utils/GoToFooter'
import inarrow from "../assets/icons/arrows/in-arrow.svg";

const AboutVisit = () => {
    return (
        <div className="text-secondary flex items-center gap-2 cursor-pointer ">
            <GoToFooter />
            <img className="" src={inarrow} alt="" />
        </div>
        )
}

export default AboutVisit