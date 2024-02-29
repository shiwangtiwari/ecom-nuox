import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
    <p>© 2024 nuOx. All Rights Reserved.</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
      <AiFillFacebook />
      <IoLogoWhatsapp />
    </p>
    </div>
  )
}

export default Footer

