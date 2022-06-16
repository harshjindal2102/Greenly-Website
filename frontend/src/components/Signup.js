import {React,useState,useEffect} from 'react'
import { FaLock } from "react-icons/fa";
import { FaUserAlt,FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillProfile } from "react-icons/ai";
import {NavLink, useHistory} from 'react-router-dom';

import {Signin} from "../actions/userAction";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {

  const [user,setuser] = useState({
    name :"",email:"",phone:"",password:"",rpassword:""
  })

  const history = useHistory();

  const dispatch = useDispatch();
  const userSign = useSelector(state => state.userSignin);

   const {loading,userInfo} = userSign;
   console.log(userInfo);

     let name,value;
    const handleInputEvent = (e) => {
      name = e.target.name
      value=e.target.value

      setuser({...user,[name]:value})

    }

    useEffect(() => {
      if(userInfo){
        history.push("/");
      }
    },[history,userInfo])

    const postData = (e) => {
      e.preventDefault();
      console.log("clicked")

       if(user.name === "" || user.email ==="" || user.phone === "" || user.password === "" || user.rpassword === ""){
        toast.dark("All Fields Required",{
          position:"top-center"
      });
       
      }
      else if(user.password != user.rpassword){
        toast.dark("Password And RepeatPassword field must be same",{
          position:"top-center",
         
         });
       }else{

       dispatch(Signin(user.name,user.email,user.phone,user.password,user.rpassword))
       console.log(userInfo);
       }
    }
    
    return (
        <>
           <div id="fulldiv" className="">
           <center> <section id="mainsection" className="mb-5">
                   <div id="rowdiv" className="row   shadow">
                       <div className="col-lg-5">
                       <h1 className="mt-5"> Sign Up</h1>
                       <form method="POST" className="p-5 mt-4 mb-4" id="mainform">
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaUserAlt /></span>
                                <input onChange={handleInputEvent} value={user.name} name="name"  className="form-control " type="text"   placeholder="Your Name" />
                             </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                                <span className="mt-2"><GrMail /></span>
                                <input onChange={handleInputEvent} value={user.email} name="email"  type="email" className="form-control"  placeholder="Your Email" />
                             </div>
                                
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaPhoneAlt /></span>
                                <input onChange={handleInputEvent} value={user.phone} name="phone"  className="form-control " type="number"   placeholder="Your Mobile Number" />
                             </div>
                            </div>
                           
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaLock /></span>
                                <input onChange={handleInputEvent} value={user.password} name="password"  className="form-control " type="password"  placeholder="Password" />
                             </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaLock /></span>
                                <input onChange={handleInputEvent} value={user.rpassword} name="rpassword"  className="form-control " type="password"  placeholder="Confirm Password" />
                             </div>
                            </div>
                            
                            <button name ="signup" onClick={postData} className="mt-3 pl-4 pr-4 p-3 btn btn-primary form-submit"> Sign up</button>
                            </form>
                            <ToastContainer id="toast"/>
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

export default Signup
