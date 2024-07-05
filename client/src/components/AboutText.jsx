import React from 'react'
import inarrow from '../assets/icons/arrows/in-arrow.svg'
import { Link } from 'react-router-dom'
const AboutText = () => {
    return (
        <div className=" flex phone:max-md:flex-col md:items-end gap-6 phone:max-md:space-y-6 mt-20 mb-6 px-12 py-8">
            <div className="basis-[50%]">
                <h1 className=" text-darkBrown text-7xl phone:max-md:text-5xl md:max-lg:text-6xl font-bold flex flex-col gap-6">
                    <p>À propos </p>
                    <p>de PimWoods</p>
                </h1>
            </div>

            <div className=" basis-[45%] flex flex-col gap-[2.3rem] font-bold text-darkBrown">
                <p>
                    Nous sommes une entreprise située à Alger en Algérie, spécialisée dans le domaine du bois.
                </p>
                <p>
                    Nous offrons une gamme variée de produits en bois, y compris des meubles, des articles de décoration, et des matériaux de construction.
                </p>
                <Link to={'/aboutus'} className="text-secondary flex items-center cursor-pointer gap-2 min-w-max transition-transform duration-300 transform hover:translate-x-2">
                    <p className='text-sm font-bold'>Voir plus</p>
                    <img src={inarrow} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default AboutText