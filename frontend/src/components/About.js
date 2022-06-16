import React from 'react'

import {NavLink} from "react-router-dom";
import { FaUserAlt,FaPhoneAlt,FaCaretLeft,FaBackward } from "react-icons/fa";

import flowershop from "../Images/flowershop.jpg";
import interiorwall from "../Images/interiorwall.jpg"
import Footer from './Footer';
import flowervideo1 from "../videos/flowervideo1.mp4"
import flowervideo2 from "../videos/flowervideo2.mp4"
import HomeContainer from './HomeContainer';


const About = () => {
    return (
        <>
          <div id="aboutmain">
            <img id="aboutimage" src={interiorwall} className="img-fluid " />
             <center><h1 id="first" style={{position:"relative"}}>About Us</h1><h3 id="firsth3" className="mb-5" style={{position:"relative"}} ><NavLink id="firsth3" to="/">Home </NavLink> <FaCaretLeft className="m-2"/> About</h3></center>
             <div  className="row container-fluid" id="aboutfirst">
                <div className=" ml-5 col-md-5" >
                <video className="img-fluid" autoplay="autoplay" muted="muted" loop="loop">
                     <source src={flowervideo1} />
                 </video>
                </div>
                <div className="mt-2 col-md-6" >
                  <br/><br/>
                  <h1 style={{marginTop:"100px"}}>Who We Are</h1><br/><br/>
                  <p style={{fontSize:"20px"}}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     <br/><br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions...
                  </p>
                </div>
             </div><br/><br/><br/><br/>

             <center><h2>WHY TO CHOOSE US ?</h2></center>   <br/>
             <HomeContainer/><br/><br/><br/><br/>

             <div  className="row container-fluid ml-5 mb-5" id="autfirst"o>
               
                <div className="mt-5 col-md-6" >
                  <br/><br/>
                  <h1 style={{marginTop:"100px"}}>Vision</h1><br/><br/>
                  <p style={{fontSize:"20px"}}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     <br/><br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions...
                  </p>
                </div>
                <div className="mt-5 ml-5 col-md-5" >
                <video className="img-fluid" autoplay="autoplay" muted="muted" loop="loop">
                     <source src={flowervideo2} />
                 </video>
                </div>
             </div>

             <div  className="row container-fluid ml-2 mb-5" id="autfirst">
               
                
                <div className="mt-5 col-md-6" >
                <img src={flowershop} className="mt-5 pt-5 img-fluid" />
                </div>
                <div className="mt-5 col-md-6" >
                  <br/><br/><br/>
                  <h1 >Mission</h1><br/>
                  <p style={{fontSize:"20px"}}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     <br/><br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions...
                  </p>
                </div>
             </div><br/><br/>
              <Footer className="mt-4 pt-4"/>
             </div>
        </>
    )
}

export default About
