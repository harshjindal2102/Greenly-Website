import React, { useState } from 'react'
 import {Form,Button,Col,Row} from "react-bootstrap"
import CheckoutStep from './CheckoutStep'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { savePaymentMethods } from '../actions/cartAction'
import { GiCash } from "react-icons/gi";
import { FaPaypal,FaCreditCard,FaAmazonPay } from "react-icons/fa";

const PaymentScreen = () => {

    
    const [paymentmethod,setPaymentMethod] = useState('Credit Card Or Debit Card');
    const getAddress = useSelector(state => state.cart);
    const {shippingAddress} = getAddress;

    if(!shippingAddress){
        history.push("/shipping")
    }
    const dispatch = useDispatch();

    const history = useHistory();

    const submitHandler = (e) => {
        dispatch(savePaymentMethods(paymentmethod))
        history.push('/finalgesture')
    }

    return (
        <>
        <div id="fulldiv" className="">
            <section id="mainsection" className=" container mb-5 ">
           <center> <h1 className="mt-5 mb-3"> Payment Screen</h1>   </center>
                   <div id="rowiv" className="row shadow" style={{minHeight:"70vh"}}>
                   
                       
                      
                  <Form onSubmit={submitHandler} className="p-5">
                      <Form.Group>
                          <Form.Label as="legend" className="text-decoration">
                              Select Payment Method
                          </Form.Label><br/>
                          <Row>
                          <Col xs={1}>
                               <button className="btn btn-md"><FaCreditCard className="mb-1"/></button>
                               <button className="btn btn-md"><FaAmazonPay className="mb-1"/></button>
                               <button className="btn btn-md"><FaPaypal className="mb-1"/></button>
                               
                               <button className="btn btn-md"><GiCash className="mb-1"/></button>
                          </Col>
                          <Col className="">
                              <Form.Check className="mb-3 mt-2"  type="radio" label="Credit Card Or Debit Card" id="cc" name="paymentmethod" value="cc" onChange={(e) => setPaymentMethod(e.target.value)}>

                              </Form.Check>
                              <Form.Check className="mb-3" type="radio" label="Amazon Pay" id="amazonpay" name="paymentmethod" value="amazonpay" onChange={(e) => setPaymentMethod(e.target.value)}>

                              </Form.Check>
                              <Form.Check className="mb-3" type="radio" label="Paypal" id="paypal" name="paymentmethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}>

                              </Form.Check>
                              
                              <Form.Check className="mb-3" type="radio" label="Cash" id="cash" name="paymentmethod" value="cash" onChange={(e) => setPaymentMethod(e.target.value)}>

                              </Form.Check>
                              
                          </Col>
                          </Row>
                         
                      </Form.Group>
                      <button type="submit" className="btn btn-dark p-3" >CONTINUE</button>
                  </Form>
                       
                       {/* <div className="col-lg-4">
                          <img className="mt-5 p-4 img-flui" style={{width:"500px"}} src="" />
                       </div> */}
                   </div>
                   <br/><br/><br/><br/><br/><br/>
               </section>
           </div>  
          
        </>
    )
}


export default PaymentScreen
