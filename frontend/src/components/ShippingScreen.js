import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShippingAdressAction } from '../actions/cartAction';
import { useHistory } from 'react-router';
import CheckoutStep from './CheckoutStep';

const ShippingScreen = () => {



    const dispatch = useDispatch();
    const history = useHistory();

    const getAddress = useSelector(state => state.cart);
    const {shippingAddress} = getAddress;

    const [country,setCountry] = useState(shippingAddress.country);
    const [address,setaddress] = useState(shippingAddress.address);
    const [state,setstate] = useState(shippingAddress.state);
    const [City,setCity] = useState(shippingAddress.City);
    const [pin,setpin] = useState(shippingAddress.pin);

    const postAddress = (e) => {
     e.preventDefault();   
     dispatch(ShippingAdressAction({country,address,state,City,pin}));
     history.push("/payment")
    }

    return (
        <>
           <div id="fulldiv" className="">
           <center> <section id="mainsection" className="mb-5">
           <center><CheckoutStep step1 step2/></center>
                   <div id="rowdiv" className="row   shadow">
                    {/* <CheckoutStep /> */}
                       <div className="col-lg-5">
                       
                       <h1 className="mt-5"> Shipping Address</h1>
                       <form method="POST" className="p-5 mt-4 mb-4" id="mainform">
                            <div className="form-group">
                              <div className="input-group">
                                {/* <span className="mt-2"><FaUserAlt /></span> */}
                                <input onChange={(e) => setCountry(e.target.value)} value={country} name="Country"  className="form-control " type="text"  id="exampleInputEmail1"  placeholder="Country" />
                             </div>
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                                {/* <span className="mt-2"><GrMail /></span> */}
                                <input onChange={(e) => setstate(e.target.value)} value={state} name="State"  type="text" className="form-control" id="exampleInputPassword1" placeholder="State" />
                             </div>
                                
                            </div>
                            <div className="form-group">
                            <div className="input-group">
                                {/* <span className="mt-2"><GrMail /></span> */}
                                <input onChange={(e) => setCity(e.target.value)} value={City} name="State"  type="text" className="form-control" id="exampleInputPassword1" placeholder="City" />
                             </div>
                                
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                {/* <span className="mt-2"><FaPhoneAlt /></span> */}
                                <input onChange={(e) => setpin(e.target.value)} value={pin} name="Postal Code"  className="form-control " type="number"  id="exampleInputEmail1"  placeholder="Postal Code" />
                             </div>
                            </div>
                           
                            <div className="form-group">
                              <div className="input-group">
                                {/* <span className="mt-2"><FaLock /></span> */}
                                <input onChange={(e) => setaddress(e.target.value)} value={address} name="Address"  className="form-control " type="text"  id="exampleInputEmail1"  placeholder="Address" />
                             </div>
                            </div>
                           
                            
                            <button onClick={postAddress} className="mt-3 pl-4 pr-4 p-3 btn btn-outline-dark form-submit" >CONTINUE </button>
                            </form>
                       </div>
                       
                   </div>
               </section></center>
           </div>   
        </>
    )
}

export default ShippingScreen
