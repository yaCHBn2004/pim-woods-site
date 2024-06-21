import React from 'react'
import GoToFooter from '../utils/GoToFooter'
import inarrow from "../assets/icons/arrows/in-arrow.svg";
import { scrollToBottom } from '../hooks/scrollToFooter';

const AboutVisit = () => {
    return (
        <div className="text-secondary flex items-center gap-2 cursor-pointer transition-transform duration-300 transform hover:translate-x-2 hover:text ">
            <GoToFooter />
            <img className="" onClick={scrollToBottom} src={inarrow} alt="" />
        </div>
        )
}

export default AboutVisit