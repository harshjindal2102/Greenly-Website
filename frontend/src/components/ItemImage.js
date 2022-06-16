import React, { useState } from 'react'
import { Figure } from 'react-bootstrap'
import Rating from './Rating'
import { BiRupee } from "react-icons/bi";
import "../App.css"
//import { BiRupee } from "react-icons/bi";
import { FaTelegramPlane,FaPhoneAlt,FaShoppingCart } from "react-icons/fa";
import {addTocart} from "../actions/cartAction";
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const ItemImage = ({product}) => {
    const [qty,setqty] = useState(1);
    const history = useHistory();

    const addToCartHandler = () => {
        history.push(`/cart/${product._id}/?qty=${qty}`)
    }

    return (
        <>
            <div id="itemdiv">
            <div className="ml-5">
            <Figure className="p-3 " id="mainfig">
                 <a href ={`/api/products/${product._id}`}>
                 <Figure.Image className="mt-3" width="240" height="400" src={product.image} />
                 </a>
                 
                 <Figure.Caption>{product.name}</Figure.Caption>
                 <h4><span id="actualpspan" className="font-weight-light"><del ><BiRupee />{product.actualprice}</del></span><BiRupee />{product.discountprice}</h4>
                 <Rating value={product.rating} />
                 
                 <div id="cflinks">
                 <button id="cartbutton" onClick={addToCartHandler} className="mt-2 p-2 btn btn-outline-dark w-100" >Add to Cart</button>
                 {/* <a href="#" className="p-2 btn btn-light w-50" >Fav</a> */}
                 </div>
             </Figure>    
             
             
             </div>
             </div>
        </>
    )
}

export default ItemImage
