import {CART_ADD_ITEM,CART_REMOVE_ITEM,INCREMENT,DECREMENT, CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD} from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id,qty) => async(dispatch,getState) => {
 const {data} = await axios.get(`/api/products/${id}`)
  
  dispatch({
      type:CART_ADD_ITEM,
      payload:{
        product: data._id,
        name:data.name,
        image:data.image,
        price:data.actualprice,
        qty
      }
  })


  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));

}

export const IncrementAction = (id) => async(dispatch,getState) => {
  console.log("Action rreached")
 dispatch({
     type:INCREMENT,
     payload:id
 })

 localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

export const DecrementAction = (id) => async(dispatch,getState) => {
  dispatch({
      type:DECREMENT,
      payload:id
  })

  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

export const ShippingAdressAction = (data) => (dispatch) => {
   dispatch({
     type:CART_SAVE_SHIPPING_ADDRESS,
     payload:data
   })

   localStorage.setItem("shippingAddress",JSON.stringify(data))
}

export const removeFromCart = (id) => (dispatch,getState) => {
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id
  })
  
  localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

}

export const savePaymentMethods = (data) => dispatch => {
  dispatch({
    type:CART_SAVE_PAYMENT_METHOD,
    payload:data
  })

  localStorage.setItem("paymentmethod" ,JSON.stringify(data));
}