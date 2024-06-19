import React, { useState } from 'react';

const ContactForm = () => {
   
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    inquiryType: 'Produit',
    category: 'Cuisine',
    productName: 'Table à manger',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="flex flex-col bg-bg h-screen">
      
      
        <form className="w-full flex flex-col gap-2 p-10 " onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-6">Contactez-nous !</h2>
          <div className="flex gap-4 mb-2" >
            <div className="flex-1">
              <label className=" text-darkBrown text-sm font-medieum " htmlFor="firstName">
                Prénom
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder = "Jane"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
                required
              />
            </div>
            <div className="flex-1">
              <label className=" text-darkBrown text-sm font-medieum " htmlFor="lastName">
                Nom
              </label>
              <input
                type="text"
                placeholder = "Smitherton"
                
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor "
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-darkBrown text-sm font-medieum  mb-2" htmlFor="inquiryType">
              Type de demande
            </label>
            <select
              name="inquiryType"
              id="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              >
              <option value="Produit">Produit</option>
              {/* Ajoutez plus d'options si nécessaire */}
            </select>
          </div>
          <div className='flex gap-4 mb-2'>
          <div className="flex-1">
            <label className="block text-darkBrown text-sm font-medieum  mb-2" htmlFor="category">
              Catégorie
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              >
              <option value="Cuisine">Cuisine</option>
              {/* Ajoutez plus d'options si nécessaire */}
            </select>
          </div>
          <div className="flex-1">
            <label className=" text-darkBrown text-sm font-medieum  mb-2" htmlFor="productName">
              Nom du produit
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              />
          </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-darkBrown text-sm font-medieum  mb-2" htmlFor="email">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder='email@janesfakedomain.com'

              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-darkBrown  text-sm font-medieum mb-2" htmlFor="message">
              Votre message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='votre message ici...'
              className="w-full h-36 px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-red-200"
          >
            Soumettre
          </button>
        </form>
      </div>
  
  );
};

export default ContactForm;
