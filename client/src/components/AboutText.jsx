import React from 'react'

const AboutText = () => {
    return (
        <div className=" flex items-end gap-6 mt-20 mb-6 px-12 py-8">
            <div className="basis-[50%]">
                <h1 className=" text-darkBrown text-7xl md:max-lg:text-6xl font-bold flex flex-col gap-6">
                    <p>À propos </p>
                    <p>de PimWoods</p>
                </h1>
            </div>

            <div className=" basis-[45%] flex flex-col gap-[3rem] font-bold text-darkBrown">
                <p>
                    Nous sommes une entreprise située à Alger en Algérie, spécialisée dans le domaine du bois.
                </p>
                <p>
                    Nous offrons une gamme variée de produits en bois, y compris des meubles, des articles de décoration, et des matériaux de construction.
                </p>
            </div>
        </div>
    )
}

export default AboutText