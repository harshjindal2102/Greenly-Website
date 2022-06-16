import React, {useState,useEffect} from 'react'
import {productslist} from "../actions/productAction";

import ItemImage from "./ItemImage";
import axios from "axios";
import '../App.css';

import Footer from './Footer';

import { BiUpArrowAlt } from "react-icons/bi";
import {useDispatch,useSelector} from "react-redux";
import Loading from "./Loading";


const StoreScreen = () => {

    const dispatch = useDispatch();   

    const productList = useSelector((state) => state.productListReducer)
    const {loading,error,products} = productList;
    useEffect(() => {
        // const fetchProducts = async () => {
        //     const { data } = await axios.get("/api/products");
           
        //     setProducts(data);
        dispatch(productslist());

        
        //fetchProducts();
    },[dispatch])

    const checkStatus = () => {
        if(loading === true){
          return(
            <Loading />
          )
        }
        
    }

    return (
        <>

           <center><h1 id="storeh1" className="pt-4 mt-4">ALL PRODUCTS</h1></center>  <br />
              {checkStatus()}
               <div className="">
                 <div className="d-flex align-content-start flex-wrap">
                    {products.map((product) => {
                        return(
                            <ItemImage product ={product}
                                // image = {product.image}
                                // name = {product.name}
                                // id = {product.id}
                                // price = {product.price}
                            />
                        )}
                    )}
                 </div>
               </div>
             
        </>
    )
}

export default StoreScreen
