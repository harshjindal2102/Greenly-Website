import {React,useState,useEffect} from 'react';
import { FaLock ,FaFacebookF,FaTwitter} from "react-icons/fa";
import { FaUserAlt,FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

import {NavLink, useHistory} from 'react-router-dom';

import {login} from "../actions/userAction";
import {useDispatch, useSelector} from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email,setemail] = useState('');

    const [password,setpassword] = useState('');
    const history = useHistory();

    const dispatch = useDispatch();
    const userLog = useSelector(state => state.userLogin);

    const {loading,userLInfo} = userLog;
    console.log(userLInfo);
 
    useEffect(() => {
        if(userLInfo){
          history.push("/");
        }
      },[history,userLInfo])

    const checklogin = (e) => {
        e.preventDefault();
         console.log("clicked")
        dispatch(login(email,password));

        // if(userLInfo)
        // {
        //     history.push("/");   
        // }


        // const res = await fetch("/login" ,{
        //     method : "POST",
        //     headers : {
        //      "Content-Type":"application/json"
 
        //     },
        //     body: JSON.stringify({
        //         email:email , password:password
        //     })
 
        // })

        // const data = await res.json();
        // console.log(data);

    }
     
    return (
        <>
             <div id="fulldiv" className="mt-0">
           <center> <section id="mainsection" className="mb-5">
                   <div id="rowdiv" className="row mt-5 mb-4 pb-4  container shadow">
                     
                       <div className="col-lg-5">
                       <h1 className="mt-5"> Sign In</h1>
                       {/* { (loading) (<Loading />) } */}
                       <form method="POST" className="p-5 mt-4 mb-4" id="mainform">
                            
                            <div className="form-group">
                            <div className="input-group">
                                <span className="mt-2"><GrMail /></span>
                                <input name="email" value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" placeholder="Your Email" />
                             </div>
                                
                            </div>
                            
                           
                            <div className="form-group">
                              <div className="input-group">
                                <span className="mt-2"><FaLock /></span>
                                <input name="password"  value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" type="password"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                             </div>
                            </div>
                            
                            
                            <button name="login" onClick={checklogin} type="submit" className="mt-2 pl-4 pr-4 p-3 btn btn-primary"  >Log In</button>
                            </form>

                            <h6>Or Login With  <button className="btn btn-info ml-2"><FaFacebookF /></button><button className="btn btn-light"><FcGoogle /></button><button className="btn btn-primary"><FaTwitter/></button></h6><br />
                            <NavLink to="/Signup" className="mb-3">Create an Account..</NavLink><br /><br />
                       </div>
                       <ToastContainer/>
                       <div className="col-lg-6">
                          <img className="mt-5 p-4 img-fluid" style={{width:"900px"}} src=""  />
                         
                       </div>
                     
                   </div>
               </section></center>
           </div> 
        </>
    )
}

export default Login
