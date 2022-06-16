import React, {useState,useEffect} from 'react'
import {Carousel} from "react-bootstrap";
import {productslist} from "../actions/productAction";
import home2br from "../Images/home2br.png";
import ItemImage from "./ItemImage";
import axios from "axios";
import '../App.css';
import plantvideo from "../videos/plantvideo.mp4"
import Footer from './Footer';
import HomeCarousel from './HomeCarousel';
import { BiUpArrowAlt } from "react-icons/bi";
import {useDispatch,useSelector} from "react-redux";
import { useHistory } from 'react-router';
import Loading from "./Loading";
import Message from "./Message";
import HomeContainer from './HomeContainer';


const Home = () => {

    const dispatch = useDispatch();    
    const history = useHistory();   
    //const [Products,setProducts] = useState([]);
    const [visible,setvisible] = useState("");

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if(scrolled>200){
        setvisible(true)
      }else{
        setvisible(false)
      }
    }

    const productList = useSelector((state) => state.productListReducer)
    const {loading,error,products} = productList;
    useEffect(() => {
        // const fetchProducts = async () => {
        //     const { data } = await axios.get("/api/products");
           
        //     setProducts(data);
        dispatch(productslist());

        
        //fetchProducts();
    },[dispatch])
   
    console.log(products);
   const checkStatus = () => {
       if(loading === true){
         return(
           <Loading />
         )
       }
       
   }

   var count =1;

   const gouphandler = () => {
     
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
   }
   window.addEventListener('scroll', toggleVisible);

   const storeHandler = () => {
     history.push("/store")
   }

    return (
        <>
          
          {/* { 
          loading ? (<Loading /> ): error ?( <Message variant="danger">{error}</Message>) : */}
         <div id="uparrow" className=" fixed-bottom">
           <button onClick={gouphandler} className="btn btn-outline-success btn-lg float-right m-4" style={{display: visible ? 'inline' : 'none'}}><BiUpArrowAlt /></button>
         </div>
         <div id="homediv">
           <HomeCarousel /> 

           <section id="secondone" className="pt-5 pb-4">
               <div className="row m-2 p-5">
                 <div className="col-md-6">
                   <h1>The most important things are not things so we’ll design experiences.</h1>
                   <h4 className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam ipsam ullam incidunt itaque nemo omnis
                    temporibus totam quibusdam repellat vero, recusandae
                    excepturi dignissimos velit et alias amet, quia facilis
                    perferendis.</h4>
                 </div>
                 <div className="col-md-6">
                    <img src={home2br} className="img-fluid"  />
                 </div>
               </div>
           </section><br/><br/>
           <HomeContainer/>
           <br/><br/><section id="thirdone" className="m-0">
              <center><h1 className="pt-4">LATEST PRODUCTS</h1></center>  <br />
              {checkStatus()}
               <div className="">
                 <div className="d-flex align-content-start flex-wrap">
                    
                      
                     { products.map((product) => {
                          
                          {if(count > 12){
                            return
                            
                          }else{
                            
                          count += 1;
                           return(
                           <>
                            <ItemImage product ={product}  />
                           </>
                           )
                          }

                        
                        
                         
                        }
                     }
                    )
                    
                  }
                           
                    
                      
                    
                 </div>
               </div>

               <center><button id="mpbutton" onClick={storeHandler} className="btn btn-success pl-5 pr-5 pt-3 pb-3" >More Products</button></center><br/>
               
           </section>

           <section id="fourthone" className="pt-5 pb-5">

             <video id="myVideo" autoplay="autoplay" muted="muted" loop="loop">
               <source  src={plantvideo} type="video/mp4"/>
             </video>

           </section>
           <section id="fifthone" className="mb-5 pt-5 pb-5">
             <center>
               <h3>NEWSLETTER</h3>
               <h3>TO GET IN TOUCH</h3><br/><br/>
               <input id="emailinput" className="form-control p-5 w-25" type="text"  placeholder="Enter Your E-mail" />
               <button className="btn btn-outline-success pl-5 pr-5 pt-3 pb-3 mt-5">SUBSCRIBE</button>
             </center>
           </section>
           <Footer />
           </div>
          
        </>
    )
}

export default Home
