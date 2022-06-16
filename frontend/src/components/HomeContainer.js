import React from 'react'
import { FaTelegramPlane,FaPhoneAlt,FaShoppingCart } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

const HomeContainer = () => {
    return (
        <>
         <center> <div className="row container shadow-lg p-5">
             <div className="col-md-3">
               <center>
                    <FaTelegramPlane style={{color:"green",height:"60px",width:"60px"}}/>
                   <h5 className="mt-4">FREE SHIPPING</h5>
                   <h6>ON ORDER ABOVE Rs500</h6>
               </center>
             </div>
             <div className="col-md-3">
               <center>
                   <BiSupport style={{color:"green",height:"60px",width:"60px"}}/>
                   <h5 className="mt-4">SUPPORT</h5>
                   <h6>LIFE TIME SUPPORT 24/7</h6>
               </center>
             </div>
             <div className="col-md-3">
               <center>
                   <IoIosPeople style={{color:"green",height:"60px",width:"60px"}}/>
                   <h5 className="mt-4">HELP PARTNER</h5>
                   <h6>HELP ALL ASPECTS</h6>
               </center>
             </div>
             <div className="col-md-3">
               <center>
                   <FaPhoneAlt style={{color:"green",height:"55px",width:"55px"}}/>
                   <h5 className="mt-4">CONTACT WITH US</h5>
                   <h6>+91887875647</h6>
                </center>
             </div>
          </div>  
          </center>
        </>
    )
}

export default HomeContainer
