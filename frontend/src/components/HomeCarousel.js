import React from 'react'
import "../App.css"
import {Carousel} from "react-bootstrap";
import home3bre from "../Images/home3bre.png";
import home4rbg from "../Images/home4rbg.png";
import home5rbg from "../Images/home5rbg.png";
import { BiRupee } from "react-icons/bi";
import { useHistory } from 'react-router';

const HomeCarousel = () => {

  const history = useHistory();

  const routestorehaandler = () => {
    history.push('/store')
  }


    return (
        <>
            <Carousel>
            <Carousel.Item> 
                   <section className="pb-4"  style={{background:"#ffe4e1"}}>
                      <div className="container">
                       <div className="row">
                         <div className="col-lg-5">
                           <img className="img-fluid"  src={home3bre} height="600" width="450"/>
                         </div>
                         <div className="mt-5 col-lg-5">
                          <div className="jus" style={{justifyContent:"center" , alignItems:"center"}}>
                           <br/><br/><br/><br/>
                            <p>House Plant, Office Plant</p>
                            <h2>Chakra Crystal Healing</h2>  
                            <h5><span><BiRupee/></span>350.00</h5>
                            <button className="mt-3 btn btn-outline-success p-3" onClick={routestorehaandler}>Checkout</button>
                            </div>
                         </div>
                       </div>

                      </div> 
                   </section>
               </Carousel.Item>
            <Carousel.Item id="ci">
                   <section className="pb-4" style={{backgroundColor:"lightgoldenrodyellow"}} >
                      <div className="container mb-3">
                       <div className="row">
                         <div className="col-lg-5">
                           <img className="img-fluid" src={home5rbg} />
                         </div>
                         <div className="mt-5 col-lg-5">
                          <div className="justify-content-center">
                          <br/><br/><br/><br/>
                            <p>House Plant, Office Plant</p>
                            <h2>Chakra Crystal Healing</h2>  
                            <h5><span><BiRupee/></span>350.00</h5>
                            <button className="mt-3 p-3 btn btn-outline-success" onClick={routestorehaandler}>Checkout</button>
                            </div>
                         </div>
                       </div>

                      </div>
                   </section>
               </Carousel.Item>
               
               <Carousel.Item>
                   <section className="pb-4" style={{background:"lightcyan"}}>
                      <div className="container">
                       <div className="row">
                         <div className="col-lg-5">
                           <img className="img-fluid" src={home4rbg} />
                         </div>
                         <div className="mt-5 col-lg-5">
                          <div className="justify-content-center">
                          <br/><br/><br/><br/>
                            <p>House Plant, Office Plant</p>
                            <h2>Chakra Crystal Healing</h2>  
                            <h5><span><BiRupee/></span>350.00</h5>
                            <button className="mt-3 p-3 btn btn-outline-success" onClick={routestorehaandler}>Checkout</button>
                            </div>
                         </div>
                       </div>

                      </div> 
                   </section>
               </Carousel.Item>
               
           </Carousel>  
        </>
    )
}

export default HomeCarousel
