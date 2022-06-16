import React from 'react'
import redbg from "../Images/redbg.jpg"
import thanks3 from "../Images/thanks3.jpg"
import App from '../App.css'
import { useDispatch,useSelector } from "react-redux";

const LastScreen = () => {

    const userSign = useSelector(state => state.userSignin)
    const userLog = useSelector(state => state.userLogin);
   // const {userLInfo} = userLogin;
    var {userInfo} = userSign;
    
    var {userLInfo} = userLog;

    return (
        <>
         <div>
            <img className="img-fluid" height="700" width="500"  id="lastbg" src={redbg} />
            <div id="lastdiv">
             <center>
              <img className="rounded img-fluid" id="thanksbg" width="100" height={200} src={thanks3} />
              {userInfo ? (
                <h2 className="mt-5">Thanks <strong>{userInfo.name}</strong> For Visiting Our Website....</h2>
              ) : (
                  <>
                <h2 className="mt-5">Thanks <u><strong>{userLInfo.name}</strong></u> For Visiting Our Website....</h2>
                </>
              )}
              
              <h2>Hope For Your Better Future</h2>
             </center>
            </div>
         </div>   
        </>
    )
}

export default LastScreen
