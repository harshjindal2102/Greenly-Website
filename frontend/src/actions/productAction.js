import axios from "axios";
import {PRODUCT_SUCCESS,PRODUCT_REQUEST,PRODUCT_FAILS,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAILS} from "../constants/productconstants";

export const productslist = () => async(dispatch) => {
try{
    dispatch({
        type:PRODUCT_REQUEST,
   
    })
    const {data} = await axios.get(`api/products`);
    console.log(data);
    dispatch({
        type:PRODUCT_SUCCESS,
        payload:data,
        
    })
}catch(err){
  console.log(err);
}
 
}

export const productDetail = (id) => async(dispatch) => {
    try{
     dispatch({
         type:PRODUCT_DETAILS_REQUEST,

     })
     const {data} = await axios.get(`/api/products/${id}`);
     dispatch({
         type:PRODUCT_DETAILS_SUCCESS,
         payload:data
     })
    }catch(err){
        console.log(err);
    }
}