import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";

import Rating from "./Rating";
import { BiRupee } from "react-icons/bi";

import '../App.css';
import {useDispatch,useSelector} from "react-redux";
import {productDetail} from "../actions/productAction";
import {Form} from "react-bootstrap";

const ProductDetails = ({history}) => {
    const [qty,setqty] = useState(1);
  //  const product = Product.find((p) => p.id === match.params.id)
    const dispatch = useDispatch();
    const {id} = useParams();
   // console.log(match.params.id)
   // const[Product,SetProductDetail] = useState([]);
    const detailproduct = useSelector(state => state.productDetailReducer)
    const {loading,error,Product} = detailproduct;
    useEffect(() => {
      //   const fetchProducts = async() => {
      //      const {data} = await axios.get(`/api/products/${id}`);
      //      SetProductDetail(data);
      //   }
      //   fetchProducts();
        dispatch(productDetail(id))
     },[dispatch,id])
     console.log(Product);

     const addToCart = () => {
       history.push(`/cart/${id}?qty=${qty}`)
     }

    return (
        <>
             <div className="row m-2" id="DetailDiv" >
               <div className="col-lg-4">
                 <center><img src ={Product.image}  /></center>

               </div>
               <div className="col-lg-4">
                  <h2 className="mt-5">{Product.name}</h2>
                  <h4><span id="actualpspan" className="font-weight-light"><del ><BiRupee />{Product.actualprice}</del></span><BiRupee />{Product.discountprice}<span className="float-right"><Rating value={Product.rating}/></span></h4>
                  <hr className="mt-5" />
                  <p>Calf-length dress in airy, textured cotton fabric with a printed pattern Plants are not only green plants but also vegetables. Even omnivores need lots of vegetables. The principle of eating helps to protect health is "Eat - Not too much - Eat lots of vegetables and fruits". Eat plenty of...</p><br/>
                  <Form.Control as="select" value={qty} onChange={(e) => setqty(e.target.value)}  >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                </Form.Control>
                  <button className="btn btn-block btn-success p-3 mt-4" onClick={addToCart} >ADD TO CART</button><br/>
                  {/* <button className="btn btn-block btn-dark p-3">BUY IT NOW</button> */}
               </div>
               <div id="pdboxmaindiv"  className="col-lg-4 mt-5">
                 <div className=" p-5 m-3">
                    <center>
                     <h3>WHY CHOOSE US?</h3><br/>
                     <p>Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused</p>
                    </center> 
                 </div>
                 <div className=" p-5 m-3">
                    <center>
                     <h3>RETURNS</h3><br/>
                     <p>Return this Product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described</p>
                    </center> 
                 </div>
                 <div className=" p-5 m-3">
                    <center>
                     <h3>SHIPPING</h3><br/>
                     <p>Free if stated near price. $9.95 Australia wide (up to 10 items). $18.95 for Express Post (generally 1 business day).</p>
                    </center> 
                 </div>
               </div>
             </div>
        </>
    ) 
}

export default ProductDetails
