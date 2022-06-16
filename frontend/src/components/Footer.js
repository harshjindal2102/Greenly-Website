import React from 'react'
import { FaRupeeSign,FaInstagram,FaPinterestP,FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <>
           <div className="mb-5 container">
               <p className="text-dark">Copyright © 2021 by HJunit. Powered by Shopify<span className="float-right">INDIA</span></p>
               <hr className="mt-3"/>

               <div className="row">
                
                   <a className="ml-4"><h6>Gift Center</h6></a>
                
                
                   
                   <a className="ml-4"><h6>FAQ</h6></a>
                
                
                   
                   <a className="ml-4"><h6>Terms of Use</h6></a>
                
                
                   
                   <a className="ml-4"><h6>Privacy Policy</h6></a>
                
                
                   
                   <a className="ml-4"><h6>Buying Guides</h6></a>
                
                   </div>
                 
                  <div className="float-right">
                   <button className="btn btn-outline-success ml-2 "><FaFacebookF /></button>
                   <button className="btn btn-outline-success ml-2"><FaInstagram/></button>
                   <button className="btn btn-outline-success ml-2"><FaPinterestP/></button>
                   </div>
                 
                 
               
           </div> 
        </>
    )
}

export default Footer

