import axios from "axios";
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS,USER_SIGNUP_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL} from "../constants/userConstants";

export const logout = () => async(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type:USER_LOGOUT,
       
    })
}

export const login = (email,password) => async(dispatch) => {
  try{  
  dispatch({
      type:USER_LOGIN_REQUEST
  })
  const config = {headers:{"Content-type":"application/json"}}
  const {data} = await axios.post("/login",{email,password},config);
  console.log(data);
  dispatch({
      type:USER_LOGIN_SUCCESS,
      payload:data

  })

  localStorage.setItem("userInfo",JSON.stringify(data))
}catch(err){
    dispatch({
        type:USER_LOGIN_FAIL,
        payload:err
    })
}
  
}

export const Signin = (name,email,phone,password,rpassword) => async(dispatch) => {

  try{  
    console.log("yes")
    dispatch({
        type:USER_SIGNUP_REQUEST
    })
    const config = {headers:{"Content-type":"application/json"}}
    const {data} = await axios.post("/signup",{name,email,phone,password,rpassword},config);
    console.log(data);
  //   if(res.json === 200){
  //       console.log(res.json);
  //   }
    dispatch({
        type:USER_SIGNUP_SUCCESS,
        payload:data
  
    })
  
    localStorage.setItem("userInfo",JSON.stringify(data))
  }catch(err){
      dispatch({
          type:USER_SIGNUP_FAIL,
          payload:err
      })
  }

}

export const getUserDetails = (id) => async(dispatch,getState)  => {
  try{
     dispatch({
       type:USER_DETAILS_REQUEST
     })
     const {userLogin:{userInfo}} = getState();
     const config = {headers: {"Content-Type":"application/json" , Authorization:`Bearer ${userInfo.token}`} }
     const {data} = axios.get(`/api/users/${id}`,config)
     dispatch({
       type:USER_DETAILS_SUCCESS
     })
  }catch(error){
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message? error.response.data.message : error.message 
    })  
  }
}

