import React from 'react'

import {NavLink} from "react-router-dom";
import { FaUserAlt,FaPhoneAlt,FaCaretLeft,FaBackward } from "react-icons/fa";
import plantstore from "../Images/plantstore.jpg";
import plantstore1 from "../Images/plantstore1.jpg";

import interiorwall from "../Images/interiorwall.jpg"
// import flowershop from "../Images/flowershop.jpg"
// import flowervideo from "../Images/flowervideo.mp4"

import Footer from './Footer';
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
    return (
        <>
            <div id="aboutmain">
            <img id="aboutimage" style={{background:"rgba(0, 0, 0, 0.5)"}} src={interiorwall} className="img-fluid " />
            <center><h1 id="first" style={{position:"relative"}}>Contact Us</h1><h3 id="firsth3" className="mb-5" style={{position:"relative"}} ><NavLink id="firsth3" to="/">Home </NavLink> <FaCaretLeft className="m-2"/> Contact</h3></center>
             <div  className="row container-fluid" id="aboutfirst">
                <div className="mt-2 ml-5 col-md-5" >
                <img src={plantstore1} className="img-fluid" />
                </div>
                <div className="mt-5 pt-5 col-md-1" >
                 <button className="btn btn-lg btn-outline-success mt-5 ml-2 p-4 "><RiHome2Line  /></button><br/><br/>
                 <button className="btn btn-lg btn-outline-success mt-5 ml-2 p-4 "><AiOutlineMail/></button><br/><br/>
                 <button className="btn btn-lg btn-outline-success mt-5 ml-2 p-4 "><FiPhoneCall /></button>
                </div>
                 <div className="col-md-4">
                  <br/>
                  <h4 style={{marginTop:"100px"}}>ADDRESS</h4>
                  <p style={{fontSize:"12"}}>
                  KERELA : 23/89 PEACE PAGODA<br/>
                  DARJELLING : 51/23 ALLEPPEY<br/>
                  GOA : H134 ANJUNA
                     <br/><br/>
                     </p>
                     <h4 >E-mail</h4>   
                  <p style={{fontSize:"12"}}>     
                     KERELA : hjunitstore@gmail.com<br/>
                  DARJELLING : hjunitstore@gmail.com<br/>
                  GOA : hjunitstore@gmail.com
                  </p>
                  <br/><br/>
                  <h4 >Phone</h4>   
                  <p style={{fontSize:"12"}}>     
                     KERELA : +91 338754904<br/>
                  DARJELLING : +91 338754904<br/>
                  GOA : +91 338754904
                  </p>
                </div>
             </div>

             <div  className="row container-fluid ml-5 mb-5" id="autfirst">
               
                <div className="mt-5 col-md-6" >
                  <br/><br/><br/>
                  <form class="">

                    <div class="form-row">
                     <div class="col">   
                    <input type="text" class="form-control p-4 mb-2 mr-sm-2" placeholder="YOUR NAME" required />
                </div>
                <div class="col">
                    <input type="email" class="form-control p-4" placeholder="YOUR EMAIL" required/>
                </div>
                    </div><br/>
                    <div class="form-row">
                        <div class="col">   
                       <input type="text" class="form-control p-4 mb-2 mr-sm-2" placeholder="SUBJECT" required/>
                   </div>
                 
                       </div><br/><br/>
    
                      <textarea class="form-control p-4" rows="8" placeholder="MESSAGE" ></textarea><br/><br/>
    
                    <center><button type="submit" class="btn btn-outline-dark p-3">Send Message</button></center>
    
                 </form>
                </div>
                <div className="mt-5 ml-5 col-md-5" >
                  <img src={plantstore} className="img-fluid" />
                </div>
             </div>
              <Footer className="mt-4 pt-4"/>
             </div>
        </>
    )
}

export default Contact
