import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





function Footer() {
  return (
    <div style={{height:"400px", backgroundColor:"#b4b4b4"}} className='d-flex justify-content-center align-items-center flex-column text-light'>
        <h1>Contact us</h1>
        <h3> <MdAttachEmail /> resumebuilder@gmail.com</h3>
        <h3> <FaPhoneAlt />
8899556622</h3>
        <h2>Connect with Us</h2>
        <div className='my-5 fs-5'>
            <FaWhatsapp />
            <FaFacebook  className='mx-2'/>
            <FaInstagram />



        </div>

        <h4>Designed & Built with using React</h4>
    </div>
  )
}

export default Footer