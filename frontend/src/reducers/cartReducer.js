import {CART_ADD_ITEM,CART_REMOVE_ITEM,INCREMENT,DECREMENT, CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD} from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]} ,action) => {
    switch(action.type) {
        case CART_ADD_ITEM : 
         const item = action.payload;
         const existItem = state.cartItems.find(x => x.product === item.product)
         if(existItem){
         return{
            ...state,
           cartItems: state.cartItems.map(x => x.product === existItem.product ? item:x)
         }
        }else{
            return{
                ...state, cartItems:[...state.cartItems, item]
            }
        } 
        case INCREMENT : 
            let updatedcart = state.cartItems.map((x) => {if(x.product === action.payload){
                {console.log("increse s")}

                return {
                 
                 ...x,qty:x.qty + 1
                }
            }
             console.log("clicked or not")
             return x
            })
            {console.log(updatedcart)}
            return {
               ...state,
              cartItems : updatedcart
            }
        case DECREMENT:
          let updatedtwocart = state.cartItems.map((x) => {if(x.product === action.payload){
             return{
               ...x , qty : x.qty -1 
             }
          }    
          return x
        })
          return{
            ...state,
            cartItems:updatedtwocart
          }  
        case CART_SAVE_SHIPPING_ADDRESS:
          return{
            ...state,
            shippingAddress : action.payload
          }

        case CART_SAVE_PAYMENT_METHOD:
          return{
            ...state,
            paymentmethod:action.payload
          }  
        
        case CART_REMOVE_ITEM : {
            return{
               ...state,
               cartItems: state.cartItems.filter((x) => x.product !== action.payload) 
            }
        }
        default : 
        return state 
    }
}