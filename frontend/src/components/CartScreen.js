import {React,useState,useEffect} from 'react'
import {addToCart,removeFromCart,DecrementAction,IncrementAction} from "../actions/cartAction";
import {useParams,useLocation,NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { useHistory } from 'react-router';
import {Row,Col,Form,Button,Card,Image,ListGroup,Table} from "react-bootstrap";
import interiorwall from "../Images/interiorwall.jpg"
import Message from './Message';
import { FaRupeeSign,FaInstagram,FaTrash,FaMinus,FaPlus } from "react-icons/fa";
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserAlt,FaPhoneAlt,FaCaretLeft,FaBackward } from "react-icons/fa";


const CartScreen = ({location}) => {

     const {id} = useParams();
     const productId = id;
     console.log(id);
    //  const location = useLocation();
    //  const path = location.pathname;
    //  console.log(path)
    const userSign = useSelector(state => state.userSignin)
    const userLog = useSelector(state => state.userLogin);
   // const {userLInfo} = userLogin;
    var {userInfo} = userSign;
    
    var {userLInfo} = userLog;


    const qty = location.search ? Number(location.search.split('=')[1]) : 1 
    console.log(qty)

     const dispatch = useDispatch();
     
    const history = useHistory();

    useEffect(() => {
        if(productId){
        dispatch(addToCart(id,qty));
        }
    }, [dispatch,id,qty])

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart;
    console.log(cartItems);
    // cartItems.map(item => {
    //     console.log(item.name);
    // })
    const size = cartItems.length;

    const decreaseHandler = (itemid) => {
        if(itemid)
        dispatch(DecrementAction(itemid))
       }

       const increaseHandler = (itemid) => {
           console.log("increasse")
           if(itemid)
            dispatch(IncrementAction(itemid))
       }

    const removeFromCartHandler = (id) => {
     dispatch(removeFromCart(id))
    }

    const CheckoutHandler = () => {
        if(!userLInfo && !userInfo){
          
          history.push("/login")
          toast("Password And RepeatPassword field must be same",{
            position:"top-center"
           });
        }else{
        history.push("/shipping")
        }
    }

    return (
        <>
           
              <img id="aboutimage" src={interiorwall} className="img-fluid"  />
              <center><h1 id="first" style={{position:"relative"}}>Cart</h1><h3 id="firsth3" className="mb-5" style={{position:"relative"}} ><NavLink id="firsth3" to="/">Home </NavLink> <FaCaretLeft className="m-2"/> Cart</h3></center>
              <Row style={{position:"relative"}} className="mt-5 pt-5" id="maincart"> 
               <Col  md={12}>
                 
                 <center><div className="mt-5 pt-5"><h1 className="m-5 pt-5">Your Cart Has {cartItems.reduce((acc,item) => acc + item.qty || qty,0 )} items </h1></div></center>
                 {cartItems.length === 0 ? 
                  (
                     <Message>Your Cart Is Empty!<NavLink to ="/">Go Back</NavLink></Message> 
                  ) : (
                      <>
                      <div className="container">
                       <Table  responsive="xl"  className="table-warning" >
                           <thead  >
                               <tr>
                                   <th className="mt-2 ml-2 p-5" >PRODUCT NAME</th>
                                   <th className="mt-2 ml-3 p-5">PRICE</th>
                                   <th className="mt-2 ml-3 p-5">QUANTITY</th>
                                   <th className="mt-2 ml-3 p-5">TOTAL</th>
                                   <th></th>
                               </tr>
                            </thead>
                            <tbody>
                            {
                                   cartItems.map((item) => (
                                    <tr>
                                       <th > <h3 className="mt-2 mr-2"><span><img width="150" height="200"  src={item.image} /></span>{item.name}</h3> </th> 
                                       <th><h4 className="mt-5 ml-2 p-5">{item.price}</h4></th>
                                       <th><div className="mt-5 pt-5"><button className="btn btn-outline-dark" onClick={() => decreaseHandler(item.product)}><FaMinus  /></button> <input className="col-auto w-25 mr-1 p-1" type="readonly" value={item.qty} /><button className="btn btn-outline-dark" onClick={() => increaseHandler(item.product)}><FaPlus /></button></div></th>
                                       <th><h4 className="mt-5 ml-2 p-5 " >{item.price}</h4></th>
                                       <th><div className="mt-5"><button onClick={() => removeFromCartHandler(item.product)} className="btn btn-outline-danger mt-5  ml-3 pr-3 rounded-circle" ><FaTrash className="" /></button></div></th>
                             

                                    </tr>
                                   ))
                               }
                            </tbody>
                       </Table>

                       <button className=" btn btn-outline-dark btn-lg w-25 mt-3 mb-3 p-3"  >UPDATE CART</button>
                       <a href="/" className="btn btn-success btn-lg w-50 ml-4 mt-3 mb-3 p-3"  >CONTINUE SHOPPING</a>

                      </div>
                      {/* {
                        cartItems.map((item) => ( */}
                      <div className="container mt-5">       
                      <ListGroup variant="flush" className="border mb-5" >
                          <ListGroup.Item className="p-4">CART TOTAL</ListGroup.Item>
                          <ListGroup.Item className="p-4"><h2 className="">Total <span className="mr-5 float-right">
                              {cartItems.reduce((acc,item) => acc + item.qty * item.price,0 ).toFixed(2)}
                          </span></h2>
                          <button className="btn btn-success btn-lg w-50 mt-5 mb-3 p-3" onClick={CheckoutHandler} >PROCEED TO CHECKOUT </button>
                          </ListGroup.Item> 

                      </ListGroup>
                      <ToastContainer/>
                      </div>
                       {/* ))} */}
                      </>
                      
                  )
                 }
               </Col> 
            </Row>
        </>
    )
}

export default CartScreen
