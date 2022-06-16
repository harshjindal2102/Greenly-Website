import {PRODUCT_SUCCESS,PRODUCT_REQUEST,PRODUCT_FAILS,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAILS} from "../constants/productconstants";

export const productListReducer = (state = {products:[]},action) => {
 switch(action.type){
     case PRODUCT_REQUEST:
        return {loading:true, products:[]}
     case PRODUCT_SUCCESS:
        return {loading:false, products:action.payload}
     case PRODUCT_FAILS:
        return {loading:true, error:[]} 
     default:
         return state;   
     
 }
}

export const productDetailReducer = (state = {Product:[]},action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
          return {loading:true,Product:[]}
        case PRODUCT_DETAILS_SUCCESS:
          return {loading:false, Product:action.payload}
        case PRODUCT_DETAILS_FAILS:
          return {loading:true, error:[]}      
        default:
            return state;     
    }
}