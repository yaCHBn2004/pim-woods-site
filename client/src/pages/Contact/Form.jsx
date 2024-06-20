import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const ContactForm = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedProductInfo = localStorage.getItem("productInfo");
    if (storedProductInfo) {
      const productInfo = JSON.parse(storedProductInfo);
      setProductTitle(productInfo.title);
      setProductPrice(productInfo.price);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const formData = {
        username: name,
        useremail: email,
        titleproduct: productTitle,
        typecommand: inquiryType,
        priceproduct: productPrice,
        productcategory: productCategory,
        message: message
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/submit-form/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      localStorage.removeItem("productInfo");
      toast.success("E-mail envoyé avec succès");
      setName("");
      setEmail("");
      setFamilyName("");
      setProductTitle("");
      setProductCategory("");
      setInquiryType("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Envoi échoué");
    } finally {
      setLoading(false); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "familyName") setFamilyName(value);
    if (name === "productTitle") setProductTitle(value);
    if (name === "productCategory") setProductCategory(value);
    if (name === "inquiryType") setInquiryType(value);
    if (name === "message") setMessage(value);
  };

  return (
    <div className="flex flex-col bg-bg h-full w-full">
      <form className="w-full flex flex-col gap-6 pl-10 pr-10 pt-32 pb-32 " onSubmit={handleSubmit}>
      <Toaster />
      <h1 className=' text-darkBrown text-6xl font-bold mb-8'>Contactez-nous!</h1>
        <div className="flex gap-4 ">
          <div className="flex-1  flex flex-col gap-2">
            <label className="text-darkBrown text-sm font-medium " htmlFor="name">Prénom</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
              value={name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-darkBrown text-sm font-medium " htmlFor="familyName">Nom</label>
            <input
              type="text"
              placeholder="Smitherton"
              name="familyName"
              id="familyName"
              value={familyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
  <label className=" text-darkBrown text-sm font-medium " htmlFor="inquiryType">Type de demande</label>
  <select
    name="inquiryType"
    id="inquiryType"
    value={inquiryType}
    onChange={handleChange}
    className="w-full px-3 py-2 border  border-primary text-placeholderColor rounded-lg bg-transparent placeholder-placeholderColor"
    
  >
    <option value="Produit">Produit</option>
    <option value="Service">Service</option>
    <option value="Support">Support</option>
    
  </select>
</div>
        
        <div className=" flex flex-col gap-2">
          <label className="block text-darkBrown text-sm font-medium " htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="email@janesfakedomain.com"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
            required
          />
        </div>
        <div className="">
          <label className="block text-darkBrown text-sm font-medium mb-2" htmlFor="message">Votre message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            placeholder="votre message ici..."
            className="w-full h-36 px-3 py-2 border border-primary rounded-lg bg-transparent placeholder-placeholderColor"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:shadow-sm hover:shadow-secondary"
        >
          {loading ? "Loading..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
