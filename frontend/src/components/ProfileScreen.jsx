import {React,useState,useEffect} from 'react'
import { FaLock } from "react-icons/fa";
import { FaUserAlt,FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillProfile } from "react-icons/ai";
import {NavLink, useHistory} from 'react-router-dom';

import {getUserDetails, Signin} from "../actions/userAction";
import {useDispatch, useSelector} from "react-redux";


const ProfileScreen = () => {

  const [userinfo,setuser] = useState({
    name :"",email:"",phone:"",password:"",rpassword:""
  })

  const history = useHistory();

  const userSign = useSelector(state => state.userSignin)
  const userLog = useSelector(state => state.userLogin);
 // const {userLInfo} = userLogin;
  var {userInfo} = userSign;
  
  var {userLInfo} = userLog;

  //  useEffect(() => {
  //      if(!userInfo){
  //          history.push('/login');
  //      }else{
           
  //              dispatch(getUserDetails('profile'))
           
  //           //    setName(user.name);
  //           //    setEmail(user.email);
           
  //      }
  //  },[history,userInfo,user,dispatch])

     let name,value;
    const handleInputEvent = (e) => {
      name = e.target.name
      value=e.target.value

      setuser({...userinfo,[name]:value})

    }

    
    
    return (
        <>
           <div id="fulldiv" className="">
           <center> <section id="mainsection" className="mb-5">
                   <div id="rowdiv" className="row   shadow">
                       <div className="col-lg-5">
                       <h1 className="mt-5"> YOUR PROFILE</h1>
                      
                       {userInfo ? (
                         <>
                         <form className="p-5 mt-4 mb-4" id="mainform">
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaUserAlt /></span>
                                <input value={userInfo.name} name="name"  className="form-control " type="text"   />
                             </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                                <span className="mt-2"><GrMail /></span>
                                <input value={userInfo.email} name="email"  type="email" className="form-control"   />
                             </div>
                                
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaPhoneAlt /></span>
                                <input value={userInfo.phone} name="phone"  className="form-control " type="number"  />
                             </div>
                            </div>
                           
                           
                            
                            
                            
                            </form>
                         </>
                       ) : (
                          <>
                          <form method="POST" className="p-5 mt-4 mb-4" id="mainform">
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaUserAlt /></span>
                                <input value={userLInfo.name} name="name"  className="form-control " type="text"   />
                             </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                                <span className="mt-2"><GrMail /></span>
                                <input value={userLInfo.email} name="email"  type="email" className="form-control"   />
                             </div>
                                
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaPhoneAlt /></span>
                                <input value={userLInfo.phone} name="phone"  className="form-control " type="number"  />
                             </div>
                            </div>
                           
                
                          
                            
                           
                            </form>
                          </>
                       )}
                       
                       </div>
                       <div className="col-lg-6">
                          <img className="mt-5 p-4 img-flui" style={{width:"500px"}} src="" />
                       </div>
                   </div>
               </section></center>
           </div>  
        </>
    )
}

export default ProfileScreen
