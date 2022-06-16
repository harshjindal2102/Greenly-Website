import {createStore,combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer,productDetailReducer} from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";
import {userLoginReducer,userSigninReducer ,userDetailReducer} from "./reducers/userReducer";

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const itemsFromLocalStorage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [] 

const addressFromLocalStorage = localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}
//console.log(itemsFromLocalStorage)
const reducer = combineReducers({
    productListReducer:productListReducer,
    productDetailReducer:productDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userSignin:userSigninReducer,
    userDetails:userDetailReducer,
});

const initialState = {
    cart:{cartItems : itemsFromLocalStorage,
        shippingAddress:addressFromLocalStorage
    },
    
    userLogin:{userInfo:userInfoFromStorage},
    userSignin:{userInfo:userInfoFromStorage},

}

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;